const puppeteer = require("puppeteer");
(async () => {
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto('https://www.bienvenueauxetudiants.org/post/association-belfortaine-des-informaticiens-de-l-iut-abeii');

    setTimeout(() => {
                 page.click('.like-button')

    }, 5000);
})();