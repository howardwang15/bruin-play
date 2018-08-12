const express = require('express');
const router = express.Router();
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

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

const upload = multer({ storage })

router.put('/', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
})

router.get('/', (req, res) => {
    console.log('hit the root endpoint!');
    const data = {
        name: 'howard',
        age: 18
    }
    res.status(200).send(data);
});

module.exports = router;