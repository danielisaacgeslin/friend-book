"use strict";
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var friend_1 = require('./classes/friend');
var port = 3000;
var throwError = function (res, e) { res.send(500, { error: e }); };
var app = express();
app.use(bodyParser.json());
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});
app.get('/getFriends', function (req, res) {
    var friend = new friend_1.Friend();
    friend.getFriends(req.query).then(function (data) { res.json(data); }, function (e) { throwError(res, e); });
});
app.post('/saveFriend', function (req, res) {
    var friend = new friend_1.Friend();
    friend.saveFriend(req.query).then(function (data) { res.json(data); }, function (e) { throwError(res, e); });
});
app.post('/updateFriend', function (req, res) {
    var friend = new friend_1.Friend();
    console.log(req.body);
    friend.updateFriend(req.body).then(function (data) { res.json(data); }, function (e) { throwError(res, e); });
});
mongoose.connect('mongodb://localhost/friends', function (error, res) {
    if (error)
        console.log('ERROR: ' + error);
    app.listen(port, function () { console.log('listening on port ' + port); });
});
//# sourceMappingURL=index.js.map