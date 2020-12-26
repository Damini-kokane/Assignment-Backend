const MongoClient = require('mongodb').MongoClient;
const url='mongodb://localhost:27017';
const dbname="Movies";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Movies");
    dbo.collection("movies").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});