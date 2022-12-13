import LoginPage from './loginpage'
import data from './loginData.json'
// v2.1 升级版PO
// eslint-disable-next-line no-undef
context(data.title, () => {
    beforeEach(() => {
        const instance = new LoginPage()
        instance.visit()
        // eslint-disable-next-line no-undef
        cy.wrap(instance).as('loginPage')
    })

    data.success.forEach(item => {
        it(item.name, function () {
            // 直接用箭头函数，this.loginPage就不是beforeEach里as的loginPage
            this.loginPage.login(item.username, item.password)
            // eslint-disable-next-line no-undef
            cy.get(item.validate.checkpointer[0]).should(item.validate.checkpointer[1], item.validate.checkpointer[2])
        })
    })

    data.failure.forEach(item => {
        it(item.name, function () { // 直接用箭头函数，this.loginPage就不是beforeEach里as的loginPage
            this.loginPage.login(item.username, item.password)
            this.loginPage.prompt.should(item.validate.checkpointer[1], item.validate.checkpointer[2])
        })
    })
})

// v2.0 PO
// context('登录', () => {
//   it('输入正确的用户名和密码，登录成功', () => {
//     const login = new LoginPage()
//     login.visit()
//     login.login('super@outlook.com', '123456')
//     cy.url().should('contain', '/#/home')
//   })

//   it('输入错误的用户名和密码，提示账号或者密码有误', () => {
//     const login = new LoginPage()
//     login.visit()
//     login.login('222', '123456')
//     login.prompt.should('contain', '账号或者密码有误')
//   })
// })

// v1.0 基础版
// describe('login', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:4173/')
//   })
//   it('successful', () => {
//     cy.get('input[type=text]').type('super@outlook.com')
//     cy.get('input[type=password]').type('123456')
//     cy.get('button[type=button]').click()
//     cy.url().should('include', '/#/home')
//   })
// })
