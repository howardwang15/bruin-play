const songRoute = require('./song');
const uploadRoute = require('./upload');

module.exports = {
    song: songRoute,
    upload: uploadRoute
}