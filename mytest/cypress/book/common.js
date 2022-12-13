import baseData from '../fixtures/baseinfo.json'
export default class CommonTool {
    constructor() {
        this.url = baseData.url
    }
    visit (url) {
        cy.visit(url || this.url)
    }
}
