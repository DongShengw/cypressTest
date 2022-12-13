import Dut_Image_Page from './dut_image'
import HomePage from '../home/homepage'
describe('dut_irac testing',()=>{
    beforeEach(()=>{
        cy.loginSuccess()
        const homepageInstance=new HomePage()
        const instance=new Dut_Image_Page()
        cy.wrap(instance).as('dut_irac_page')
        homepageInstance.reservebuttonClick()
        instance.gotocurrentpagebuttonClick()
    })
    it('dut_image testing',function(){
      this.dut_irac_page.copybuttonClick()
      this.dut_irac_page.updatebuttonClick()
      this.dut_irac_page.selectallbuttonClick()
      this.dut_irac_page.searchinputType()
      this.dut_irac_page.confirmbuttonClick()
    })
})