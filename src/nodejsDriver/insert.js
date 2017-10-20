
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/dev';

var insertDocument = function(db, callback) {
    db.collection('persons').insertOne({
        "name": "emmanuel",
        "last": "nava"
    }, function(err, results) {
        assert.equal(err, null);
        console.log("Inserted a document into the persons collection.");
        callback();
    });
};


MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});
