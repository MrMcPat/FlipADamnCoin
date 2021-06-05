//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-pat:789632145@cluster0.smilb.mongodb.net/coinflipDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);

let postOutcome;

const coinFlipSchema = {
  headsInput: String,
  tailsInput: String,
  surveyResults: String,
  yesNoResults: String,
  comments: String
};

const CoinFlip = mongoose.model("CoinFlip", coinFlipSchema);

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", function(req, res) {
  const possibleOutcome = {
    heads: req.body.inputHeads,
    tails: req.body.inputTails
  };
  postOutcome = possibleOutcome;
});

app.get("/oneflip", function(req, res) {
  res.render("oneflip", {
    resultHeads: postOutcome.heads,
    resultTails: postOutcome.tails
  });
});

app.get("/2-3flips", function(req, res) {
  res.render("2-3flips", {
    resultHeads: postOutcome.heads,
    resultTails: postOutcome.tails
  });
});

app.get("/3-5flips", function(req, res) {
  res.render("3-5flips", {
    resultHeads: postOutcome.heads,
    resultTails: postOutcome.tails
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/survey", function(req, res) {
  res.render("survey");
});

app.post("/survey", function(req, res) {
  postOutcome = new CoinFlip({
    headsInput: postOutcome.heads,
    tailsInput: postOutcome.tails,
    surveyResults: req.body.surveyResults,
    yesNoResults: req.body.surveyYesNo,
    comments: req.body.inputComments
  });
  postOutcome.save();
  res.redirect("/history");
});

app.get("/history", function(req, res) {
  CoinFlip.find({}, function(err, coinflips) {
    res.render("history", {
      results: coinflips
    });
  });
});

app.post("/delete", function(req, res) {
  const coinFlipId = req.body.delete;

  CoinFlip.findByIdAndRemove(coinFlipId, function(err) {
    res.redirect("/history");
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.");
});
