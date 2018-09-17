const router = require('express').Router();

router.post('/login', (req, res) => {
    req.session.user = req.body.user;
    res.sendStatus(200);
});

module.exports = router;