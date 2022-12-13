/* ==== Test Created with Cypress Studio ==== */
it('遍历测试表格测试', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://coediting.clounix.com/');
  cy.get('.Login').click();

  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').should('be.visible')
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear();
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('user01');
  
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').should('be.visible')
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('1234');

  cy.get('.el-button > span').should('be.visible')
  cy.get('.el-button > span').click();

  cy.get('#app').click();
  // cy.get('.role').should('have.length')

  cy.get('.role').should('be.visible')
  cy.get('.role').select('test').should('have.value','test')
  cy.url().should('include','Catalogue').wait(3000)
  cy.get('#luckysheet > div.luckysheet').as('excelTable').should('be.visible')

  cy.get("#select").should('be.visible').select(0).should('have.value','new_excel_1').wait(5000)
  cy.get('#luckysheet > div.luckysheet').as('excelTable').should('be.visible')

  cy.get("#select").should('be.visible').select(1).should('have.value','new file2').wait(5000)
  cy.get('#luckysheet > div.luckysheet').as('excelTable').should('be.visible')

  cy.get("#select").should('be.visible').select(2).should('have.value','new file3').wait(1000)
  cy.get('#luckysheet > div.luckysheet').as('excelTable').should('be.visible')

  cy.get("#select").should('be.visible').select(3).should('have.value','test').wait(1000)
  cy.get('#luckysheet > div.luckysheet').as('excelTable').should('be.visible')

  cy.get("#select").should('be.visible').select(4).should('have.value','test1').wait(1000)
  cy.get('#luckysheet > div.luckysheet').as('excelTable').should('be.visible')

  cy.get("#select").should('be.visible').select(5).should('have.value','test2').wait(1000)
  cy.get('#luckysheet > div.luckysheet').as('excelTable').should('be.visible')

  cy.get("#select").should('be.visible').select(6).should('have.value','test3').wait(1000)
  cy.get('#luckysheet > div.luckysheet').as('excelTable').should('be.visible')

  cy.get("#select").should('be.visible').select(7).should('have.value','我轻轻地所等等2321132134124124213412412').wait(1000)
  cy.get('#luckysheet > div.luckysheet').as('excelTable').should('be.visible')

  cy.get('#logoutBtn').should('be.visible').click()
  /* ==== End Cypress Studio ==== */
});