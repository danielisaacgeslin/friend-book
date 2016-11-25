import * as mongoose from 'mongoose';

const friendSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    ranking: {type: Number},
    listed: {type: Boolean}
});

export const FriendModel  = mongoose.model('friend', friendSchema);