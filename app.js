var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log("Server running on port " + port);
});

var ldr = -1;
var occupied = true;
var ldrLimit = 500;

app.get("/", (req, res, next) => {
	console.log('ldrLimit',ldrLimit);
    res.json(occupied);
});

app.post("/ldr/:ldr", (req, res, next) => {
  //res.send("tagId is set to " + req.params.lrd);
  ldr = req.param.ldr;
  occupied = req.params.ldr < ldrLimit;
  res.json(occupied);
});

app.get("/ldr/", (req, res, next) => {
	res.json(ldr);
});

app.post("/ldrlimit/:ldrLimit", (req, res, next) => {
	ldrLimit = req.params.ldrLimit;
    res.json(ldrLimit);
});