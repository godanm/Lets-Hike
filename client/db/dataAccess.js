var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbName = "hiking";

app.get('/api/getGroups', function(req, res, next){
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection("groups").find({}).toArray(function(err, result) {
          if (err) throw err;
            res.json(result);
        });
});
});
