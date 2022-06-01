const lib = require("./lib/lib");
const app = lib.app;
const api = lib.api;

app.get('/', async (req, res) => {

    res.render(__dirname + "/templates/form-attachment.html",{});
});

app.post('/submit', async (req, res) => {

    let directory = "ApiTest/form-"+new Date().getTime();

    let name = (undefined != req.body.example)?req.body.example:"";

    let button = await api.confirmAttachment(req.body.PLANE_UPLOAD_KEY,directory,"form "+name,false,false);
    let files = await api.getButtonFiles(button.id);

    res.render(__dirname + "/templates/form-attachment-submit.html",{button: button,example: name,files: files});
});
