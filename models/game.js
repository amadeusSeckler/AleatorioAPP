const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    name: String,
    URL: String
});

module.exports = model('game', gameSchema)