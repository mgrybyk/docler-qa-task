class NavbarElement {
    get $root() {
        return $('#navbar')
    }

    public openByName(name: string) {
        const link = this.$root.$(`.//li/a[normalize-space() = "${name}"]`)
        link.waitForClickable()
        link.click()
    }

    get $getActive() {
        return this.$root.$('li.active a')
    }
}
export const navbarElement = new NavbarElement()
