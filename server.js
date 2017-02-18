var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// will hold list of genre choices
var genreList = [];

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//display result
app.get("/result", function(req, res){
	res.sendFile(path.join(__dirname, "/public/page2.html"))
})

//get genre List
app.get("/genre", function(req, res){
	res.json({"genreList": genreList});
})

//get genre and store in array
app.post("/recommendations", function(req, res){
	console.log(req.body);
	genreList = req.body.genre;
	res.redirect("/result");
})

//display home page
app.use("/", function(req, res){
	res.sendFile(path.join(__dirname, "/public/page1.html"))
})

//run server
app.listen(PORT, function(){
	console.log("Now running on localhost:"+PORT);
})

