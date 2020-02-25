import '@k2oss/k2-broker-core';

metadata = {
    systemName: "cmImageAnalysis",
    displayName: "cmImageAnalysis",
    description: "JSSB for Azure Vision 2.0 Image Analyzer."
};

ondescribe = async function(): Promise<void> {
    postSchema({
        objects: {
            "cmImageAnalytics": {
                displayName: "cmImageAnalytics",
                description: "Azure Vision 2. 0 Image Analytics",
                properties: {
                    "imageURL": {
                        displayName: "imageURL",
                        type: "string"
                    },
                    "apiKey": {
                        displayName: "apiKey",
                        type: "string"
                    },
                    "name": {
                        displayName: "name",
                        type: "string"
                    },
                    "confidence": {
                        displayName: "confidence",
                        type: "decimal"
                    }
                },
                methods: {
                    "ListCelebrities": {
                        displayName: "ListCelebrities",
                        type: "list",
                        inputs: [ "imageURL" ],
                        outputs: [ "name", "confidence" ]
                    }
                }
            }
        }
    });
}

onexecute = async function(objectName, methodName, parameters, properties): Promise<void> {
    switch (objectName)
    {
        case "cmImageAnalytics": await onexecuteCMImageAnalytics(methodName, properties, parameters); break;
        default: throw new Error("The object " + objectName + " is not supported.");
    }
}

async function onexecuteCMImageAnalytics(methodName: string, properties: SingleRecord, parameters: SingleRecord): Promise<void> {
    switch (methodName)
    {
        case "ListCelebrities": await onexecuteListCelebrities(properties); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteListCelebrities(properties: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) =>
    {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult({
                    "name": "Mark Cuban",
                    "confidence": 0.92
                });
                postResult({
                    "name": "htk",
                    "confidence": 0.54
                });

                resolve();
            } catch (e) {
                reject(e);
            }
        };

        xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/'+properties['imageURL']);
        xhr.setRequestHeader('test', 'test value');
        xhr.send();
    });
}