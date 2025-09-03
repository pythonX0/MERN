const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const connectDB= async () => {
  try {
    const conn= await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        console.log(`Database : ${conn.connection.name} `);

  } catch (error) { 
    console.error('Database connection error:', error.message);
    process.exit(1); // Exit process with failure
  }

};
//connection event
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected to DB');

});

mongoose.connection.on('error', (error) => {
    console.error('Mongoose connection error:', error);     
});

module.exports = connectDB; 