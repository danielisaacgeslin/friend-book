import { FriendBookPage } from './app.po';

describe('friend-book App', function() {
  let page: FriendBookPage;

  beforeEach(() => {
    page = new FriendBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
