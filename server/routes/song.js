const express = require('express');
const router = express.Router();
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const Storage = require('@google-cloud/storage');
const fs = require('fs');
require('dotenv').config();


const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
})
const bucket = storage.bucket(process.env.BUCKET);

router.put('/', (req, res) => {
    res.json({ file: req.file }); 
})

router.get('/', (req, res) => { 
    console.log(req.query.song);
    // var file = bucket.file('BruinPlay/Girls Like You.mp3');
    // console.log(file);
    // file.createReadStream().on('error', (err) => {
    //     console.log(err);
    // }).on('response', (res) => {
    //     console.log('hello');
    // }).on('end', () => {
    //     console.log('finished getting the file!');
    // }).pipe(fs.createWriteStream('../temp.mp3'));
});

module.exports = router;