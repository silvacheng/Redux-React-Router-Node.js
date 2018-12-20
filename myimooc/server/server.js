var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRouter = require('./user')

var app = express();

app.use(cookieParser);
app.use(bodyParser.json());
app.use('/user', userRouter);
app.listen(9093, function() {
  console.log('Node app start at port 9093');
})