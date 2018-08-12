const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const multer = require('multer');
const GridStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const Song = new Schema({
    name: String,
    artist: String,
    duration: Number
});

module.exports = mongoose.model('Song', Song);