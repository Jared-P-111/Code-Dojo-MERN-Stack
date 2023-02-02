const mongoose = require('mongoose');

//Create our database schema object this is the blueprint for our DB
const productManagementSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
  },
  { timestamps: true }
);

//Mongoose needs singular name and it generates it to plural
const Product = mongoose.model('Product', productManagementSchema);
module.exports = Product;
