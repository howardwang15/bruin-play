const express = require('express');
const multer = require('multer');
const router = express.Router();
const mongoose = require('mongoose');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const MongoClient = require('mongodb').MongoClient;
const memoryStorage = multer.memoryStorage;
const fs = require('fs');
require('dotenv').config();

const mongouri = 'mongodb://howardwang15:howardwang2000@ds121982.mlab.com:21982/bruin-play';

mongoose.connect(mongouri, function(err) {
    
});


const storage = require('@google-cloud/storage');
const googleCloudStorage = new storage({
    projectId: process.env.PROJECT_ID,
    keyFileName: '../BruinPlay-8effa77fd92c.json'
});
const bucket = googleCloudStorage.bucket(process.env.BUCKET);


const upload = multer({ 
    storage: memoryStorage(),
    limits: {
        fileSize: 8 * 1024 * 1024
    }
 });

// const storage = require('multer-gridfs-storage')({
//     url: 'mongodb://ds121982.mlab.com:21982/bruin-play'
// });


router.put('/', upload.single('file'), (req, res)  => {
    bucket.upload('./BruinPlay-8effa77fd92c.json', function(err, file, res) {
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        } else {
            console.log(file);
            return res.sendStatus(200);
        }
    });
    return;
    const uploaded = req.file;
    console.log(uploaded);
    const songsURI = 'mongodb://howardwang15:howardwang2000@ds123562.mlab.com:23562/bruin-play-songs';

    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        }
    });
    blobStream.on('error', err => {
        console.log(err);
        return res.sendStatus(400);
    });
    
    blobStream.on('finish', () => {
        blob.makePublic().then(() => {
            res.status(200).send('IT WORKED!!!');
        });
    });
    try {
        blobStream.end(req.file.buffer);
    } catch (err) {
        throw new Error(err);
    }
});

module.exports = router;