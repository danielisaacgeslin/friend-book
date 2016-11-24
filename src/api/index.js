"use strict";
var express = require('express');
var mongoose = require('mongoose');
var friend_model_1 = require('./models/friend.model');
var port = 3000;
var app = express();
app.get('/getFriends', function (req, res) {
    res.json([{ a: 1 }]);
});
mongoose.connect('mongodb://localhost/friends', function (error, res) {
    if (error) {
        console.log('ERROR: ' + error);
    }
    var dan = new friend_model_1.Friend({ id: 1, firstName: 'dan', lastName: 'ges' });
    //dan.save();
    //const db = mongoose.connection;
    friend_model_1.Friend.findOne({ id: 1 }, function (e, result) { console.log(result); });
    app.listen(port, function () { return console.log('listening on port ' + port); });
});
