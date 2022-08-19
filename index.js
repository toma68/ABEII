const puppeteer = require('puppeteer');


function func() {
    for (let i = 0; i < 10; i++) {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://www.bienvenueauxetudiants.org/post/association-belfortaine-des-informaticiens-de-l-iut-abeii');
            setTimeout(() => {
                page.click('.like-button')

            }, 10000);
        })();
    }
}



(async () => {
    func()
        setTimeout(()=>{
            process.exit(10)
        }, 20000);

})();



