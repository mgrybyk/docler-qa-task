class HomePage {
    getElementByTag(tag: string) {
        return $(tag)
    }
}
export const homePage = new HomePage()
