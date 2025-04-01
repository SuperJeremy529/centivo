const mongoose = require('mongoose');

const {
    MONGO_HOST,
    MONGO_PORT, 
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_DB
} = require("@environments")


const mongoConnection = async () => {
  try {
    const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
    await mongoose.connect(uri, {});
    console.log('DB Connected');
  } catch (error) {
    console.error('Error Connecting To Database:', error);
  }
};

module.exports = mongoConnection;