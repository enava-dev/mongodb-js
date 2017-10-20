

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/dev';

MongoClient.connect(url, function (err, db) {
   assert.equal(null, err);
   console.log("Connected correctly to mongodb server.");
   db.close();
});
