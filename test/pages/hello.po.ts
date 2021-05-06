class HelloPage {
    get $header() {
        return $('h1#hello-text')
    }
}
export const helloPage = new HelloPage()
