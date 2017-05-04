/**
 * Created by Giuseppe on 02/05/2017.
 */
var dbconn = require('../data/dbconnection.js');
// Aggiungo questa variabile per avere ObjectId dal database
var ObjectId = require('mongodb').ObjectId;
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function (req, res) {
    
    //connessione al database
    var db = dbconn.get();
    var collection = db.collection('hotels');

    var offset = 0;
    var count = 5;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }

    if(req.query && req.query.count){
        count = parseInt(req.query.count, 10);
    }
    
    collection
        .find()
        .skip(offset)
        .limit(count)
        .toArray(function (err, docs) {
            console.log("Cerco gli hotel:", docs);
            res
                .status(200)
                .json(docs);
        });

};

module.exports.hotelsGetOne = function (req, res) {

    //connessione al database
    var db = dbconn.get();
    var collection = db.collection('hotels');

    var hotelId = req.params.hotelId;
    console.log("GET HotelId", hotelId);

    collection
        .findOne({
            _id : ObjectId(hotelId)
        }, function (err, doc) {
            res
                .status(200)
                .json(doc);
        });
};


module.exports.hotelsAddOne = function (req, res) {
    console.log("post nuovo Hotel");
    console.log(req.body);

    res
        .status(200)
        .json(req.body);
};