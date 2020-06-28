const config = require('../config');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const mongodbUrl = config.MONGODB_URL;
dotenv.config();

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(
  error => console.log(error.reason)
);

const connected = mongoose.connection;

connected.once('open', () => {
  console.log('Connected!!!')
});

module.exports = mongoose;