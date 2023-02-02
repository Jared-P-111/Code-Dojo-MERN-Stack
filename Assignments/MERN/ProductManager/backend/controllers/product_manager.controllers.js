//🧈This import comes with all the needed methods attached to the created model
const Product = require('../models/product_manager.model');
/* 
  Built in methods to mongoose are used here in the controller this gives us access to things 
  Like .create() which takes in the json body that is coming from the axios endpoint call from the 
  frontend.
*/

//Utility for terminal
const showAll = async () => {
  const allProducts = await Product.find();
  console.log(allProducts);
};

const create = (req, res) => {
  Product.create(req.body)
    .then((product) => {
      showAll();
      res.status(201).json(product);
    })
    .catch((err) => res.status(400).json(err));
};

const findAll = (req, res) => {
  Product.find()
    .then((products) => {
      showAll();
      res.status(200).json(products);
    })
    .catch((err) => res.status(400).json(err));
};

const findOne = (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => console.log(err));
};

const updateOne = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndUpdate(id, req.body)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(400).json(err));
};

const deleteById = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then((product) => {
      res.status(200).json(product);
      console.log(id);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = { create, findAll, findOne, updateOne, deleteById };
