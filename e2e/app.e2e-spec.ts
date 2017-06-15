import { BoilerPage } from './app.po';

describe('boiler App', () => {
  let page: BoilerPage;

  beforeEach(() => {
    page = new BoilerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
