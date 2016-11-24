"use strict";
var friend_model_1 = require('../models/friend.model');
var Friend = (function () {
    function Friend() {
    }
    Friend.prototype.getFriends = function () {
        var query = friend_model_1.FriendModel.find({});
        query.exec(function (e, result) {
            console.log('result', result);
            //res.json(result);
        });
    };
    return Friend;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Friend;
