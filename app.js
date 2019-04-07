var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log("Server running on port " + port);
});

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

var occupied = true;

app.get("/", (req, res, next) => {
 res.json(occupied);
});


app.post("/", (req, res, next) => {
	occupied = !occupied;
 res.json(occupied);
});