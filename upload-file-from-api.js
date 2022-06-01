const lib = require("./lib/lib");
const app = lib.app;
const api = lib.api;

const buttonId = "1163697";
const filePath = "../example-file.jpg";



app.get('/', async (req, res) => {
    let file = await api.uploadFile(buttonId,filePath);
    console.log(file);
    res.render(__dirname + "/templates/upload-file-from-api.html",{file: file});
});

