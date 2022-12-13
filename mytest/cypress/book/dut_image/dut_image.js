import CommonTool from '../common'
import baseData from '../../fixtures/baseinfo.json'
export default class Dut_Image_Page extends CommonTool {
    constructor(){
        super()
        this.url = baseData.url + baseData.router.dutirac
    }
    get gotocurrentpagebutton(){
        return cy.get('.el-aside .imageBox')
    }
    get copybutton(){
        return cy.get('.tableBox table tbody').children().eq(0).children().eq(1).children().eq(0)
    }
    get updatebutton(){
        return cy.get('.container .btnBox').children().eq(1)
    }
    get selectallbutton(){
        return cy.get('.el-dialog .el-dialog__body .el-transfer .el-transfer-panel .el-transfer-panel__header .el-checkbox').children().eq(1)
    }
    get searchinput(){
        return cy.get('.el-dialog__body .el-transfer .el-transfer-panel .el-transfer-panel__body').children().eq(0).children().eq(0)
    }
    get confirmbutton(){
        return cy.get('.el-dialog__body .footerBtn .el-button')
    }
    gotocurrentpagebuttonClick(){
        this.gotocurrentpagebutton.click()
    }
    copybuttonClick(){
        this.copybutton.click()
    }
    updatebuttonClick(){
        this.updatebutton.click()
    }
    selectallbuttonClick(){
        this.selectallbutton.click()
        cy.wait(1000)
        this.selectallbutton.click()
    }
    searchinputType(){
        this.searchinput.type('09')
        cy.wait(1000)
        this.searchinput.clear()
        // cy.get('.el-dialog__body .el-transfer nth-child(1) .el-transfer-panel__body').children().eq(1).children().eq(0).click()
        cy.get('.el-dialog__body .el-transfer').children().eq(0).children().eq(1).children().eq(1).children().eq(0).click()
        cy.wait(500)
        cy.get('.el-dialog .el-dialog__body .el-transfer .el-transfer__buttons').children().eq(1).click()
        cy.wait(1000)
        cy.get('.el-dialog__body .el-transfer').children().eq(2).children().eq(1).children().eq(1).children().eq(0).click()
        cy.wait(500)
        cy.get('.el-dialog .el-dialog__body .el-transfer .el-transfer__buttons').children().eq(0).click()
        // cy.get('.el-dialog__body .el-transfer').children().eq(2).children().eq(1).children().eq(1).children().eq(0).click()
        // cy.get('.el-dialog .el-dialog__body .el-transfer .el-transfer__buttons').children().eq(0).click()
    }
    confirmbuttonClick(){
        cy.wait(1000)
        this.confirmbutton.click()
    }
}