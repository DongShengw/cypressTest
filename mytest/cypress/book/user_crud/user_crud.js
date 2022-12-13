import CommonTool from '../common'
import baseData from '../../fixtures/baseinfo.json'
export default class User_Crud extends CommonTool {
    constructor(){
        super()
        this.url = baseData.url + baseData.router.dutirac
    }
    get pagesizebutton(){
        return cy.get('.select-trigger > .el-input > .el-input__inner')
    }
    get gotocurrentpagebutton(){
        return cy.get('.el-aside .userCurd')
    }
    get tabadmin_admins(){
        return cy.get('#tab-admins > .custom-tabs-label > .el-badge')
    }
    get tabadmin_deactived(){
        return cy.get('#tab-deactivated > .custom-tabs-label > .el-badge > span')
    }
    get tabadmin_active(){
        return cy.get('#tab-active > .custom-tabs-label > .el-badge > span')
    }
    get searchinput(){
        return cy.get('.top > .el-input > .el-input__inner')
    }
    get adduserbuttn(){
        return cy.get('.top > .el-button')
    }
    get adduserinput_name(){
        return cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
    }
    get adduserinput_password(){
        return cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
    }
    get adduserinput_email(){
        return cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
    }
    get curd_opearations_view(){
        return cy.get('.el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_2_column_11 > .cell > .curd_button > .el-button--primary')
    }
    get curd_opearations_edit(){
        return cy.get('.el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_2_column_11 > .cell > .curd_button > .el-button--info')
    }
    get curd_opearations_del(){
        return cy.get('.el-table__fixed-body-wrapper > .el-table__body > tbody > :nth-child(1) > .el-table_2_column_11 > .cell > .curd_button > .el-button--danger')
    }
    curd_opearations_viewClick(){
        this.curd_opearations_view.click()
        cy.wait(1000)
        cy.get('html').click('topLeft')
    }
    curd_opearations_editClick(){
        this.curd_opearations_edit.click()
        cy.get(':nth-child(9) > .el-form-item__content > .el-button').click()
        cy.wait(1000)
        this.curd_opearations_edit.click()
    }
    curd_opearations_delClick(){
        cy.wait(1000)
        this.curd_opearations_del.click()
        cy.wait(1000)
        cy.get('.el-message-box__btns > .el-button--primary').click()
    }
    adduserType(){
        this.adduserinput_name.type('test')
        this.adduserinput_password.type('test')
        this.adduserinput_email.type('test@clounix.com')
        cy.wait(1000)
        cy.get('.el-form-item__content > .el-button').click()
    }
    adduserbuttnClick(){
        this.adduserbuttn.click()
    }
    searchinputType(){
        this.searchinput.type('zhanglei')
        cy.wait(1000)
        this.searchinput.clear()
        cy.wait(1000)
    }
    tabadmin_adminsClick(){
        this.tabadmin_admins.click()
        cy.wait(1000)
    }
    tabadmin_activeClick(){
        this.tabadmin_active.click()
        cy.wait(1000)
    }
    tabadmin_deactivedClick(){
        this.tabadmin_deactived.click()
        cy.wait(1000)
    }
    gotocurrentpagebuttonClick(){
        this.gotocurrentpagebutton.click()
    }
    pagesizebuttonClick(){
        this.pagesizebutton.click()
        cy.wait(1000)
        cy.get('.el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(1)').click()
        cy.get('.el-pager').children().last().click()
        cy.wait(1000)
    }
}