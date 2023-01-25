//🧈This import comes with all the needed methods attached to the created model
const Product = require('../models/product_manager.model');
/* 
  Built in methods to mongoose are used here in the controller this gives us access to things 
  Like .create() which takes in the json body that is coming from the axios endpoint call from the 
  frontend.
*/

//🧈Here we create the product in the DB with the json object passed from the frontend.
const create = (req, res) => {
  Product.create(req.body)
    .then((product) => {
      showAll();
      res.status(201).json(product);
    })
    .catch((err) => res.status(400).json(err));
};

const showAll = async () => {
  const allProducts = await Product.find();
  console.log(allProducts);
};

module.exports = { create };
