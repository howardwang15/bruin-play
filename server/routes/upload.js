const express = require('express');
const multer = require('multer');
const router = express.Router();
const mongoose = require('mongoose');

const storage = require('multer-gridfs-storage')({
    url: 'mongodb://localhost:27017/bruin-play'
});

const upload = multer({ storage });


router.put('/', upload.single('file'), (req, res)  => {
    const uploaded = req.file;
    //mongoose.connect('mongodb://localhost:/bruin-play');
    //const connection = mongoose.createConnection('mongodb://localhost:/bruin-play');
    // let gfs;
    // connection.once('open', function() {
    //     console.log('Connection has been made!');
    //     gfs.collection('uploads');
    // }).on('error', function(err) {
    //     console.log('Error while connecting: ', err);
    // });
});

module.exports = router;