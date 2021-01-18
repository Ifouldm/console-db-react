const mongoose = require('mongoose');

const { Schema } = mongoose;

const Game = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('game', Game);
