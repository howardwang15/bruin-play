const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:/bruin-play');

const connection = mongoose.createConnection('mongodb://localhost:/bruin-play');


let gfs;
connection.once('open', function() {
    console.log('Connection has been made!');
    gfs.collection('uploads');
}).on('error', function(err) {
    console.log('Error while connecting: ', err);
});

const Song = require('./models').song;
var MongoClient = require('mongodb').MongoClient;

const port = 5000;

app.use('/', bodyParser.json(), routes.song);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

