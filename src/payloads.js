module.exports = {
    confirmation: context => {
        return {
            channel: context.channel_id,
            text: 'Cluster Metrics Query Results',
            blocks: JSON.stringify([
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `*Cluster metrics for ${context.cluster} over ${context.timeframe}*`
                    }
                },
                {
                    type: 'divider'
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: context.data
                    }
                }
            ])
        }
    },
    modal: context => {
        return {
            trigger_id: context.trigger_id,
            view: JSON.stringify({
                type: 'modal',
                title: {
                    type: 'plain_text',
                    text: 'Query Cluster Metrics'
                },
                callback_id: 'submit-ticket',
                submit: {
                    type: 'plain_text',
                    text: 'Run Query'
                },
                blocks: [
                    {
                        block_id: 'cluster_block',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Cluster'
                        },
                        element: {
                            action_id: 'cluster',
                            type: 'static_select',
                            options: [
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "alg-prod"
                                    },
                                    value: "alg-prod"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "allegro-dev1-blue"
                                    },
                                    value: "allegro-dev1-blue"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "applelg-prod"
                                    },
                                    value: "applelg-prod"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "atlassian-prod"
                                    },
                                    value: "atlassian-prod"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "autodesk-prod"
                                    },
                                    value: "autodesk-prod"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "bmind-staging"
                                    },
                                    value: "bmind-staging"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "bridebook-prod"
                                    },
                                    value: "bridebook-prod"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "bs-prod"
                                    },
                                    value: "bs-prod"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "bw-prod"
                                    },
                                    value: "bw-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "prod"
                                    },
                                    value: "prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "cm-prod"
                                    },
                                    value: "cm-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "ctc-prod"
                                    },
                                    value: "ctc-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "dell-prod"
                                    },
                                    value: "dell-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "demo-prod"
                                    },
                                    value: "demo-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "em-staging"
                                    },
                                    value: "em-staging"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "fiskars-prod"
                                    },
                                    value: "fiskars-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "gohealth-prod"
                                    },
                                    value: "gohealth-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "gohealth-prod-qa"
                                    },
                                    value: "gohealth-prod-qa"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "gohealth-prod-uat"
                                    },
                                    value: "gohealth-prod-uat"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "hearst-prod"
                                    },
                                    value: "hearst-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "hft-prod"
                                    },
                                    value: "hft-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "homer-prod1-ap-south-1"
                                    },
                                    value: "homer-prod1-ap-south-1"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "homer-prod1-us-east-1"
                                    },
                                    value: "homer-prod1-us-east-1"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "homer-staging1-us-east-1"
                                    },
                                    value: "homer-staging1-us-east-1"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "hp-prod"
                                    },
                                    value: "hp-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "jh-prod"
                                    },
                                    value: "jh-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "lla-prod"
                                    },
                                    value: "lla-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "local-dev"
                                    },
                                    value: "local-dev"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "merkle-staging"
                                    },
                                    value: "merkle-staging"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "mk-prod"
                                    },
                                    value: "mk-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "mr-platform-staging1-blue"
                                    },
                                    value: "mr-platform-staging1-blue"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "mr-platform-staging2-blue"
                                    },
                                    value: "mr-platform-staging2-blue"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "mr-platform-staging3-blue"
                                    },
                                    value: "mr-platform-staging3-blue"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "mr-prod"
                                    },
                                    value: "mr-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "mr-review1"
                                    },
                                    value: "mr-review1"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "mtb-prod"
                                    },
                                    value: "mtb-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "outside-media-prod"
                                    },
                                    value: "outside-media-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "sca-prod"
                                    },
                                    value: "sca-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "skechers-prod"
                                    },
                                    value: "skechers-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "sony-prod"
                                    },
                                    value: "sony-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "tcb-prod"
                                    },
                                    value: "tcb-prod"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "thd-staging"
                                    },
                                    value: "thd-staging"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "thdca-prod"
                                    },
                                    value: "thdca-prod"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "tkc-dev1-blue"
                                    },
                                    value: "tkc-dev1-blue"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "tkc-dev1-green"
                                    },
                                    value: "tkc-dev1-green"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "tkc-prod1-blue"
                                    },
                                    value: "tkc-prod1-blue"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "kc-staging1-blue"
                                    },
                                    value: "kc-staging1-blue"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "tkc-staging1-green"
                                    },
                                    value: "tkc-staging1-green"
                                }
                            ]
                        },
                        hint: {
                            type: 'plain_text',
                            text: 'Select the cluster to query'
                        }
                    },
                    {
                        block_id: 'timeframe_block',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Timeframe'
                        },
                        element: {
                            action_id: 'timeframe',
                            type: 'static_select',
                            options: [
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Last 24 hours"
                                    },
                                    value: "DAY"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Last week"
                                    },
                                    value: "WEEK"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Last month"
                                    },
                                    value: "MONTH"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Last year"
                                    },
                                    value: "YEAR"
                                }
                            ]
                        },
                        hint: {
                            type: 'plain_text',
                            text: 'Select the query timeframe'
                        }
                    }
                ]
            })
        }
    }
}