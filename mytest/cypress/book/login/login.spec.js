/// <reference types="cypress" />
import LoginPage from './loginpage.js'
import LoginData from './loginData.json'
describe(LoginData.title, () => {
    beforeEach(() => {
        const LoginInstance = new LoginPage()
        LoginInstance.visit()
        //调用wrap返回一个对象，并取别名在后面this上使用
        cy.wrap(LoginInstance).as('loginPage')
    })
    LoginData.success.forEach(item=>{
        it(item.name,function(){
            this.loginPage.login(item.username,item.password)
            cy.get(item.validate.checkpointer[0]).should(item.validate.checkpointer[1],item.validate.checkpointer[2])
        })
    })
    LoginData.failure.forEach(item=>{
        it.skip(item.name,function(){
            this.loginPage.login(item.username,item.password)
            this.loginPage.prompt.should(item.validate.checkpointer[1],item.validate.checkpointer[2])
        })
    })
})