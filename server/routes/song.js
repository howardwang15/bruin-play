const express = require('express');
const router = express.Router();
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

router.put('/', (req, res) => {
    res.json({ file: req.file }); 
})

router.get('/', (req, res) => {
    console.log('hit the root endpoint!');
});

module.exports = router;