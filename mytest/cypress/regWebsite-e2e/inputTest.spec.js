/* ==== Test Created with Cypress Studio ==== */
it('文本输入测试', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://coediting.clounix.com/');
  cy.get('.Login').click();
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
  cy.get(':nth-child(1)  > .el-form-item__content > .el-input > .el-input__inner').clear();
  cy.get(':nth-child(1)  > .el-form-item__content > .el-input > .el-input__inner').type('user-test-1');
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('12121');
  cy.get('.el-button').click();
  // 选中'new file3'文件
  cy.get('.role').select('test2')
  // 确认url中包含'Catalogue',并等待3秒
  cy.url().should('include','Catalogue').wait(3000)
  // 进行输入的操作
  cy.get('#luckysheet-rich-text-editor').type('{rightarrow}{rightarrow}',{force:true})
      .clear().type('一号测试',{force: true}).type('{enter}').type('{uparrow}')
      .dblclick({force: true}).get('#luckysheet-rich-text-editor').should('contain','一号测试')
      .type('{enter}').type('{enter}').clear().type('二号测试',{force: true}).type('{enter}')
  // 进行加粗/取消加粗的操作
  //get('.luckysheet-iconfont-jiacu').click().get('.el-message.el-message--success>p.el-message__content').should('contain', '更新数据成功')
  cy.get('#logoutBtn').should('be.visible').click()
  cy.get('.Login').click();
  cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
  cy.get(':nth-child(1)  > .el-form-item__content > .el-input > .el-input__inner').clear();
  cy.get(':nth-child(1)  > .el-form-item__content > .el-input > .el-input__inner').type('admin-test-1');
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
  cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('12121');
  cy.get('.el-button').click();
  // 选中'new file3'文件
  cy.get('.role').select('test2')
  // 确认url中包含'Catalogue',并等待3秒
  cy.url().should('include','Catalogue').wait(3000)

  cy.get('#logoutBtn').should('be.visible').click()
  /* ==== End Cypress Studio ==== */
});