var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://localhost:27017/test';

var findDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
}

MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    console.log("Connected correctly to server");

    findDocuments(db, function (result) {
        db.close();
    });
});