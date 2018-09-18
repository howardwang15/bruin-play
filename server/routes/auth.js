const router = require('express').Router();

router.post('/login', (req, res) => {
    req.session.user = req.body.user;
    res.status(200).send(req.body.user);
});

module.exports = router;