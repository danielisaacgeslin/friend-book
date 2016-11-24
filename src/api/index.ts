import * as express from 'express';
import * as mongoose from 'mongoose';
import { Friend } from './models/friend.model';
 

const port: number = 3000;
const app = express();

app.get('/getFriends', (req, res)=>{
    res.json([{a:1}]);
});

mongoose.connect('mongodb://localhost/friends',(error, res)=>{
    if(error){
        console.log('ERROR: ' + error);
    }
    const dan = new Friend({id: 1, firstName: 'dan', lastName: 'ges'});
    //dan.save();
    //const db = mongoose.connection;
    Friend.findOne({id: 1}, (e, result)=>{ console.log(result) });
    app.listen(port, ()=> console.log('listening on port ' + port));
});