const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

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

db.on('error', () => {
    console.log('Error occured',err);
});

db.on('disconnected', () => {
    console.log('disconnected to MongoDB');
});

//Export to database coonectio
module.exports = db;