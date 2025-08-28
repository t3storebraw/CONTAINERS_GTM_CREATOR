
export const PRESET_WEB_JSON = `{
    "exportFormatVersion": 2,
    "exportTime": "2024-08-22 06:03:15",
    "containerVersion": {
        "path": "accounts/6004967354/containers/193643049/versions/0",
        "accountId": "6004967354",
        "containerId": "193643049",
        "containerVersionId": "0",
        "container": {
            "path": "accounts/6004967354/containers/193643049",
            "accountId": "6004967354",
            "containerId": "193643049",
            "name": "[META] [MASTEER] Shopify WEB",
            "publicId": "GTM-P73TWQTP",
            "usageContext": [
                "WEB"
            ],
            "fingerprint": "1724304995717",
            "tagManagerUrl": "https://tagmanager.google.com/#/container/accounts/6004967354/containers/193643049/workspaces?apiLink=container"
        },
        "tag": [
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "23", "name": "[Stape] FB - ViewContent", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "ViewContent" } ], "fingerprint": "1724305182940", "firingTriggerId": [ "12" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "36", "name": "[Stape] DT - page_view", "type": "cvt_193643049_35", "parameter": [ { "type": "TEMPLATE", "key": "event_name_standard", "value": "page_view" } ], "fingerprint": "1724305183085", "firingTriggerId": [ "33" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "43", "name": "[Stape] FB - AddPaymentInfo", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "AddPaymentInfo" } ], "fingerprint": "1724305183088", "firingTriggerId": [ "42" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "45", "name": "[Stape] FB - AddToCart", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "AddToCart" } ], "fingerprint": "1724305183088", "firingTriggerId": [ "39" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "55", "name": "[Stape] FB - PageView", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "PageView" } ], "fingerprint": "1724305183092", "firingTriggerId": [ "33" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "69", "name": "[Stape] FB - InitiateCheckout", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "InitiateCheckout" } ], "fingerprint": "1724305183098", "firingTriggerId": [ "31" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "75", "name": "[Stape] FB - Purchase", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "Purchase" } ], "fingerprint": "1724305183100", "firingTriggerId": [ "62" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "76", "name": "[Stape] FB - Search", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "Search" } ], "firingTriggerId": [ "63" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "77", "name": "[Stape] FB - Contact", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "Contact" } ], "firingTriggerId": [ "64" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "78", "name": "[Stape] FB - Lead", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "Lead" } ], "firingTriggerId": [ "65" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "79", "name": "[Stape] FB - CompleteRegistration", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "CompleteRegistration" } ], "firingTriggerId": [ "66" ] },
            { "accountId": "6004967354", "containerId": "193643049", "tagId": "80", "name": "[Stape] FB - Subscribe", "type": "cvt_193643049_3", "parameter": [ { "type": "TEMPLATE", "key": "standardEventName", "value": "Subscribe" } ], "firingTriggerId": [ "67" ] }
        ],
        "trigger": [
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "12", "name": "ce - view_item_stape", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "31", "name": "ce - begin_checkout_stape", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "33", "name": "dom - page_view", "type": "DOM_READY" },
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "39", "name": "ce - add_to_cart_stape", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "42", "name": "ce - add_payment_info_stape", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "62", "name": "ce - purchase_stape", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "63", "name": "ce - search_stape", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "64", "name": "ce - contact_stape", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "65", "name": "ce - lead_stape", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "66", "name": "ce - complete_registration_stape", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643049", "triggerId": "67", "name": "ce - subscribe_stape", "type": "CUSTOM_EVENT" }
        ],
        "variable": [
            { "accountId": "6004967354", "containerId": "193643049", "variableId": "9", "name": "const - meta pixel id", "type": "c", "parameter": [ { "type": "TEMPLATE", "key": "value", "value": "PUT_YOUR_VALUE_HERE" } ] },
            { "accountId": "6004967354", "containerId": "193643049", "variableId": "28", "name": "const - server_container_url", "type": "c", "parameter": [ { "type": "TEMPLATE", "key": "value", "value": "PUT_YOUR_VALUE_HERE" } ] }
        ]
    }
}`;

