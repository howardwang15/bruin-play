const express = require('express');
const app = express();
const path = require('path');


const port = process.env.port || 5000;
app.get('/', (req, res) => {
    res.send({ express: "express working!" });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));


    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});