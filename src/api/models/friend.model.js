"use strict";
var mongoose = require('mongoose');
var friendSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    ranking: { type: Number },
    listed: { type: Boolean }
});
exports.FriendModel = mongoose.model('friend', friendSchema);
//# sourceMappingURL=friend.model.js.map