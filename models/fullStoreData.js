const mongoose = require("mongoose");

const storeDataScheme = new mongoose.Schema({
  title: String,
  price: Number,
  brand: String,
  category: String,
  discription: String,
  features: [String],
  sizes: [String],
  newArrival: Boolean,
  bestSeller: Boolean,
  images: [String],
});

const StoreData = mongoose.model("storeData", storeDataScheme, "storeData");
module.exports = StoreData;
