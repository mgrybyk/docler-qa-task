class HeaderElement {
    get $root() {
        return $('.navbar-header')
    }

    get $siteLink() {
        return this.$root.$('#site')
    }
}
export const headerElement = new HeaderElement()
