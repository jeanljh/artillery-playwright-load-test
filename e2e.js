
async function e2e(page) {
    page.setDefaultTimeout(60000)
    await page.goto('https://www.globustours.com.sg/')
    await page.locator('div.search-main__input > input').fill('Singapore')
    await page.keyboard.press('Enter')
    await page.waitForURL('**\/trip-finder?q=Singapore')
}

module.exports = {
    e2e
}