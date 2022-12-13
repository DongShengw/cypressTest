import CommonTool from '../common'
import locator from './locator.json'
import baseData from '../../fixtures/baseinfo.json'
export default class HomePage extends CommonTool {
    constructor() {
        super()
        this.url = baseData.url + baseData.router.login
        this.can_hold_number=0
    }
    get can_hold_number_release(){
        return this.can_hold_number
    }
    get searchinput() {
        return cy.get(locator.homepage.searchinput)
    }
    get searchbutton() {
        return cy.get(locator.homepage.searchbutton)
    }
    get refreshbutton() {
        return cy.get(locator.homepage.refreshbutton).eq(0)//通过父元素找
    }
    get reservebutton() {
        return cy.get(locator.homepage.reservebutton).eq(1).wait(1000)//通过父元素找
    }
    get searchDut() {
        return cy.get(locator.homepage.searchDut)
    }
    get dutinput() {
        return cy.get(locator.homepage.dutinput)
    }
    get dutinputsearchbutton() {
        return cy.get(locator.homepage.dutinputsearchbutton)
    }
    get user() {
        return cy.get(locator.homepage.user)
    }
    get userprofile() {
        return cy.get(locator.homepage.userprofile).children().eq(0)
    }
    get userpreferences() {
        return cy.get(locator.homepage.userpreferences).children().eq(1)
    }
    get userswitchsite() {
        return cy.get(locator.homepage.userswitchsite).children().eq(2)
    }
    get usersignout() {
        return cy.get(locator.homepage.usersignout).children().eq(3)
    }
    userpreferencesClick() {
        this.userpreferences.click()
        cy.wait(1000)
        cy.get('.el-form').children().eq(0).children().eq(1).children().eq(0).click()
        cy.wait(1000)
        cy.get('.el-form').children().eq(1).children().eq(1).children().eq(0).click()
        cy.wait(1000)
        cy.get('.el-dialog').children().eq(0).children().eq(1).click()
    }
    holdbuttonClick() {
        cy.request({
            url: "https://booking-dev.clounix.com/api/dut?group=Hangzhou",
            method: "GET"
        }).then(res=>{
            console.log(res)
            let {data}=res.body
            for(let i=0;i<data.length;i++){
                if(data[i].status===0){
                    this.can_hold_number=i
                    console.log(i)
                    break
                }
            }
            cy.get('table tbody').children().eq(this.can_hold_number).children().eq(4).children().eq(0).children().eq(0).children().eq(0).click()
            cy.get('.el-select .select-trigger').click()
            cy.get('.el-select-dropdown__list').children().eq(0).click()
            cy.get('.el-overlay .el-overlay-dialog .el-dialog .el-dialog__body').children().eq(2).children().eq(0).focus().type('cypress auto testing')
            cy.get('.footer').children().eq(1).click()
        })
    }
    releasebuttonClick() {
        console.log(this.can_hold_number_release)
        cy.get('table tbody').children().eq(0).children().eq(4).children().eq(0).children()
            .eq(0).children().eq(1).wait(4000).click({force: true})
        cy.get('.is-message-box .el-message-box .el-message-box__btns .is-plain').should('be.visible').click({force: true})
    }
    userswitchsiteHover() {
        this.userswitchsite.scrollIntoView()
        this.userswitchsite.trigger('mouseenter')
        // cy.get('.el-scrollbar .el-dropdown-menu').children().eq(0).click()
        cy.get('.el-dropdown-menu_item').contains('Hangzhou')
        this.user.trigger('mouseenter')
        this.userswitchsite.trigger('mouseenter')
        cy.wait(1000)
        // cy.get('.el-dropdown-menu_item').contains('Hsinchu')
    }
    usersignoutClick() {
        cy.scrollTo(0)
        this.usersignout.click()
        cy.wait(1000)
        cy.get('.el-message-box__btns > .el-button--primary').click()
    }
    userprofileClick() {
        this.userprofile.click()
        cy.wait(1000)
        cy.get('.el-dialog > .el-dialog__header > .el-dialog__headerbtn').click({ multiple: true, force: true })
    }
    usermousehover() {
        this.user.trigger('mouseenter')
    }
    searchinputType(value) {
        value && this.searchinput.clear().type(value).should('have.value', value)
    }
    searchbuttonClick() {
        this.searchbutton.click()
    }
    refreshbuttonClick() {
        this.refreshbutton.click()
        cy.wait(1000)
    }
    reservebuttonClick() {
        this.reservebutton.click()
        cy.wait(1000)
    }
    searchDutClick() {
        cy.wait(1000)
        this.searchDut.click()
    }
    dutinputType(value) {
        value && this.dutinput.clear().type(value).should('have.value', value)
        cy.wait(1000)
    }
    dutinputsearchbuttonClick() {
        this.dutinputsearchbutton.click()
        cy.get('.search .el-input .el-input__inner').focus().clear().click()
        cy.wait(2000)
        cy.get('.search-history div').children().eq(1).click()
        cy.wait(1000)
        cy.get('.search .el-input .el-input__inner').focus().clear().click()
        cy.wait(1000)
        cy.get('.search-history div').children().eq(2).click()
    }
}