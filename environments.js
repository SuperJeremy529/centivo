const dotenv = require('dotenv');

dotenv.config();

const ENV = {
  MONGO_HOST: process.env.MONGO_HOST,
  MONGO_PORT: process.env.MONGO_PORT,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_DB: process.env.MONGO_DB,
};

module.exports = ENV;