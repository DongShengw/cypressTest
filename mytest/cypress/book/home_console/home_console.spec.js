import Home_ConsolePage from "./home_console";
describe('home name testing',()=>{
    beforeEach(()=>{
        cy.loginSuccess()
        const instance=new Home_ConsolePage()
        cy.wrap(instance).as('home_name_page')
    })
    it('home name testing',function(){
        this.home_name_page.namebuttonClick()
        cy.wait(1000)
        this.home_name_page.powerbuttonClick()
        cy.wait(6000)
        this.home_name_page.lockbuttonClick()
        this.home_name_page.poweronbuttonClick()
        this.home_name_page.logbuttonClick()
    })
})