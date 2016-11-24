import * as mongoose from 'mongoose';
import { FriendModel } from '../models/friend.model';

export default class Friend{
    constructor(){ }

    public getFriends(){
        const query = FriendModel.find({});
        query.exec((e, result)=>{
            console.log('result', result)
            //res.json(result);
        });
    }
}