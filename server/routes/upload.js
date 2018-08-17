const express = require('express');
const multer = require('multer');
const router = express.Router();
const mongoose = require('mongoose');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const MongoClient = require('mongodb').MongoClient;
const memoryStorage = multer.memoryStorage;
require('dotenv').config();

const mongouri = 'mongodb://howardwang15:howardwang2000@ds121982.mlab.com:21982/bruin-play';

mongoose.connect(mongouri, function(err) {
    
});


const storage = require('@google-cloud/storage');
const songDataID = 'bruin-play-213603';
const googleCloudStorage = new storage({
    projectId: songDataID,
    keyFileName: '../BruinPlay-8effa77fd92c.json'
});
const bucket = googleCloudStorage.bucket('howardwang15');

// const storage = new GridFsStorage({
//     url: mongouri,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//             try {
//                 const fileInfo = {
//                     filename: file.originalname,
//                     bucketName: 'uploads'
//                 }
//                 resolve(fileInfo);
//             } catch (err) {
//                 reject(err);
//             }
//         });
//     }   
// });

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
    const uploaded = req.file;
    const songsURI = 'mongodb://howardwang15:howardwang2000@ds123562.mlab.com:23562/bruin-play-songs';

    const blob = bucket.file(req.file.originalname);
    console.log(blob);
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
    blobStream.end(req.file.buffer);
});

module.exports = router;