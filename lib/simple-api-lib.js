const request = require("request");
const fs = require("fs");
const path = require("path");
const endpoint = "https://api.planeupload.com/";



class PlaneUploadSimpleApi {
    constructor(API_KEY = null) {
        this.API_KEY = API_KEY;
    }

    getButton(buttonId) {
        return this.request("api/getButtons", {"id": buttonId});
    }

    getButtonFiles(buttonId) {
        return this.request("api/getFiles", {"buttonId": buttonId});
    }

    provideButton(systemTag,directory,tag,buttonPrototypeId=null,fileProviderId=null) {
        return this.request("api/provideButton",{
           fileProviderId: fileProviderId,
           directory: directory,
           tag: tag,
           systemTag: systemTag,
           buttonPrototypeId: buttonPrototypeId
        });
    }

    uploadFile(buttonId,localFilePath) {
        return new Promise((resolve,reject)=>{
            request({
                url: endpoint+"api/uploadFile",
                formData: {
                    "file": fs.createReadStream(localFilePath),
                    "requestData": JSON.stringify({
                        "fileName":path.basename(localFilePath),
                        "buttonId":buttonId
                    })},
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "apiKey": this.API_KEY
                },
            }, (error, resp, body) => {
                if (null != error) {
                    reject(error);
                } else if (200 != resp.statusCode) {
                    console.error("Invalid response", resp);
                    reject("Invalid response " + resp.statusCode);
                } else {
                    if (typeof body == "string" || body instanceof String) {
                        resolve(JSON.parse(body));
                    } else {
                        resolve(body);
                    }
                }
            });
        });

    }

    confirmAttachment(PLANE_UPLOAD_KEY,directory,tag="My button from form",ignoreIfNoFiles=false,lock=false) {
        if (null == PLANE_UPLOAD_KEY) {
            throw new Error("no PLANE_UPLOAD_KEY provided");
        }
        return this.request("api/confirmAttachment",{
           key: PLANE_UPLOAD_KEY,
            directory: directory,
            tag: tag,
            ignoreIfNoFiles: ignoreIfNoFiles,
            lock: lock
        });
    }

    request(method, params) {

        return new Promise((resolve, reject) => {
            request({
                url: endpoint + method,
                json: params,
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "apiKey": this.API_KEY
                }
            }, (error, resp, body) => {
                if (null != error) {
                    reject(error);
                } else if (200 != resp.statusCode) {
                    console.error("Invalid response", resp);
                    reject("Invalid response " + resp.statusCode);
                } else {
                    resolve(body);
                }
            });
        });

    }
}

module.exports.PlaneUploadSimpleApi = PlaneUploadSimpleApi;