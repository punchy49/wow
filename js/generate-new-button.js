const lib = require("./lib/lib");
const app = lib.app;
const api = lib.api;

const prototypeButtonId = "1163697";

const systemTag = "Hello-"+new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDay();
const directory = "ApiTest/"+systemTag;


app.get('/', async (req, res) => {
    let button = await api.provideButton(systemTag,directory,"My button "+systemTag,prototypeButtonId);
    let files = await api.getButtonFiles(button.id);
    console.log(button);
    res.render(__dirname + "/templates/generate-new-button.html",{button: button,files: files,systemTag:systemTag});
});

