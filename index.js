const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StoreData = require("./models/fullStoreData");
const app = express();

app.use(express.json());
app.use(cors());

/* Connecting to server */
mongoose.connect(
  "mongodb+srv://maindbuser:5QmPXl77QQAsrufs@aq-jeans.yfkadue.mongodb.net/aqstore?retryWrites=true&w=majority",
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
