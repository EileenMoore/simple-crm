import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async navigateToURL(suburl): Promise<unknown> {
    return browser.get(browser.baseUrl + suburl);
  }

  // async clickButtonWithId(id): Promise<unknown> {
  //   return element(by.id(id)).click();
  // }

  async getTitleText(): Promise<string> {
    return element(by.id('app-title')).getText();
  }
}
