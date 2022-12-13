/* ==== Test Created with Cypress Studio ==== */
it('表格生成测试', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://coediting.clounix.com/');
    cy.get('.Login').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('test2');
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('22222');
    cy.get('.el-button > span').click();
    cy.get('.role').select('test');
    // 确认url中包含'Catalogue',并等待2秒
    cy.url().should('include','Catalogue').wait(1000)
    // 多选
    cy.get('#luckysheet-rich-text-editor').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}' +
        '{rightarrow}{rightarrow}{rightarrow}{shift}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}'
        ,{force:true}).wait(500)

    cy.get('#luckysheet-chart-btn-title').should('be.visible').click()
    cy.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        cy.get('#luckysheet-chart-btn-title').should('be.visible').wait(1000).click()
        return false
    })
    cy.get('.luckysheet-modal-dialog-chart').should('be.visible')
    cy.get('.luckysheet-modal-dialog-controll').should('be.visible')
        .get(' div.luckysheet-modal-dialog-controll > span.luckysheet-modal-controll-btn.luckysheet-modal-controll-del')
        .should('be.visible')
    // cy.get('.luckysheet-modal-controll-del').should('be.visible').first().click()
    cy.get('#logoutBtn').should('be.visible').click()
    /* ==== End Cypress Studio ==== */
});