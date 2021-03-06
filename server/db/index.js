require('dotenv').config();

const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((e) => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;
