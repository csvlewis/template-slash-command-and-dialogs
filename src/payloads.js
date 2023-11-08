module.exports = {
    confirmation: context => {
        return {
            channel: context.channel_id,
            text: 'New forwarder request created!',
            blocks: JSON.stringify([
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: '*New forwarder request created*'
                    }
                },
                {
                    type: 'divider'
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `*Cluster*\n${context.cluster}\n*Forwarder*\n${context.forwarder}\n\n*Description*\n${context.description}`
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
                    text: 'Request a new forwarder'
                },
                callback_id: 'submit-ticket',
                submit: {
                    type: 'plain_text',
                    text: 'Request'
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
                            text: 'Select the cluster to update'
                        }
                    },
                    {
                        block_id: 'forwarder_block',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Forwarder'
                        },
                        element: {
                            action_id: 'forwarder',
                            type: 'static_select',
                            options: [
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "actioniq"
                                    },
                                    value: "actioniq"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "acuity-ads"
                                    },
                                    value: "acuity-ads"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "adobe-analytics"
                                    },
                                    value: "adobe-analytics"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "acuity-ads"
                                    },
                                    value: "acuity-ads"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "adobe-id"
                                    },
                                    value: "adobe-id"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "amazon-redshift-v2"
                                    },
                                    value: "amazon-redshift-v2"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "amnet"
                                    },
                                    value: "amnet"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "amobee"
                                    },
                                    value: "amobee"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "amperity"
                                    },
                                    value: "amperity"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "amplitude"
                                    },
                                    value: "amplitude"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "apps-flyer-android"
                                    },
                                    value: "apps-flyer-android"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "apps-flyer-ios"
                                    },
                                    value: "apps-flyer-ios"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "bing-ads"
                                    },
                                    value: "bing-ads"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "blob"
                                    },
                                    value: "blob"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "bloomreach"
                                    },
                                    value: "bloomreach"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "blueshift"
                                    },
                                    value: "blueshift"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "braze"
                                    },
                                    value: "braze"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "convert"
                                    },
                                    value: "convert"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "criteo"
                                    },
                                    value: "criteo"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "customer-io"
                                    },
                                    value: "customer-io"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "facebook-pixel"
                                    },
                                    value: "facebook-pixel"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "gcs"
                                    },
                                    value: "gcs"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "google-ad-words"
                                    },
                                    value: "google-ad-words"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "google-ads"
                                    },
                                    value: "google-ads"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "google-analytics"
                                    },
                                    value: "google-analytics"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "google-analytics-4"
                                    },
                                    value: "google-analytics-4"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "google-bigquery-streaming"
                                    },
                                    value: "google-bigquery-streaming"
                                },                                
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "google-cm360"
                                    },
                                    value: "google-cm360"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "google-pubsub"
                                    },
                                    value: "google-pubsub"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "hubspot-event"
                                    },
                                    value: "hubspot-event"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "impact-radius"
                                    },
                                    value: "impact-radius"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "in-market"
                                    },
                                    value: "in-market"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "kafka"
                                    },
                                    value: "kafka"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "kinesis"
                                    },
                                    value: "kinesis"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "kochava"
                                    },
                                    value: "kochava"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "lytics"
                                    },
                                    value: "lytics"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "media-math"
                                    },
                                    value: "media-math"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "merkle"
                                    },
                                    value: "merkle"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "miq-xandr"
                                    },
                                    value: "miq-xandr"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "mixpanel"
                                    },
                                    value: "mixpanel"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "movable-ink"
                                    },
                                    value: "movable-ink"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "nextdoor"
                                    },
                                    value: "nextdoor"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "pinterest"
                                    },
                                    value: "pinterest"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "pinterest-capi"
                                    },
                                    value: "pinterest-capi"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "podsights"
                                    },
                                    value: "podsights"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "reddit-ads"
                                    },
                                    value: "reddit-ads"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "rev-jet"
                                    },
                                    value: "rev-jet"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "roku"
                                    },
                                    value: "roku"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "roomvo"
                                    },
                                    value: "roomvo"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "s3"
                                    },
                                    value: "s3"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "salesforce-cdp"
                                    },
                                    value: "salesforce-cdp"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "snapchat"
                                    },
                                    value: "snapchat"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "snowflake"
                                    },
                                    value: "snowflake"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "thetradedesk-conversion-events"
                                    },
                                    value: "thetradedesk-conversion-events"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "thetradedesk-data-advertiser-firstparty"
                                    },
                                    value: "thetradedesk-data-advertiser-firstparty"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "twitter-conversions"
                                    },
                                    value: "twitter-conversions"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "verizon-media"
                                    },
                                    value: "verizon-media"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "videoamp"
                                    },
                                    value: "videoamp"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "xandr"
                                    },
                                    value: "xandr"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "yahoo-enhanced-attribution"
                                    },
                                    value: "yahoo-enhanced-attribution"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "yahoo-offline-conversion"
                                    },
                                    value: "yahoo-offline-conversion"
                                }
                            ]
                        },
                        hint: {
                            type: 'plain_text',
                            text: 'Select the forwarder to add'
                        }
                    },
                    {
                        block_id: 'description_block',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Description'
                        },
                        element: {
                            action_id: 'description',
                            type: 'plain_text_input',
                            multiline: true
                        },
                        hint: {
                            type: 'plain_text',
                            text: 'Additional description you would like included in the Shortcut ticket request'
                        },
                        optional: true
                    }
                ]
            })
        }
    }
}