var MongoClient = require('mongodb').MongoClient,
    co = require('co'),
    assert = require('assert');

co(function* () {
    // Connection URL
    var db = yield MongoClient.connect('mongodb://localhost:27017/test');
    console.log("Connected correctly to server");

    // Insert a single document
    var r = yield db.collection('city').insertOne({ name: '北京' });
    assert.equal(1, r.insertedCount);

    // Insert multiple documents
    var r = yield db.collection('city').insertMany([{ name: '上海' }, { name: '广州' }]);
    assert.equal(2, r.insertedCount);

    // Close connection
    db.close();
}).catch(function (err) {
    console.log(err.stack);
});