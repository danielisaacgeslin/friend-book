import * as express from 'express';
import * as mongoose from 'mongoose';
import { friendModel } from './models/friend.model';
 

const port: number = 3000;
const app = express();

app.get('/getFriends', (req, res)=>{
    res.json([{a:1}]);
});

mongoose.connect('mongodb://localhost/friends',(err, res)=>{
    if(err){
        console.log('ERROR: ' + err);
    }
    app.listen(port, ()=> console.log('listening on port ' + port));
});