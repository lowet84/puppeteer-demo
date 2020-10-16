const puppeteer = require('puppeteer');

describe('Demo test', function () {

  it('some test', async function () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:9080");
    await page.screenshot({path: 'screenshot.png'});
    browser.close();
  })
})
