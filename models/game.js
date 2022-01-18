const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    name: String,
    url: String
});

module.exports = model('game', gameSchema)