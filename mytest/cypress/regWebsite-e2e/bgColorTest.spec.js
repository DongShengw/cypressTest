/* ==== Test Created with Cypress Studio ==== */
it('多选和背景颜色填充测试', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://coediting.clounix.com/');
  cy.get('.Login').click();
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('test1');
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('22222');
  cy.get('.el-button > span').click();
  cy.get('.role').select('test');
  // 确认url中包含'Catalogue',并等待2秒
  cy.url().should('include','Catalogue').wait(2000)
  // 多选
  cy.get('#luckysheet-rich-text-editor').type('{shift}{rightarrow}{rightarrow}' +
      '{rightarrow}{downarrow}{downarrow}',{force:true}).wait(1000)
  // 选择更多颜色
  cy.get('#luckysheet-icon-cell-color-menu').click().wait(1000)
  // 选择具体颜色
  cy.get('#luckysheet-icon-cell-color-menu-menuButton').should('be.visible')
  cy.get('#luckysheet-icon-cell-color-menu-menuButton > div:nth-child(2) > div > div ' +
      '> div.sp-palette-container > div.sp-palette.sp-thumb.sp-cf > div.sp-cf.sp-palette-row.sp-palette-row-5 > span:nth-child(1)').click().wait(1000)

  cy.get('#logoutBtn').should('be.visible').click()
  cy.get('.Login').click();
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('test2');
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('2122');
  cy.get('.el-button > span').click();
  cy.get('.role').select('test');
  // 确认url中包含'Catalogue',并等待2秒
  cy.url().should('include','Catalogue').wait(2000)

  cy.get('#luckysheet-rich-text-editor').type('{shift}{rightarrow}{rightarrow}' +
      '{rightarrow}{downarrow}{downarrow}',{force:true}).wait(1000)
  // 选择更多颜色
  cy.get('#luckysheet-icon-cell-color-menu').click().wait(1000)
  // 选择具体颜色
  cy.get('#luckysheet-icon-cell-color-menu-menuButton').should('be.visible')
  cy.get('#luckysheet-icon-cell-color-menu-menuButton > div:nth-child(2) > div > div ' +
      '> div.sp-palette-container > div.sp-palette.sp-thumb.sp-cf > div.sp-cf.sp-palette-row.sp-palette-row-5 > span:nth-child(2)').click().wait(1000)

  cy.get('#luckysheet-icon-cell-color-menu').click().should('be.visible').wait(1000)
  cy.get('#luckysheet-icon-cell-color-menu-menuButton > div.luckysheet-cols-menuitem.luckysheet-mousedown-cancel.luckysheet-color-reset').click().wait(1000)

  cy.get('#logoutBtn').should('be.visible').click()
  /* ==== End Cypress Studio ==== */
});