const songRoute = require('./song');
const uploadRoute = require('./upload');
const authRoute = require('./auth');

module.exports = {
    song: songRoute,
    upload: uploadRoute,
    auth: authRoute
}