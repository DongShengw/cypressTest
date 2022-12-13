/* ==== Test Created with Cypress Studio ==== */
it('复制粘贴单个单元格测试', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://coediting.clounix.com/');
    cy.get('.Login').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('1211345');
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('22222');
    cy.get('.el-button > span').click();
    cy.get('.role').select('test3');

    cy.url().should('include', 'Catalogue').wait(2000)

    cy.get('#luckysheet-rich-text-editor').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}', {force: true})
        .type('copy').type('{rightarrow}').type('copy1').type('{enter}{uparrow}').type('{shift}{leftarrow}').wait(500).type('{ctrl+c}')
        .type('{downarrow}').wait(500).type('{ctrl+v}')


})