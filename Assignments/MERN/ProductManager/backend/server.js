//🧈Import express and store it in a variable
const express = require('express');

//🧈Initialize express with above variable
const app = express();

//🧈Bring in environment variable for port
const dotenv = require('dotenv');
dotenv.config();

//🧈Set CORS (Cross Origin Requests) as use for cross port communication
//🧈In order for us to process json from our req body we need a body parser
const cors = require('cors');
app.use(cors(), express.json());

//🧈Bring in mongoose connection to the DataBase
const connectDb = require('./config/mongoose.config');
connectDb();

//🧈Establish product router
const productRouter = require('./routes/product_manager.routes');
app.use('/api', productRouter);

//🧈Use env variable for are port
const port = process.env.PORT || 8000;

//🧈Call the listener method to establish a server
app.listen(port, () => console.log(`Listening on port: ${port}`));
