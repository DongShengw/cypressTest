import CommonTool from '../common'
import locator from './locator.json'
import baseData from '../../fixtures/baseinfo.json'
export default class LoginPage extends CommonTool {
    constructor() {
        super()
        this.url = baseData.url + baseData.router.login
    }
    get username() {
        return cy.get(locator.loginpage.username)
    }
    get password() {
        return cy.get(locator.loginpage.password)
    }

    get submit() {
        return cy.get(locator.loginpage.submit)
    }

    get prompt() {
        return cy.get(locator.loginpage.prompt)
    }
    login(name, pwd) {
        name && this.username.clear().type(name).should('have.value', name)
        pwd && this.password.clear().focus().type(pwd).should('have.value', pwd)
        this.submit.click()
    }

}