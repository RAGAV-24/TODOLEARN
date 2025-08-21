const mongoose = require('mongoose');
require('dotenv').config();

const connectdb = async () => {
  try {
    process.env.MONGODB;
    await mongoose.connect( process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected successfully");
  } catch (err) {
    console.error("Connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectdb;
