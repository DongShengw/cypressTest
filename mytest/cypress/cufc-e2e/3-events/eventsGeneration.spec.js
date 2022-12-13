/* ==== Test Created with Cypress Studio ==== */
it('generationTest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://10.18.0.14:3001/#/events/generation');
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear();
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('swintern');
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('Clounix123');
  cy.get('.el-button').click();
  cy.get('.el-switch__action').click();
  cy.get('.el-form > :nth-child(2) > :nth-child(1) > .el-input > .el-input__inner').click();
  cy.get('#el-collapse-head-145').click();
  cy.get('#el-collapse-content-145 > .el-collapse-item__content > .el-checkbox-group > :nth-child(1) > .el-checkbox__input > .el-checkbox__inner').click();
  cy.get('#el-collapse-content-145 > .el-collapse-item__content > .el-checkbox-group > :nth-child(1) > .el-checkbox__input > .el-checkbox__original').check();
  cy.get('#el-collapse-head-1600').click();
  cy.get('#el-collapse-content-1600 > .el-collapse-item__content > .el-checkbox-group > :nth-child(1) > .el-checkbox__input > .el-checkbox__inner').click();
  cy.get('#el-collapse-content-1600 > .el-collapse-item__content > .el-checkbox-group > :nth-child(1) > .el-checkbox__input > .el-checkbox__original').check();
  cy.get('.form-item > .el-form-item__content').click();
  /* ==== End Cypress Studio ==== */
});