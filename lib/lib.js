const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const PlaneUploadSimpleApi = require("./simple-api-lib").PlaneUploadSimpleApi;
const apiKey = "ek8waWhFWnh3L3J4ZDJnS1lrYm11M0p3a21hZkNWZk0wa3hScEp0SG5VWDF5bFFibnZTdCtnRC9Hek5rU2NQdCtraHNTZUhCMDROekUvSytiSWhlQU9JT1hIditOUjZRV0d4NE1LeEV4T1J3RUU1TDJQUnlOb3BpOWRVUGZnV2RZY28xbThkUUVibGJoU29NZVd1Q0F3PT0=";
// const apiKey = "YVNvQ3dPUXVrSU10SlFJRU81QUl2ejlVYWZkQUsrOWdYcUxkangrUGQyOE90bm4xNjBmcnB3MTU1RDZEcVhQblhMdDRMaWNsOVRES0dmclUxWGlOUitobkRHZkhQT1cxU28wMytBZEdVRnk4ZFBZc0w0UTFlVDhCVlFDWmF1WEM3RkdTNFBDaTdTUDFUSnJQTDk2Qk93PT0=";
// const api = new PlaneUploadSimpleApi("ek8waWhFWnh3L3J4ZDJnS1lrYm11M0p3a21hZkNWZk0wa3hScEp0SG5VWDF5bFFibnZTdCtnRC9Hek5rU2NQdCtraHNTZUhCMDROekUvSytiSWhlQU9JT1hIditOUjZRV0d4NE1LeEV4T1J3RUU1TDJQUnlOb3BpOWRVUGZnV2RZY28xbThkUUVibGJoU29NZVd1Q0F3PT0=");
const api = new PlaneUploadSimpleApi(apiKey);

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}/`));

module.exports.app = app;
module.exports.api = api;