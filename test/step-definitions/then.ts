import { Then } from 'cucumber'
import { mocks } from '../../src/mocks'
import { footerElement } from '../elements/footer.element'
import { navbarElement } from '../elements/navbar.element'
import { errorPage } from '../pages/error.po'
import { helloPage } from '../pages/hello.po'
import { homePage } from '../pages/home.po'

Then(/^The window title is "([^"]*)"$/, (title: string) => {
    expect(browser).toHaveTitle(title)
})

Then(/^The the url path is "([^"]*)"$/, (str: string) => {
    expect(browser).toHaveUrl(browser.options.baseUrl + str, { containing: true })
})

Then(/^The active navbar item is "([^"]*)"$/, (text: string) => {
    expect(navbarElement.$getActive).toHaveText(text)
})

Then(/^The Company Logo is visible$/, () => {
    expect(footerElement.$logo).toBeVisible()
})

Then(/^The following text is visible on the Home page in <([^"]*)> tag:.*$/, (tag: string, text: string) => {
    expect(homePage.getElementByTag(tag)).toHaveText(text)
    expect(homePage.getElementByTag(tag)).toBeVisible()
})

Then(/^HTTP interceptor "([^"]*)" response code is "([^"]*)"$/, (mockName: string, statusCode: string) => {
    if (!mocks[mockName]) {
        throw new Error(`Mock ${mockName} is not defined.`)
    }
    expect(mocks[mockName]).toBeRequestedWith({ statusCode: +statusCode })
})

Then(/^404 page is shown$/, () => {
    const errorText = '404 Error'
    expect(browser).toHaveTitleContaining(errorText)
    expect(errorPage.$header).toHaveTextContaining(errorText)
})

Then(/^The "([^"]*)" is visible on the Hello page in header$/, (text: string) => {
    expect(helloPage.$header).toHaveText(text)
    expect(helloPage.$header).toBeVisible()
})
