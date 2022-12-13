import Dut_Reserve from "./dut_reserve"
import HomePage from '../home/homepage'
describe('dut_reserve testing',()=>{
    beforeEach(()=>{
        cy.loginSuccess()
        const homepageInstance=new HomePage()
        const instance=new Dut_Reserve()
        cy.wrap(instance).as('dut_reserve_page')
        homepageInstance.reservebuttonClick()
    })
    it('dut_reserve testing',function(){
        this.dut_reserve_page.perpagebutonClick()
        this.dut_reserve_page.searchinputType()
        this.dut_reserve_page.gotobuttonClick()
        this.dut_reserve_page.swicthbuttonClick()
        this.dut_reserve_page.submitbuttonClick()
    })
})