import * as mongoose from 'mongoose';

const friendSchema = new mongoose.Schema({
    id: {type: Number},
    firstName: {type: String},
    lastName: {type: String},
});

export const Friend  = mongoose.model('friend', friendSchema);