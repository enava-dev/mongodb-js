
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/dev';

mongoose.connect(url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', function(){
  console.log('Connected correctly to mongodb server');
});
