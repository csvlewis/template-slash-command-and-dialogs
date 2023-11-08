const debug = require('debug')('slash-command-template:ticket');
const api = require('./api');
const payloads = require('./payloads');
const https = require('https');

// Send metrics data via chat.postMessage to the user who ran the query
const sendMetricsData = async (metrics) => {
  // open a DM channel for that user
  const data = JSON.stringify(metrics.data.substring(9))
  const json = JSON.parse(JSON.parse(data))
  let channel = await api.callAPIMethod('conversations.open', {
    users: metrics.userId
  })

  let tableData = "``` ------------------------------- ---------------- ----------------\n| Write Key                     | Successes      |  Errors        |\n =============================== ================ ================\n"
  const tableDataEnd = " ------------------------------- ---------------- ----------------```"

  json?.data?.actor?.account?.nrql?.results.forEach(p => {
    const pipelineData = `| ${p.writeKey.padEnd(30)}| ${p.Success.toString().padEnd(15)}| ${p.Errors.toString().padEnd(15)}|\n`
    tableData = tableData.concat(pipelineData)
  })

  tableData = tableData.concat(tableDataEnd)

  let message = payloads.confirmation({
    channel_id: channel.channel.id,
    data: json?.errors ? `Error: ${json?.errors[0]?.message}` : tableData,
    cluster: metrics.cluster,
    timeframe: metrics.timeframeText.toLowerCase()
  });

  let result = await api.callAPIMethod('chat.postMessage', message)
  debug('sendMetricsData: %o', result);
};

// Fetch cluster data from New Relic
const create = async (userId, view) => {  
  let values = view.state.values;
  const cluster = values?.cluster_block?.cluster?.selected_option?.value
  const timeframeText = values?.timeframe_block?.timeframe?.selected_option?.text?.text
  const timeframe = values?.timeframe_block?.timeframe?.selected_option?.value
  const options = {
    hostname: 'api.newrelic.com',
    path: '/graphql',
    port: 443,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.NEW_RELIC_API_KEY
    }
  }

  const data = JSON.stringify({"query":"{\n  actor {\n    account(id: 2860356) {\n      id\n      nrql(query: \"SELECT sum(transformer_forwarder_sent_success_total) AS \u0027Success\u0027, sum(transformer_forwarder_sent_error_total) AS \u0027Errors\u0027 FROM Metric WHERE (clusterName IN (\u0027" + cluster + "\u0027)) FACET`writeKey` LIMIT MAX SINCE 1 " + timeframe + " AGO\") {\n        results\n      }\n    }\n  }\n}", "variables":""})

  let metricsData

  const req = https.request(options, res => {
    res.setEncoding('utf8');
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', d => {
      metricsData += d
    })
    res.on('end', d => {
      sendMetricsData({
        userId,
        cluster,
        timeframeText,
        data: metricsData
      });
    })
  })

  req.on('error', error => {
    console.log('error', error)
  })

  req.write(data)
  req.end();
  };

module.exports = { create, sendMetricsData };
