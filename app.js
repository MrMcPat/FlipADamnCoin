//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use(express.static("public"));

let postOutcome;

app.get("/", function(req, res){
  res.render("index");
});

app.get("/oneflip", function(req, res){
  res.render("oneflip" , {
    resultHeads: postOutcome.heads,
    resultTails: postOutcome.tails
  });
});

app.get("/2-3flips", function(req, res){
  res.render("2-3flips" , {
    resultHeads: postOutcome.heads,
    resultTails: postOutcome.tails
  });
});

app.get("/3-5flips", function(req, res){
  res.render("3-5flips", {
    resultHeads: postOutcome.heads,
    resultTails: postOutcome.tails
  });
});

app.get("/history", function(req, res){
  res.render("history");
});

app.post("/", function(req, res){
  const possibleOutcome = {
    heads: req.body.inputHeads,
    tails: req.body.inputTails
  };
  postOutcome=possibleOutcome;
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on heroku");
});
