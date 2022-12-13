import Dut_IracPage from "./dut_irac"
import HomePage from '../home/homepage'
describe('dut_irac testing',()=>{
    beforeEach(()=>{
        cy.loginSuccess()
        const homepageInstance=new HomePage()
        const instance=new Dut_IracPage()
        cy.wrap(instance).as('dut_irac_page')
        homepageInstance.reservebuttonClick()
        instance.gotocurrentpagebuttonClick()
    })
    it('dut_irac testing',function(){
       this.dut_irac_page.copybuttonClick()
       this.dut_irac_page.pagesizebuttonClick()
       this .dut_irac_page.gotopageinputType()
    })
})