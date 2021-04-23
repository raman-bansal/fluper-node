const connection = require('./connection/connection');
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Expose-Headers', 'Content-Length, Content-disposition');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        return next();
    }
});
app.use(bodyParser.json({ limit: "50mb" }));
app.use(require("./index.route"));

http.listen("3000", (err) => {
    err ? console.log("server failed or net issue") : console.log("server started");
})

