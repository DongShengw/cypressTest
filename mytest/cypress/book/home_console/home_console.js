import CommonTool from '../common'
import baseData from '../../fixtures/baseinfo.json'
export default class Home_ConsolePage extends CommonTool {
    constructor(){
        super()
        this.url = baseData.url + baseData.router.login
    }
    get namebutton(){
        return cy.get('table tbody').children().eq(6).children().eq(0)
    }
    get powerbutton(){
        return cy.get('.el-tabs__nav #tab-UnitState')
    }
    get logbutton(){
        return cy.get('.el-tabs__nav #tab-SyLog')
    }
    get lockbutton(){
        return cy.get('table tbody').children().eq(0).children().eq(3).children().eq(0).children().eq(0)
    }
    get poweronbutton(){
        return cy.get('table tbody').children().eq(0).children().eq(4).children().eq(0).children().eq(0)
    }
    logbuttonClick(){
        this.logbutton.click()
    }
    poweronbuttonClick(){
        this.poweronbutton.click()
        cy.wait(1000)
        this.poweronbutton.click()
    }
    namebuttonClick(){
        this.namebutton.dblclick()
    }
    powerbuttonClick(){
        this.powerbutton.click()
    }
    lockbuttonClick(){
        this.lockbutton.click()
    }
}