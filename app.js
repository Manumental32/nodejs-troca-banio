var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log("Server running on port " + port);
});

var lrd = -1;
var occupied = true;
var ldrLimit = 500;

app.get("/", (req, res, next) => {
	console.log('ldrLimit',ldrLimit);
    res.json(occupied);
});

app.post("/ldr/:lrd", (req, res, next) => {
  //res.send("tagId is set to " + req.params.lrd);
  ldr = req.param.ldr;
  occupied = req.params.lrd < ldrLimit;
  res.json(occupied);
});

app.get("/ldr/", (req, res, next) => {
	res.json(ldr);
});

app.post("/ldrlimit/:lrdLimit", (req, res, next) => {
	lrdLimit = req.params.lrdLimit;
    res.json(lrdLimit);
});