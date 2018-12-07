// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
var PORT = process.env.PORT || 3000;
const htmlRoutes = require ("./app/routing/htmlRoutes");
const bodyParser = require("body-parser")
const mysql = require("mysql");
htmlRoutes(app);
//set up mysql
// const connection = mysql.createConnection({
//     host: "localhost",
//     port:3306,
//     username: "root",
//     password: "root",
    

// })
//set up Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

app.get ("/", (req, res) => res.sendFile(path.join(__dirname, "../app/public/home.html")));
app.get("survey" , (req,res) => res.sendFile(path.join(__dirname, "../app/public/survey.html" )));

//Where we listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
