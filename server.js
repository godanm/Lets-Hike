const express = require("express");
const fs = require("fs");
const app = express();
const axios = require('axios');
var cors = require('cors')
app.use(cors())
app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/api/food', (req, res) => {
  getData().then(trails => {
    res.json({ trails })
  })
})


const getTrails = async () => {
  try {
    return await axios.get('https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200367496-d6de8db97c0a6ac416014fc58fe6c5fc')
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
