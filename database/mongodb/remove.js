var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://localhost:27017/test';

var findDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Find some documents
    collection.find({ 'a': 3 }).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
}

var removeDocument = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Delete document where a is 3
    collection.deleteOne({ a: 3 }, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Removed the document with the field a equal to 3");
        console.log(result);
        callback(result);
    });
}

MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    console.log("Connected correctly to server");

    removeDocument(db, function () {
        findDocuments(db, function () {
            db.close();
        });
    });
});