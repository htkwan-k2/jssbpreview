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
                    },
                    "topPos": {
                        displayName: "topPos",
                        type: "number"
                    },
                    "leftPos": {
                        displayName: "leftPos",
                        type: "number"
                    },
                    "width": {
                        displayName: "width",
                        type: "number"
                    },
                    "height": {
                        displayName: "height",
                        type: "number"
                    },
                    "tag": {
                        displayName: "tag",
                        type: "string"
                    }
                },
                methods: {
                    "ListCelebrities": {
                        displayName: "ListCelebrities",
                        type: "list",
                        inputs: [ "imageURL", "apiKey" ],
                        requiredInputs: [ "imageURL", "apiKey" ],
                        outputs: [ "name", "confidence", "leftPos", "topPos", "width", "height" ]
                    },
                    "ListTags": {
                        displayName: "Get List of Tags",
                        type: "list",
                        inputs: [ "imageURL", "apiKey" ],
                        requiredInputs: [ "imageURL", "apiKey" ],
                        outputs: [ "description" ]
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
        case "ListTags": await onexecuteListTags(properties); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteListCelebrities(properties: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) =>
    {
        var xhr = new XMLHttpRequest();
        var bodyData = JSON.stringify({"url": properties["imageURL"]});

        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);

                cat = obj.categories;
                for (var key1 in cat) {
                    if ((cat[key1].name == 'people_') || (cat[key1].name == 'people_portrait')) {
                        var celebs = cat[key1].detail.celebrities
                        for (var key in celebs) {
                            postResult({
                                "name": celebs[key].name,
                                "confidence": celebs[key].confidence,
                                "leftPos": celebs[key].faceRectangle.left,
                                "topPos": celebs[key].faceRectangle.top,
                                "width": celebs[key].faceRectangle.width,
                                "height": celebs[key].faceRectangle.height
                            });
                        }
                    }
                }

                resolve();
            } catch (e) {
                reject(e);
            }
        };


        // https://www.dropbox.com/s/vxrh0sblz39sbbn/Celebrities.jpg?dl=1
        // bb84929010744092af94afd8b1583b24

        xhr.open("POST", "https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?details=Celebrities");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Ocp-Apim-Subscription-Key", properties['apiKey']);


        xhr.send(bodyData);
    });
}

function onexecuteListTags(properties: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) =>
    {
        var xhr = new XMLHttpRequest();
        var bodyData = JSON.stringify({"url": properties["imageURL"]});

        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);

                tags = obj.description.tags;
                for (var key in tags) {
                    postResult({
                        "tag": tags[key]
                    });
                }
                resolve();
            } catch (e) {
                reject(e);
            }
        };


        xhr.open("POST", "https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Description");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Ocp-Apim-Subscription-Key", properties['apiKey']);


        xhr.send(bodyData);
    });
}