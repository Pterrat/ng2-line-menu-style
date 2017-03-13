import { LineMenuStylePage } from './app.po';

describe('line-menu-style App', () => {
  let page: LineMenuStylePage;

  beforeEach(() => {
    page = new LineMenuStylePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
