const mongoose = require('mongoose');

//🧈Mongoose connects to the database and bridges the gap between express and mongoDB
const connectDb = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect('mongodb://localhost/productManagementDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
    })
    .then(() => console.log('Established a connection to the database'))
    .catch((err) => console.log('Something went wrong with connection to the database', err));
};

module.exports = connectDb;
