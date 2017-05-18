
// REQUIRE NPM PACKAGES
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// create var to hold port route
var port = 3001;

// create var to use express method
var app = express();

// express "use" methods =========================================================================
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
// ===============================================================================================

// set handlebar routes ==========================================================================
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and make them accesible
var routes = require("./controllers/burgers_controller.js");

// home route
app.use("/", routes);

// making sure port is connected and letting the user know which port to listen on===============
app.listen(port, function () {
	console.log ("PORT CHILLING ON: " + port);
});
