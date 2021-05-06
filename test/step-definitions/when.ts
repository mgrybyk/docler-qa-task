import { When } from 'cucumber'

import { headerElement } from '../elements/header.element'
import { navbarElement } from '../elements/navbar.element'
import { formPage } from '../pages/form.po'

When(/^I click on the "([^"]*)" button in header$/, (text: string) => {
    expect(headerElement.$siteLink).toHaveText(text)
    headerElement.$siteLink.click()
})

When(/^I click on the "([^"]*)" button in navbar$/, (text: string) => {
    navbarElement.openByName(text)
})

When(/^I type "([^"]*)" in the input field on the Form page$/, (text: string) => {
    expect(formPage.$nameInput).toBeVisible()
    formPage.$nameInput.setValue(text)
})

When(/^Submit the form on the Form page$/, () => {
    formPage.$submitButton.click()
})
