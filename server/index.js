const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const Song = require('./models').song;

const port = 3000;
const origins = [
    'http://localhost:8080'
]

app.use(cors({ origin: origins, credentials: true }));
app.use('/', routes.song);
app.use('/upload', bodyParser.json(), routes.upload);


app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

