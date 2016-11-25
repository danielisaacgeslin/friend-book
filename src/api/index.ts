import * as express from 'express';
import * as mongoose from 'mongoose';
const bodyParser = require('body-parser');
import { Friend } from './classes/friend';
 

const port: number = 3000;
const throwError = (res: express.Response, e: any) => {res.send(500, {error: e})}
const app: express.Application = express();

app.use(bodyParser.json());

app.all('/*', (req, res, next) =>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.get('/getFriends', (req, res)=>{
    const friend: Friend = new Friend();
    friend.getFriends(req.query).then(data => {res.json(data)}, e => {throwError(res,e)});
});

app.post('/saveFriend', (req, res)=>{
    const friend: Friend = new Friend();
    friend.saveFriend(req.query).then(data => {res.json(data)}, e => {throwError(res,e)});
});

app.post('/updateFriend', (req, res)=>{
    const friend: Friend = new Friend();
    console.log(req.body)
    friend.updateFriend(req.body).then(data => {res.json(data)}, e => {throwError(res,e)});
});

mongoose.connect('mongodb://localhost/friends',(error, res)=>{
    if(error) console.log('ERROR: ' + error);
    app.listen(port, ()=> {console.log('listening on port ' + port)});
});