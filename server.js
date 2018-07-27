const mongo = require("mongodb").MongoClient;
const assert = require('assert');

//connection URL
const url = 'mongodb://localhost:27017'

//Database name
const dbName = 'toDoNote';

//to connect the server
mongo.connect(url, function(err, client){
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});