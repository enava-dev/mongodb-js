
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/dev';

var updateOnePersons = function(db, callback) {
  db.collection('persons').updateOne(
  {"name": "emmanuel"},
  {
    $set: {"age": "30"}
  }, function(err, results){
    console.log(results);
    callback();
  });
};


MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    updateOnePersons(db, function(){
      db.close();
    });
});



var updateManyPersons = function(db, callback){
  db.collection('persons').updateMany(
    {"last":"nava"},
    {$set: {"address":{
              "street": "1ra Cda Ruiz Cortinez",
              "zipcode": "09900",
              "country": "México",
              "city": "CDMX"
    }}},
    function(err, results){
      console.log(results);
      callback();
    });
};

MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  updateManyPersons(db, function(){
    db.close();
  });
});



var replaceOnePerson = function(db, callback){
  db.collection('persons').replaceOne(
    {"name": "emmanuel"},
    {"name": "enava", "last": "enava"},
    function(err, results){
      console.log(results);
      callback();
    });
};

MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  replaceOnePerson(db, function(){
    db.close();
  });
});
