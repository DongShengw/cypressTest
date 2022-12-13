/* ==== Test Created with Cypress Studio ==== */
it('基本公式测试', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://coediting.clounix.com/');
    cy.get('.Login').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('1211345');
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('22222');
    cy.get('.el-button > span').click();
    cy.get('.role').select('new file3');
    // 确认url中包含'Catalogue',并等待3秒
    cy.url().should('include','Catalogue').wait(2000)
    // 多选
    cy.get('#luckysheet-rich-text-editor').type('{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}',{force:true})
        .clear().type('30').type('{rightarrow}').type('20').type('{rightarrow}').type('40')
        .type('{rightarrow}').type('120').type('{rightarrow}').type('40').type('{enter}{uparrow}')
        .type('{shift}{leftarrow}{leftarrow}{leftarrow}{leftarrow}',{force:true}).wait(300)

    cy.get('#luckysheet-icon-function-menu').should('be.visible').click().wait(1000)
    cy.get('#luckysheet-icon-function-menu-menuButton').should('be.visible')
    cy.get('#luckysheet-icon-function-menu-menuButton > div:nth-child(1)').should('be.visible').click()

    cy.get('#luckysheet-icon-function-menu').should('be.visible').click().wait(1000)
    cy.get('#luckysheet-icon-function-menu-menuButton').should('be.visible')
    cy.get('#luckysheet-icon-function-menu-menuButton > div:nth-child(2)').should('be.visible').click()

    cy.get('#luckysheet-icon-function-menu').should('be.visible').click().wait(1000)
    cy.get('#luckysheet-icon-function-menu-menuButton').should('be.visible')
    cy.get('#luckysheet-icon-function-menu-menuButton > div:nth-child(3)').should('be.visible').click()

    cy.get('#luckysheet-icon-function-menu').should('be.visible').click().wait(1000)
    cy.get('#luckysheet-icon-function-menu-menuButton').should('be.visible')
    cy.get('#luckysheet-icon-function-menu-menuButton > div:nth-child(4)').should('be.visible').click()

    cy.get('#luckysheet-icon-function-menu').should('be.visible').click().wait(1000)
    cy.get('#luckysheet-icon-function-menu-menuButton').should('be.visible')
    cy.get('#luckysheet-icon-function-menu-menuButton > div:nth-child(5)').should('be.visible').click()

    cy.get('#luckysheet-rich-text-editor')
       .type('{rightarrow}{enter}',{force:true}).should('contain','=SUM(A7:E7)')
       .type('{rightarrow}{enter}',{force:true}).should('contain','=AVERAGE(A7:E7)')
       .type('{rightarrow}{enter}',{force:true}).should('contain','=COUNT(A7:E7)')
       .type('{rightarrow}{enter}',{force:true}).should('contain','=MAX(A7:E7)')
       .type('{rightarrow}{enter}',{force:true}).should('contain','=MIN(A7:E7)')

    cy.get('#logoutBtn').should('be.visible').click()
    /* ==== End Cypress Studio ==== */
});