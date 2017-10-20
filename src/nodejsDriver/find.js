
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://localhost:27017/dev';


var findPersons = function(db, callback){
  var cursor = db.collection('persons').find();
  cursor.each(function(err, doc){
    assert.equal(err, null);
    if (doc !== null) {
      console.log(doc);
    } else {
      callback();
    }
  });
};


MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  findPersons(db, function() {
    db.close();
  });
});
