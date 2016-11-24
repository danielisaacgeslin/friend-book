"use strict";
var express = require('express');
var mongoose = require('mongoose');
var port = 3000;
var app = express();
app.get('/getFriends', function (req, res) {
    res.json([{ a: 1 }]);
});
mongoose.connect('mongodb://localhost/friends', function (err, res) {
    if (err) {
        console.log('ERROR: ' + err);
    }
    app.listen(port, function () { return console.log('listening on port ' + port); });
});
