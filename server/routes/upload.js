const express = require('express');
const multer = require('multer');
const router = express.Router();
const mongoose = require('mongoose');


const storage = multer.diskStorage({
    destination: '../../client/public/files',
    filename(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });


router.put('/', upload.single('file'), (req, res)  => {
    const uploaded = req.file;
    mongoose.connect('mongodb://localhost:/bruin-play');
    const connection = mongoose.createConnection('mongodb://localhost:/bruin-play');
    let gfs;
    connection.once('open', function() {
        console.log('Connection has been made!');
        gfs.collection('uploads');
    }).on('error', function(err) {
        console.log('Error while connecting: ', err);
    });

    var storage = new GridFsStorage({
        url: 'mongodb://localhost:/bruin-play',
        file: (req, file) => {
            return new Promise((resolve, reject) => {
                try {
                    const fileInfo = {
                        filename: file.originalname,
                        bucketName: 'uploads'
                    }
                    resolve(fileInfo);
                } catch (err) {
                    reject(err);
                }
            })
        }
    });
});

module.exports = router;