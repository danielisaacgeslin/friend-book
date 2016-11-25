import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AsyncService {
    
    constructor(private Http: Http){ }
    
    getFriends(params?: IFriend): Observable<IFriend[]>{
        return this.Http.get('http://localhost:3000/getFriends', params || {})
        .map((response: Response)=><IFriend[]>response.json());
    }

    saveFriend(params?: IFriend): Observable<boolean>{
        return this.Http.post('http://localhost:3000/saveFriend', params || {})
        .map((response: Response)=><boolean>response.json());
    }

    updateFriend(params?: IFriend): Observable<boolean>{
        return this.Http.post('http://localhost:3000/updateFriend', params || {})
        .map((response: Response)=><boolean>response.json());
    }
}