"use strict";
var mongoose = require('mongoose');
var friendSchema = new mongoose.Schema({
    id: { type: Number },
    firstName: { type: String },
    lastName: { type: String },
});
exports.FriendModel = mongoose.model('friend', friendSchema);
