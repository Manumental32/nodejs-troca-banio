var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log("Server running on port " + port);
});

var occupied = true;
var ldrLimit = 500;

app.get("/", (req, res, next) => {
 res.json(occupied);
});

app.post("/ldr/:lrd", (req, res, next) => {
  //res.send("tagId is set to " + req.params.lrd);
 occupied = req.params.lrd < ldrLimit;
 res.json(occupied);
});

app.post("/ldrlimit/:lrdLimit", (req, res, next) => {
	lrdLimit = req.params.lrdLimit;
 res.json(lrdLimit);
});

app.post("/occupied/:occupied", (req, res, next) => {
	occupied = !occupied;
 res.json(occupied);
});