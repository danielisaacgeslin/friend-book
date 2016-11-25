import { Component } from '@angular/core';
import { AsyncService } from './services/async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public friends: IFriend[] = [];

  constructor(private AsyncService: AsyncService){
    this.getFriends();
  }

  getFriends(){
    this.AsyncService.getFriends().subscribe(friends => this.friends = friends);
  }

  toggleListed(friend: IFriend): void{
    const updatedInfo: IFriend = Object.assign({}, friend, {listed: !friend.listed});
    this.AsyncService.updateFriend(updatedInfo).subscribe(r=>{
      this.friends = this.friends.map( f=>{
        if(f._id === updatedInfo._id){
          return updatedInfo;
        }
        return f;
      });
    });
  }
}
