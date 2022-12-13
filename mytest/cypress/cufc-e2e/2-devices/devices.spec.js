// devices.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('devicesTest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3001/#/devices');
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear();
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('swintern');
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('Clounix123');
  cy.get('#pane-first').click();
  cy.get('.el-button').click();
  cy.get('.el-menu > :nth-child(2) > .el-menu-item').click();
  cy.get(':nth-child(2) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(3) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(4) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(3) > .el-menu-item').click();
  cy.get(':nth-child(2) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(3) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(4) > .el-radio__input > .el-radio__inner').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(4) > .el-menu-item').click();
  cy.get(':nth-child(4) > .el-menu-item > .navfont').click();
  cy.get('.el-input__inner').clear();
  cy.get('.el-input__inner').type('23{enter}');
  cy.get(':nth-child(5) > .el-menu-item > .navfont').click();
  cy.get(':nth-child(2) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(3) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(4) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get('.el-radio-group > :nth-child(5)').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get('.el-radio-group > :nth-child(6)').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(7) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(6) > .el-menu-item').click();
  cy.get('.el-radio-group > :nth-child(2)').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(3) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(4) > .el-radio__input > .el-radio__inner').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(7) > .el-menu-item').click();
  cy.get(':nth-child(7) > .el-menu-item > .navfont').click();
  cy.get(':nth-child(2) > :nth-child(1) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(3) > :nth-child(1) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(4) > :nth-child(1) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(5) > :nth-child(1) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(6) > .el-radio > .el-radio__label').click();
  cy.get(':nth-child(6) > .el-radio > .el-radio__input > .el-radio__original').check();
  cy.get('.el-radio-group > :nth-child(1) > :nth-child(2)').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(2) > :nth-child(2) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(3) > :nth-child(2) > .el-radio__label').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(4) > :nth-child(2) > .el-radio__input > .el-radio__inner').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get(':nth-child(5) > :nth-child(2) > .el-radio__input > .el-radio__inner').click();
  cy.get('.is-focus > .el-radio__input > .el-radio__original').check();
  cy.get('[style="width: 17.4%;"] > .select-trigger > .el-input > .el-input__inner').click();
  cy.get('[aria-hidden="false"] > .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(2)').click();
  cy.get('[style="width: 17.3%;"] > .select-trigger > .el-input > .el-input__inner').click();
  cy.get('[aria-hidden="false"] > .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(3)').click();
  cy.get('.comparison > :nth-child(2) > :nth-child(1) > .select-trigger > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-icon').click();
  cy.get('[aria-hidden="false"] > .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > :nth-child(3)').click();
  cy.get(':nth-child(2) > :nth-child(2) > .select-trigger > .el-input > .el-input__inner').click();
  cy.get('[aria-hidden="false"] > .el-select-dropdown > .el-scrollbar > .el-select-dropdown__wrap > .el-scrollbar__view > .hover').click();
  /* ==== End Cypress Studio ==== */
});
