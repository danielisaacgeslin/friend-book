import * as mongoose from 'mongoose';
import * as Q from "q";
import { FriendModel } from '../models/friend.model';

export class Friend{
    constructor(){ }

    public getFriends(params?: IFriend): Q.IPromise<IFriend[]>{
        const defer = Q.defer();
        const query = FriendModel.find(params || {});
        query.exec((e, result)=>{
            if(e) defer.reject(e);
            else defer.resolve(result);
        });
        return defer.promise;
    }

    public saveFriend(params: IFriend): Q.IPromise<boolean>{
        const defer = Q.defer();
        const data = new FriendModel(params);
        data.save(e => {
            if(e) defer.reject(e);
            else defer.resolve(true);
        });
        return defer.promise;
    }

    public updateFriend(params: IFriend): Q.IPromise<boolean>{
        const defer = Q.defer();
        const data = new FriendModel(params);
        const _id = params._id;
        FriendModel.findByIdAndUpdate({_id}, params, {upsert: false}, e=>{
            if(e) defer.reject(e);
            else defer.resolve(true);
        });
        return defer.promise;
    }
}