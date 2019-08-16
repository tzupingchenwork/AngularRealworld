import { HomePage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('顯示主頁標題', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('A place to share your knowledge.');
  });


});
