'use strict';
var express = require('express')

var app = express()
/*var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());*/
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


require('./routes.js')(app); 
require('./config.js'); 
/*var userRoute = require('./app/clients/api/v1/users');*/


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = function(app) {
};

