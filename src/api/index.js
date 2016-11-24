"use strict";
var express = require('express');
var mongoose = require('mongoose');
var friend_model_1 = require('./models/friend.model');
var port = 3000;
var app = express();
app.get('/getFriends', function (req, res) {
    var query = friend_model_1.FriendModel.find({});
    query.exec(function (e, result) {
        console.log('result', result);
        res.json(result);
    });
});
mongoose.connect('mongodb://localhost/friends', function (error, res) {
    if (error) {
        console.log('ERROR: ' + error);
    }
    //const dan = new FriendModel({id: 1, firstName: 'dan', lastName: 'ges'});
    //dan.save();
    //const db = mongoose.connection;
    //FriendModel.findOne({id: 1}, (e, result)=>{ console.log(result) });
    app.listen(port, function () { return console.log('listening on port ' + port); });
});
