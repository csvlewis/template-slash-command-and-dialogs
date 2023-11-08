const debug = require('debug')('slash-command-template:ticket');
const api = require('./api');
const payloads = require('./payloads');
const https = require('https');

/*
 *  Send ticket creation confirmation via
 *  chat.postMessage to the user who created it
 */
const sendConfirmation = async (ticket) => {
  // open a DM channel for that user
  let channel = await api.callAPIMethod('conversations.open', {
    users: ticket.userId
  })

  let message = payloads.confirmation({
    channel_id: channel.channel.id,
    cluster: ticket.cluster,
    forwarder: ticket.forwarder,
    description: ticket.description
  });

  let result = await api.callAPIMethod('chat.postMessage', message)
  debug('sendConfirmation: %o', result);
};

// Create Shortcut ticket
const create = async (userId, view) => {
  let values = view.state.values;
  const cluster = values?.cluster_block?.cluster?.selected_option?.text?.text
  const forwarder = values?.forwarder_block?.forwarder?.selected_option?.text?.text
  const description = values?.description_block?.description?.value

  // TODO: create lookup table to match email from Slack to Shortcut user id for "requested_by_id"
  // let result = await api.callAPIMethod('users.info', {
  //   user: userId
  // });

  // const email = result.user.profile.email

  const options = {
    hostname: 'api.app.shortcut.com',
    path: '/api/v3/stories',
    port: 443,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Shortcut-Token': process.env.SHORTCUT_TOKEN
    }
  }

  const data = JSON.stringify({
    "archived": false,
    "move_to": "first",
    "name": `New Forwarder Request: Add ${forwarder} to ${cluster}`,
    "description": description,
    "requested_by_id": process.env.SHORTCUT_USER_ID,
    "story_type": "feature",
    "project_id": 186
 })

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
      console.log('d', d)
    })
  })

  req.on('error', error => {
    console.log('error', error)
  })

  req.write(data)
  req.end();
  
  await sendConfirmation({
    userId,
    cluster: cluster,
    forwarder: forwarder,
    description: description || 'No description',
  });
};

module.exports = { create, sendConfirmation };