export const PRESET_SERVER_JSON = `{
    "exportFormatVersion": 2,
    "exportTime": "2024-08-22 08:05:22",
    "containerVersion": {
        "path": "accounts/6004967354/containers/193643459/versions/0",
        "accountId": "6004967354",
        "containerId": "193643459",
        "container": {
            "path": "accounts/6004967354/containers/193643459",
            "accountId": "6004967354",
            "containerId": "193643459",
            "name": "[META] [MASTER] Shopify Server",
            "publicId": "GTM-58D9NC26",
            "usageContext": [ "SERVER" ]
        },
        "tag": [
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "31", "name": "[Stape] FB - AddPaymentInfo", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "AddPaymentInfo" } ], "firingTriggerId": [ "17" ] },
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "34", "name": "[Stape] FB - InitiateCheckout", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "InitiateCheckout" } ], "firingTriggerId": [ "33" ] },
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "50", "name": "[Stape] FB - Search", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "Search" } ], "firingTriggerId": [ "49" ] },
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "52", "name": "[Stape] FB - AddToCart", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "AddToCart" } ], "firingTriggerId": [ "40" ] },
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "53", "name": "[Stape] FB - ViewContent", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "ViewContent" } ], "firingTriggerId": [ "43" ] },
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "58", "name": "[Stape] FB - PageView", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "PageView" } ], "firingTriggerId": [ "57" ] },
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "61", "name": "[Stape] FB - Purchase", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "Purchase" } ], "firingTriggerId": [ "46" ] },
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "62", "name": "[Stape] FB - Contact", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "Contact" } ], "firingTriggerId": [ "58" ] },
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "63", "name": "[Stape] FB - Lead", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "Lead" } ], "firingTriggerId": [ "59" ] },
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "64", "name": "[Stape] FB - CompleteRegistration", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "CompleteRegistration" } ], "firingTriggerId": [ "60" ] },
            { "accountId": "6004967354", "containerId": "193643459", "tagId": "65", "name": "[Stape] FB - Subscribe", "type": "cvt_193643459_14", "parameter": [ { "type": "TEMPLATE", "key": "eventNameStandard", "value": "Subscribe" } ], "firingTriggerId": [ "61" ] }
        ],
        "trigger": [
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "17", "name": "dc - add_payment_info", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "33", "name": "dc - begin_checkout", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "40", "name": "dc - add_to_cart", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "43", "name": "dc - view_item", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "46", "name": "dc - purchase", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "49", "name": "dc - search", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "57", "name": "dc - page_view", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "58", "name": "dc - contact", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "59", "name": "dc - lead", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "60", "name": "dc - complete_registration", "type": "CUSTOM_EVENT" },
            { "accountId": "6004967354", "containerId": "193643459", "triggerId": "61", "name": "dc - subscribe", "type": "CUSTOM_EVENT" }
        ],
        "variable": [
            { "accountId": "6004967354", "containerId": "193643459", "variableId": "16", "name": "const - meta api token", "type": "c", "parameter": [ { "type": "TEMPLATE", "key": "value", "value": "PUT_YOUR_VALUE_HERE" } ] },
            { "accountId": "6004967354", "containerId": "193643459", "variableId": "23", "name": "const - meta pixel id", "type": "c", "parameter": [ { "type": "TEMPLATE", "key": "value", "value": "PUT_YOUR_VALUE_HERE" } ] },
            { "accountId": "6004967354", "containerId": "193643459", "variableId": "66", "name": "LT - Map | Debug Mode --> FB Test ID", "type": "smm", "parameter": [ { "type": "TEMPLATE", "key": "input", "value": "{{Debug Mode}}" }, { "type": "LIST", "key": "map", "list": [ { "type": "MAP", "map": [ { "type": "TEMPLATE", "key": "key", "value": "true" }, { "type": "TEMPLATE", "key": "value", "value": "PUT_YOUR_VALUE_HERE" } ] } ] } ] }
        ],
        "client": [
            { "accountId": "6004967354", "containerId": "193643459", "clientId": "36", "name": "Data Client", "type": "cvt_193643459_35" },
            { "accountId": "6004967354", "containerId": "193643459", "clientId": "47", "name": "GA4", "type": "gaaw_client" }
        ]
    }
}`;
