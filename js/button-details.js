const lib = require("./lib/lib");
const app = lib.app;
const api = lib.api;

const buttonId = "1163697";

app.get('/', async (req, res) => {
    let buttonResult = await api.getButton(buttonId);
    let files = await api.getButtonFiles(buttonId);

    res.render(__dirname + "/templates/button-details.html",{button: buttonResult[0],files: files});
});

