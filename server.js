const express = require("express");
const fs = require("fs");
const app = express();
const axios = require('axios');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var dbName = "hiking";

var cors = require('cors')
app.use(cors())
app.set("port", process.env.PORT || 3001);
// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/api/getGroups', function(req, res, result){
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection("groups").find({}).toArray(function(err, result) {
          if (err) throw err;
            res.json(result);
        });
});
});

let lat, lon;

app.get('/api/getTrails', (req, res) => {
  lat = req.query.lat;
  lon = req.query.lon;


  if (!lat) {
    res.json({
      error: "Missing required parameter `lat`"
    });
    return;
  }
  if (!lon) {
    res.json({
      error: "Missing required parameter `lon`"
    });
    return;
  }
  getData().then(trails => {
    res.json({ trails })
  })
})


const getTrails = async () => {
  try {
    return axios.get('https://www.hikingproject.com/data/get-trails', {
          params: {
              lat:  lat,
              lon: lon,
              maxDistance:1000,
              key:'200367496-d6de8db97c0a6ac416014fc58fe6c5fc'
          }
})
  } catch (error) {
    console.error(error)
  }
}

  const getData = async () => {
    const trails = await getTrails()
    if (trails.data.trails) {
      return trails.data.trails
    }
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
