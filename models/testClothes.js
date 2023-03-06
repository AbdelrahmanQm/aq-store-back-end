const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema({
  title: String,
  price: Number,
  brand: String,
  category: String,
  discription: String,
});

const ClothesModel = mongoose.model(
  "ClothesModel",
  clothesSchema,
  "clothestest"
);

module.exports = ClothesModel;
