"use strict";
var Q = require("q");
var friend_model_1 = require('../models/friend.model');
var Friend = (function () {
    function Friend() {
    }
    Friend.prototype.getFriends = function (params) {
        var defer = Q.defer();
        var query = friend_model_1.FriendModel.find(params || {});
        query.exec(function (e, result) {
            if (e)
                defer.reject(e);
            else
                defer.resolve(result);
        });
        return defer.promise;
    };
    Friend.prototype.saveFriend = function (params) {
        var defer = Q.defer();
        var data = new friend_model_1.FriendModel(params);
        data.save(function (e) {
            if (e)
                defer.reject(e);
            else
                defer.resolve(true);
        });
        return defer.promise;
    };
    Friend.prototype.updateFriend = function (params) {
        var defer = Q.defer();
        var data = new friend_model_1.FriendModel(params);
        var _id = params._id;
        friend_model_1.FriendModel.findByIdAndUpdate({ _id: _id }, params, { upsert: false }, function (e) {
            if (e)
                defer.reject(e);
            else
                defer.resolve(true);
        });
        return defer.promise;
    };
    return Friend;
}());
exports.Friend = Friend;
//# sourceMappingURL=Friend.js.map