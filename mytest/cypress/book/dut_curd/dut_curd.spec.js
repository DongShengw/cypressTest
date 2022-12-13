import Dut_Curd from "./dut_curd";
import HomePage from '../home/homepage'
describe('dut curd testing', () => {
    beforeEach(() => {
        cy.loginSuccess()
        const homepageInstance = new HomePage()
        const instance = new Dut_Curd()
        cy.wrap(instance).as('dut_curd')
        homepageInstance.reservebuttonClick()
        instance.gotocurrentpagebuttonClick()
    })
    it('dut curd testing',function(){
        this.dut_curd.gotocurrentpagebuttonClick()
        this.dut_curd.searchinputType()
        this.dut_curd.adddutbuttonClick()
        // this.dut_curd.pagesizebuttonClick()
        this.dut_curd.pagebuttonlastClick()
    })
})