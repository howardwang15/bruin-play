const express = require('express');
const router = express.Router();

router.put('/', (req, res)  => {
    console.log('hello');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    console.log(req.body);
});

module.exports = router;