import { StoremePage } from './app.po';

describe('storeme App', () => {
  let page: StoremePage;

  beforeEach(() => {
    page = new StoremePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
