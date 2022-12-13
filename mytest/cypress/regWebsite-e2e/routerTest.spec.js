/* ==== Test Created with Cypress Studio ==== */
it('路由Catalogue登录拦截测试', function() {
    cy.clearCookie('account')
    cy.clearCookie('password')
    cy.clearCookie('identity')
    cy.visit('https://coediting.clounix.com/#/Catalogue');
    cy.url().should('include', 'Login').wait(1000)
    cy.get('#app > div').should('be.visible')
})
it('路由Select登录拦截测试', function() {
    cy.visit('https://coediting.clounix.com/#/Select');
    cy.url().should('include', 'Login').wait(1000)
    cy.get('#app > div').should('be.visible')
})
it('路由History登录拦截测试', function() {
    cy.visit('https://coediting.clounix.com/#/History');
    cy.url().should('include', 'Login').wait(1000)
    cy.get('#app > div').should('be.visible')
})