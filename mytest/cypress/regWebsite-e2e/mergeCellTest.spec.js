it('合并单元格测试', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://coediting.clounix.com/');
    cy.get('.Login').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
    cy.get(':nth-child(1)  > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(1)  > .el-form-item__content > .el-input > .el-input__inner').type('user-test-1');
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('12121');
    cy.get('.el-button').click();
    // 选中'test'文件
    cy.get('.role').select('test2')
    // 确认url中包含'Catalogue',并等待3秒
    cy.url().should('include','Catalogue').wait(3000)
    // 进行输入的操作
    cy.get('#luckysheet-rich-text-editor').type('{downarrow}{downarrow}',{force:true})
        .type('一号').type('{rightarrow}').type('二号').type('{enter}{uparrow}')
        .type('{shift}{leftarrow}{leftarrow}',{force:true}).wait(300)
    cy.get('#luckysheet-icon-merge-button').should('be.visible').click().wait(500)


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

    cy.get('#luckysheet-rich-text-editor').type('{downarrow}{downarrow}',{force:true})
        .type('{enter}').get('#luckysheet-rich-text-editor').should('contain','一号')


    cy.get('#luckysheet-icon-merge-menu').should('be.visible').click().wait(500)
    cy.get('#luckysheet-icon-merge-menu-menuButton > div:nth-child(4)').should('be.visible').click().wait(500)

    cy.get('#logoutBtn').should('be.visible').click()
    /* ==== End Cypress Studio ==== */
});