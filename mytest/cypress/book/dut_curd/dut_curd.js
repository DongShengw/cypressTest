import CommonTool from '../common'
import baseData from '../../fixtures/baseinfo.json'
export default class Dut_Curd extends CommonTool {
    constructor(){
        super()
        this.url = baseData.url + baseData.router.dutirac
    }
    get gotocurrentpagebutton(){
        return cy.get('.el-aside .dutCurd')
    }
    get searchinput(){
        return cy.get('.top > .el-input > .el-input__inner')
    }
    get adddutbutton(){
        return cy.get('.top > .el-button')
    }
    get pagesizebutton(){
        return cy.get('.el-pagination__sizes .el-select .select-trigger .el-input')
    }
    get pagebuttonlast(){
        return cy.get('.el-pager li').last().wait(1000)
    }
    pagebuttonlastClick(){
        cy.get(1000)
        this.pagebuttonlast.click()
        //view按钮
        cy.get('.el-table__fixed-body-wrapper table tbody tr td div').contains('test').parent().siblings().last().children().eq(0).children().eq(0).children().eq(0).click()
        cy.wait(1000)
        //关闭view按钮
        // cy.get('.el-dialog__header .el-dialog__headerbtn el-dialog__close').click()
        cy.get('body').click()
        //edit按钮
        cy.get('.el-table__fixed-body-wrapper table tbody tr td div').contains('test').parent().siblings().last().children().eq(0).children().eq(0).children().eq(1).click()
        cy.get('.el-form-item__content > .el-button').contains('Submit').click()
        cy.wait(1000)
        //删除按钮
        cy.get('.el-table__fixed-body-wrapper table tbody tr td div').contains('test').parent().siblings().last().children().eq(0).children().eq(0).children().eq(2).click()
        cy.wait(1000)
        cy.get('.el-message-box__btns > .el-button--primary').click()
    }
    pagesizebuttonClick(){
        this.pagesizebutton.click()
        cy.get('.el-select-dropdown .el-scrollbar .el-select-dropdown__wrap .el-scrollbar__view').children().eq(0).click()
    }
    gotocurrentpagebuttonClick(){
        this.gotocurrentpagebutton.click()
    }
    searchinputType(){
        this.searchinput.type('09')
        cy.wait(1000)
        this.searchinput.clear()
    }
    adddutbuttonClick(){
        this.adddutbutton.click()
        cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('test')
        cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type('10.24.2.35')
        cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type('test')
        cy.get(':nth-child(5) > .el-form-item__content > .el-input > .el-input__inner').type('test')
        cy.get(':nth-child(6) > .el-form-item__content > .el-input > .el-input__inner').type('10.22.1.50 0 2,')
        cy.get(':nth-child(7) > .el-form-item__content > .el-input > .el-input__inner').type('test')
        cy.get('.el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__inner').click()
        cy.wait(1000)
        cy.get('.el-select__popper>.el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view li').contains('hangzhou').click()
        cy.get('.el-form-item__content > .el-button').click()
    }
}