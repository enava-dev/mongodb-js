
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://localhost:27017/dev';


var removePerson = function(db, callback){
  db.collection('persons').deleteOne(
    {"name": "enava", "last": "enava"},
    function(err, results){
      console.log(results);
      callback();
    });
};


MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  removePerson(db, function(){
    db.close();
  });
});



var removePersons = function(db, callback){
  db.collection('persons').deleteMany(
    {"last": "nava"},
    function(err, results){
      console.log(results);
      callback();
    });
};


MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  removePersons(db, function(){
    db.close();
  });
});




var removeAllPersons = function(db, callback){
  db.collection('persons').deleteMany(
    {},
    function(err, results){
      console.log(results);
      callback();
    });
};


MongoClient.connect(url, function(err, db){
  assert.equal(err, null);
  removeAllPersons(db, function(){
    db.close();
  });
});


var dropPersons = function(db, callback){
  db.collection('persons').drop(function(err, response){
    console.log(response);
    callback();
  });
};


MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  dropPersons(db, function(){
    db.close();
  });
});
