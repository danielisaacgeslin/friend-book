"use strict";
var express = require('express');
var mongoose = require('mongoose');
var friend_1 = require('./classes/friend');
var port = 3000;
var throwError = function (res, e) { res.send(500, { error: e }); };
var app = express();
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
    friend.updateFriend(req.query).then(function (data) { res.json(data); }, function (e) { throwError(res, e); });
});
mongoose.connect('mongodb://localhost/friends', function (error, res) {
    if (error)
        console.log('ERROR: ' + error);
    app.listen(port, function () { console.log('listening on port ' + port); });
});
//# sourceMappingURL=index.js.map