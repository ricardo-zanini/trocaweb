
const express = require('express');
const app = express();
const port = 5000;
var path = require('path')

app.use(express.static(__dirname, + "/build/index.html"));

app.get('/', (req, res) => {
    res.sendFile( __dirname + "/public/" + "index.html" );
});

app.listen(port, () => {
    console.log('server rodando');
});
