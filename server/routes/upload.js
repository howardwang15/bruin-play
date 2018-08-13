const express = require('express');
const router = express.Router();

router.put('/', (req, res)  => {
    console.log('uploading files!');
});

module.exports = router;