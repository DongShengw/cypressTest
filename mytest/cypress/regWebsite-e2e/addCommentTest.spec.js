/* ==== Test Created with Cypress Studio ==== */
it('批注功能测试', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://coediting.clounix.com/');
    cy.get('.Login').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('1211345');
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('22222');
    cy.get('.el-button > span').click();
    cy.get('.role').select('test');
    // 确认url中包含'Catalogue',并等待3秒
    cy.url().should('include','Catalogue').wait(2000)
    // 多选
    cy.get('#luckysheet-rich-text-editor').type('{rightarrow}{rightarrow}{rightarrow}' +
        '{downarrow}{downarrow}',{force:true})
        .get('#luckysheet-icon-postil').should('be.visible').click().wait(500)
        .get('#luckysheet-icon-postil-menuButton').should('be.visible')
        .get('#luckysheet-icon-postil-menuButton > div:nth-child(1)').should('be.visible').click()
        .focused().click().type('批注')

    cy.get('#logoutBtn').should('be.visible').click()
    /* ==== End Cypress Studio ==== */
});