/**
 * Created by Giuseppe on 04/05/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanhotel';

var _connection = null;

var open = function () {
    //setto la connessione
    MongoClient.connect(dburl, function (err, db) {
        if(err){
            console.log("Connessione al Database fallita!");
            return
        }
        _connection = db;
        console.log("Connesione al Database aperta", db);
    });
};

var get = function () {
    return _connection;
};

module.exports = {
    open: open,
    get : get
};