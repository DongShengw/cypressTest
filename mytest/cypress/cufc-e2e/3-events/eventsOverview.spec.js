// eventsOverview.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('overviewTest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://10.18.0.14:3001/#/events/list');
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').should('be.empty')
  cy.get(':nth-child(1) > .el-form-item__content > .el-input').type('swintern');
  cy.get('.el-button').should('be.visible').then(cy.get('.el-button'));
  // cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear();
  // cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('swintern');
  // cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
  // cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('Clounix123{enter}');
  /* ==== End Cypress Studio ==== */
});