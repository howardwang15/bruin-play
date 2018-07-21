const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Song = new Schema({
    name: String,
    artist: String,
    duration: Number
});

module.exports = mongoose.model('Song', Song);