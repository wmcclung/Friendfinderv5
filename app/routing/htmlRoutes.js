//dependencies

const path = require("path");


//routing
module.exports = (app) => {
    app.get ("/", (req, res) => res.sendFile(path.join(__dirname, "../public/home.html")));
    app.get("/survey" , (req,res) => res.sendFile(path.join(__dirname, "../public/survey.html")));
};


