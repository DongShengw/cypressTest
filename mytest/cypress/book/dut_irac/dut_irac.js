import CommonTool from '../common'
import baseData from '../../fixtures/baseinfo.json'
export default class Dut_IracPage extends CommonTool {
    constructor(){
        super()
        this.url = baseData.url + baseData.router.dutirac
    }
    get copybutton(){
        return cy.get('table tbody').children().eq(0).children().eq(1).children().eq(0).children().eq(0)
    }
    get gotocurrentpagebutton(){
        return cy.get('.el-aside .dutIrac')
    }
    get pagesizebutton(){
        return cy.get('.el-select .select-trigger div')
    }
    get gotopageinput(){
        return cy.get('.el-pagination__jump div input')
    }
    gotocurrentpagebuttonClick(){
        this.gotocurrentpagebutton.click()
    }
    copybuttonClick(){
        this.copybutton.click()
    }
    pagesizebuttonClick(){
        this.pagesizebutton.click()
        cy.get('.el-select-dropdown .el-scrollbar .el-select-dropdown__wrap .el-scrollbar__view').children().eq(0).click()
        cy.wait(1000)
        cy.get('.el-pager').children().eq(1).click()
    }
    gotopageinputType(){
        cy.wait(1000)
        this.gotopageinput.type('3').type('{enter}')
    }
}