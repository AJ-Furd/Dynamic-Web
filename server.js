var express = require("express");
var http = require("http");
var bodyParser = require('body-parser');
var app = express();
var myData = [];

//Server will look in client directory for site pages
app.use(express.static(__dirname + "/client"));
app.use(express.urlencoded());
app.use(express.bodyParser({uploadDir:'./client/uploads'}));

http.createServer(app).listen(process.env.PORT || 3000);
console.log("Server is listening");

//On page load, request for data.json
app.get("/data.json", function (req, res){
	res.json(myData); // respond with json of myData
	console.log("Sending data request");
});

//Response to new items
app.post("/addData", function (req, res) {
	var newData = req.body;
	var imagePath = req.files.image.path;
	var newPath = imagePath.substr(7);
	newData.image = newPath;
	myData.push(newData);
	res.json(newData);
	console.log("New data successfully saved");
});