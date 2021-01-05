const mongoose = require('mongoose');

const { Schema } = mongoose;

const Console = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('console', Console);
