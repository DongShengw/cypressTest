import CommonTool from '../common'
import baseData from '../../fixtures/baseinfo.json'
export default class Op_Log extends CommonTool {
    constructor() {
        super()
        this.url = baseData.url + baseData.router.dutirac
    }
    get gotocurrentpagebutton() {
        return cy.get('.el-aside .opLog')
    }
    get changebutton() {
        return cy.get('.container > :nth-child(1) > .select-trigger > .el-input > .el-input__inner')
    }
    gotocurrentpagebuttonClick() {
        this.gotocurrentpagebutton.click()
    }
    changebuttonClick() {
        this.changebutton.click()
        cy.wait(1000)
        cy.get('.el-scrollbar .el-select-dropdown__wrap .el-scrollbar__view').children().eq(1).click()
        cy.wait(1000)
        this.changebutton.click()
        cy.get(1000)
        cy.get('.el-scrollbar .el-select-dropdown__wrap .el-scrollbar__view').children().eq(0).click()
    }
}