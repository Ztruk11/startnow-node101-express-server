// import files and packages up here
const express = require('express');
const morgan = require('morgan');
var jsonData = require('./data.json');

// create your express server below
var app = express();

app.use(express.static("/Users/danielkurtz/oca/startnow-web101-san-diego-top-spots"));

// add your routes and middleware below

app.get('/data', function (req, res) {
  res.status(200).json(jsonData);
});



app.use(morgan('dev'));

// finally export the express application
module.exports = app;
