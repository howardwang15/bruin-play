const express = require('express');
const app = express();
const path = require('path');

const Song = require('./models').song;
var MongoClient = require('mongodb').MongoClient;

const port = 5000;

app.get('/', (req, res) => {
    console.log('home endpoint reached!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});