import * as express from 'express';
import * as mongoose from 'mongoose';
import { FriendModel } from './models/friend.model';
 

const port: number = 3000;
const app = express();

app.get('/getFriends', (req, res)=>{
    const query = FriendModel.find({});
    query.exec((e, result)=>{
        console.log('result', result)
        res.json(result);
    });
});

mongoose.connect('mongodb://localhost/friends',(error, res)=>{
    if(error){
        console.log('ERROR: ' + error);
    }
    //const dan = new FriendModel({id: 1, firstName: 'dan', lastName: 'ges'});
    //dan.save();
    //const db = mongoose.connection;
    //FriendModel.findOne({id: 1}, (e, result)=>{ console.log(result) });
    app.listen(port, ()=> console.log('listening on port ' + port));
});