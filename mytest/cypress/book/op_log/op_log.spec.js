import Op_Log from './op_log'
import HomePage from '../home/homepage'
describe('dut_irac testing',()=>{
    beforeEach(()=>{
        cy.loginSuccess()
        const homepageInstance=new HomePage()
        const instance=new Op_Log()
        cy.wrap(instance).as('op_log_page')
        homepageInstance.reservebuttonClick()
        instance.gotocurrentpagebuttonClick()
    })
    it('op log testing',function(){
      this.op_log_page.gotocurrentpagebuttonClick()
      this.op_log_page.changebuttonClick()
    })
})