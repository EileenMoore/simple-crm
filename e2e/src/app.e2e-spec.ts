import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the right title on start', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Simple CRM');
  });

  it('should openuser page', async () => {
    await page.navigateToURL('user');
    expect(await page.getTitleText()).toEqual('Simple CRM');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
