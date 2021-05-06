import { Given } from 'cucumber'
import { mocks } from '../../src/mocks'

Given(/^I am on "([^"]*)" page$/, (page: string) => {
    switch (page) {
        case 'Landing':
            browser.url('/')
            break
        case 'Form':
            browser.url('/form.html')
            break
        default:
            throw new Error(`Unable to open page "${page}". Not implemented.`)
    }
})

Given(/^HTTP interceptor "([^"]*)" spies on "([^"]*)" "([^"]*)"$/, (mockName: string, method: string, url: string) => {
    if (mocks[mockName]) {
        throw new Error(`Mock ${mockName} was already defined.`)
    }
    mocks[mockName] = browser.mock(url, { method })
})
