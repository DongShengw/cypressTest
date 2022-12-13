import CommonTool from '../common'
import baseData from '../../fixtures/baseinfo.json'
export default class Dut_Reserve extends CommonTool {
    constructor(){
        super()
        this.url = baseData.url + baseData.router.reserve
    }
    get submitbutton(){
        return cy.get('.title').children().eq(1)
    }
    get searchinput(){
        return cy.get('.title').children().eq(2).children().eq(0)
    }
    get perpagebutton(){
        return cy.get('.el-select .select-trigger')
    }
    get swicthbutton(){
        return cy.get('.reserve').children().eq(1).children().eq(0).children().eq(1).children().eq(0)
    }
    get gotobutton(){
        return cy.get('.el-pagination__jump div input')
    }
    gotobuttonClick(){
        this.gotobutton.clear()
        this.gotobutton.type('3')
        cy.wait(1000)
        this.gotobutton.type('{enter}')
    }
    swicthbuttonClick(){
        this.swicthbutton.click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .floatDiv > .el-input > .el-input__inner').type("test")
        cy.get('.dutIrac').click()
        cy.wait(1000)
        cy.get('.el-message-box__btns > .el-button--default').click()
    }
    perpagebutonClick(){
        this.perpagebutton.click()
        cy.get('.el-scrollbar .el-select-dropdown__wrap .el-select-dropdown__list').children().eq(0).click()
        cy.wait(1000)
        cy.get('.pagination ul').children().eq(1).click()
        cy.wait(1000)
    }
    submitbuttonClick(){
        this.submitbutton.click()
        cy.get('.el-message-box__btns button').click()
        cy.wait(1000)
        cy.get('.reserve').children().eq(1).children().eq(1).children().eq(1).children().eq(0).click()
        cy.wait(1000)
        cy.get('.dutIrac').click()
        // cy.wait(1000)
        // cy.get('.el-message-box__btns > .el-button--primary').click()
    }
    searchinputType(){
        this.searchinput.focus().clear().type('a')
        this.searchinput.type('{enter}')
        cy.wait(1000)
        this.searchinput.focus().clear()
        this.searchinput.type('{enter}')
    }
}