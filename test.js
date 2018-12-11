//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/funny-social';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    console.log(db);
    var _db = db.db('funny-social');

    var myobj = { name: "Company Iasdasdnc", address: "Highway 37" };
    _db.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
    db.close();
});