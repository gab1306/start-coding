var express = require('express');
var bodyParser = require('body-parser');
var app = express();
path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname)));
app.use(express.static('node_modules'));

app.listen('8000', function() {
  console.log("yallah")
});
