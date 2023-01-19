require('dotenv').config();
require('express-async-errors');

const express = require('express');
const connectDB = require('./connectDB/connect');
const app = express();


const router = require('./router/routes');
// middleware
app.use(express.json());

// routes

app.use('/api/v1', router);

// products route

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();