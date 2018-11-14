const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/sidebar';

mongoose.connect(mongoUri, {useNewUrlParser: true});

const db = mongoose.connection;

console.log('mongoose connected');

module.exports = db;
