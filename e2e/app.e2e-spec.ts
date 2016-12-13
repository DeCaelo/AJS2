import { AJS2Page } from './app.po';

describe('ajs2 App', function() {
  let page: AJS2Page;

  beforeEach(() => {
    page = new AJS2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
