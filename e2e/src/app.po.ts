import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
  getTitle() {
    return element(by.css('.banner-title')).getText();
  }
}
