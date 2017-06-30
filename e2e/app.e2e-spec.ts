import { ServicesPracticePage } from './app.po';

describe('services-practice App', () => {
  let page: ServicesPracticePage;

  beforeEach(() => {
    page = new ServicesPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
