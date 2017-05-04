/**
 * Created by Giuseppe on 01/05/2017.
 */
// console.log("funziona!");

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//test

var routes = require('./api/routes');

app.set('port', 3000);

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public'))); //setto come public il path statico

app.use(bodyParser.urlencoded({ extended : true }));

app.use('/api', routes);

// app.get('/', function (req, res) {
//    console.log("GET Homepage");
//     res
//         .status(200)
//         .sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/json', function (req, res) {
//    console.log("GET JSON");
//     res
//         .status(200)
//         .json({"jsonData" : true});
// });
//
// app.get('/file', function (req, res) {
//    console.log("GET File");
//     res
//         .status(200)
//         .sendFile(path.join(__dirname, 'app.js'));
// });

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log("Connessione alla porta " +  port);
});
