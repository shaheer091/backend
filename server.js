const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const userRoutes=require('./routes/userRoutes');


const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use('/', userRoutes);

const dbURI = process.env.DATABASE;
mongoose.connect(dbURI);
mongoose.connection.on('connected', () => {
  console.log('Database connected');
});

mongoose.connection.on('error', (err) => {
  console.error(`Database connection error: ${err}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
