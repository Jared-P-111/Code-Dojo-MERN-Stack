const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((jokes) => res.json(jokes)) //🧈<-- Remember json returns the object
    .catch((err) => res.json(err));
};

module.exports.findOneJoke = (req, res) => {
  const { id } = req.params;

  Joke.findById(id)
    .then((oneJoke) => res.json(oneJoke))
    .catch((err) => res.json(err));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => res.json(newJoke))
    .catch((err) => res.json(err));
};

module.exports.updateExistingJoke = (req, res) => {
  const { id } = req.params;

  Joke.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then((updateJoke) => res.json(updateJoke))
    .catch((err) => res.json(err));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  const { id } = req.params;

  Joke.findByIdAndDelete(id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};
