const puppeteer = require('puppeteer')

async function init(url) {
    
    const browser = await puppeteer.launch({headless: false}) 
    const page = await browser.newPage()

    await page.goto(`https://genius.com/${url}`)

    const values = await page.evaluate(() => {

        let artist = document.querySelector('.SongHeader__Artist-sc-1b7aqpg-9')
        let song = document.querySelector('.SongHeader__Title-sc-1b7aqpg-7')

        /*
            outras infos
        */

        if (!artist && !song  && !featuring) {
            artist = document.querySelector('.header_with_cover_art-primary_info-primary_artist')
            song = document.querySelector('.header_with_cover_art-primary_info-title')

        }

        return {
            artist: artist.innerText,
            song: song.innerText,

        }

        browser.close()

    })

    console.log('Info:', values)

}

init('Mc-hariel-ilusao-cracolandia-lyrics');
