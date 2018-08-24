const express = require('express');
const router = express.Router();
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const Storage = require('@google-cloud/storage');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();



const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
})
const bucket = storage.bucket(process.env.BUCKET);
const prefix = 'BruinPlay/';

router.put('/', (req, res) => {
    res.json({ file: req.file }); 
});

router.get('/download', (req, res) => {
    req.body.data.name += '.mp3';
    console.log(req.body.data.name);
    const options = { prefix };
    bucket.getFiles(options).then(results => {
        const files = results[0];
        let fileName;
        let foundFile;
        for (let file of files) {
            fileName = file.name.split('/');
            fileName.shift();
            fileName = fileName.join();
            if (fileName === '') {
                continue;
            }
            if (fileName === req.body.data.name) {
                foundFile = file;
                break;
            }
        }
        console.log(foundFile.name);
        foundFile.createReadStream().on('error', (err) => {
            console.log(err);
        }).on('response', (res) => {
        }).on('end', () => {
            console.log('finished creating the stream!');
        }).pipe(fs.createWriteStream('../temp.mp3'));
    })
});
//getFilesStream()

router.get('/', (req, res) => { 
    MongoClient.connect(process.env.MONGO_URL, (err, database) => {
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }
        const db = database.db(process.env.DB_NAME);
        db.collection(process.env.COLLECTION).find().toArray((err, results) => {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }
            database.close();
            const data = {
                songs: results
            };
            return res.status(200).send(data);
        });
    });
    
});

// bucket.getFiles(options).then(results => {
    //     const files = results[0];
    //     files.forEach(file => {
    //         console.log(file);
    //     })
    // });
    // var file = bucket.file('BruinPlay/Girls Like You.mp3');
    // console.log(file);
    // file.createReadStream().on('error', (err) => {
    //     console.log(err);
    // }).on('response', (res) => {
    //     console.log('hello');
    // }).on('end', () => {
    //     console.log('finished getting the file!');
    // }).pipe(fs.createWriteStream('../temp.mp3'));
module.exports = router;