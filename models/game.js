const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    name: String,
    url: String,
    description: String
}, { versionKey: false });

module.exports = model('game', gameSchema)