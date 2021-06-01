//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( `<!DOCTYPE html><body><p id="main">Hello World!</p></body>` );
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

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/survey", function(req, res){
  res.render("survey");
});

app.post("/", function(req, res){
  const possibleOutcome = {
    heads: req.body.inputHeads,
    tails: req.body.inputTails
  };
  postOutcome=possibleOutcome;
});

app.post("/survey", function(req, res){
  const surveyAnswers = {
    results: req.body.surveyResults,
    yesNo: req.body.surveyYesNo,
    comments: req.body.inputComments
  };
  console.log(surveyAnswers);
  // res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.");
});
