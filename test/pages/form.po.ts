class FormPage {
    get $root() {
        return $('form#hello-form')
    }

    get $nameInput() {
        return this.$root.$('input#hello-input')
    }

    get $submitButton() {
        return this.$root.$('#hello-submit')
    }
}
export const formPage = new FormPage()
