const mongoose = require('mongoose');
require('dotenv').config();

//Define the MongoDB connection URL
//const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = process.env.MONGODB_URL;

//set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the default connection
const db = mongoose.connection;

//Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log('Error occured',err);
});

db.on('disconnected', () => {
    console.log('disconnected to MongoDB');
});

//Export to database connection
module.exports = db;
