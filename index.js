const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const StoreData = require("./models/fullStoreData");
const app = express();

app.use(express.json());
app.use(cors());
console.log(process.env.DATABASE_URI);
/* Connecting to server */
mongoose.connect(
  process.env.DATABASE_URI,
  () => {
    console.log("connected");
  },
  (err) => {
    console.log(err);
  }
);

/* Test Request */

app.get("/fullStoreData", async (req, res) => {
  StoreData.find({}, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

/* Listening Order */
app.listen(3030, () => {
  console.log("App is listening to port 3001");
});
