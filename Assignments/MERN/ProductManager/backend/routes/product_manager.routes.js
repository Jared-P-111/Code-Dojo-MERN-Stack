//🧈Bring in the controllers
const {
  create,
  findAll,
  findOne,
  updateOne,
  deleteById,
} = require('../controllers/product_manager.controllers');

//🧈Bring in express to attach our routes
const express = require('express');

//🧈Instantiate our Router for the project
const productRouter = express.Router();

//🧈--------------- App Routes --------------------
//🧈Here we take in the /api/ name space with productRouter and append /message

//prettier-ignore
productRouter
  .route('/products')
  .post(create)
  .get(findAll);

//prettier-ignore
productRouter
  .route('/products/:id')
  .get(findOne)
  .put(updateOne)
  .delete(deleteById)

//🧈export the projects Router
module.exports = productRouter;
