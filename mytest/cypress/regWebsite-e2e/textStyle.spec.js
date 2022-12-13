/* ==== Test Created with Cypress Studio ==== */
it('文本样式测试', function() {
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
    cy.get('.role').select('test')
    // 确认url中包含'Catalogue',并等待3秒
    cy.url().should('include','Catalogue').wait(2000)
    // 进行输入的操作
    cy.get('#luckysheet-rich-text-editor').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}',{force:true})
        .clear().type('文本样式测试',{force: true}).type('{enter}').type('{uparrow}')

    cy.get('#luckysheet-icon-font-family').should('be.visible').click().wait(1000)
        .get('#luckysheet-icon-font-family-menuButton > div:nth-child(8)').click()

    cy.get('#luckysheet-icon-font-size > div > div > div.luckysheet-inline-block.luckysheet-toolbar-combo-button-caption > input')
        .clear().type('9').type('{enter}').wait(1000)

    cy.get(' #luckysheet-icon-bold').should('be.visible').click().wait(1000)

    cy.get('#luckysheet-icon-italic').should('be.visible').click().wait(1000)

    cy.get('#luckysheet-icon-strikethrough').should('be.visible').click().wait(1000)

    cy.get('#luckysheet-icon-underline').should('be.visible').click().wait(1000)

    cy.get('#luckysheet-icon-text-color-menu').should('be.visible').click().wait(1000)
        .get('#luckysheet-icon-text-color-menu-menuButton > div:nth-child(2) > div > div > div.sp-palette-container > div.sp-palette.sp-thumb.sp-cf')
        .should('be.visible')
        .get('div:nth-child(2) > span:nth-child(7)').should('be.visible').click().wait(1000)

    cy.get('#logoutBtn').should('be.visible').click()
    cy.get('.Login').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
    cy.get(':nth-child(1)  > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(1)  > .el-form-item__content > .el-input > .el-input__inner').type('admin-test-1');
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('12121');
    cy.get('.el-button').click();
    cy.get('.role').select('test')
    // 确认url中包含'Catalogue',并等待3秒
    cy.url().should('include','Catalogue').wait(3000)

    cy.get('#luckysheet-rich-text-editor').type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}{enter}',{force:true})
        .should("contain",'文本样式测试').type("{enter}{uparrow}")

    cy.get('#luckysheet-rich-text-editor').type('{enter}',{force:true}).get('#luckysheet-input-box')
        .should('be.visible')
        .should('have.css', 'font-family','楷体')
        .should('have.css', 'font-size','12px')
        .should('have.css', 'color','rgb(153, 0, 255)')
        .should('have.css', 'font-style','italic')
        .should('have.css', 'font-weight','700')
        .should('have.css', 'text-decoration-line','line-through')
        // .should('have.css', 'text-decoration','underline')


    cy.get('#luckysheet-rich-text-editor').type("{enter}{uparrow}",{force:true})

    cy.get('#luckysheet-icon-font-family').should('be.visible').click().wait(1000)
        .get('#luckysheet-icon-font-family-menuButton > div:nth-child(1)').click()

    cy.get('#luckysheet-icon-font-size > div > div > div.luckysheet-inline-block.luckysheet-toolbar-combo-button-caption > input')
        .clear().type('10').type('{enter}').wait(1000)

    cy.get('#luckysheet-icon-bold').should('be.visible').click().wait(1000)

    cy.get('#luckysheet-icon-italic').should('be.visible').click().wait(1000)

    cy.get('#luckysheet-icon-strikethrough').should('be.visible').click().wait(1000)

    cy.get('#luckysheet-icon-underline').should('be.visible').click().wait(1000)

    cy.get('#luckysheet-icon-text-color-menu').should('be.visible').click().wait(1000)
        .get('#luckysheet-icon-text-color-menu-menuButton').should('be.visible')
        .get('#luckysheet-icon-text-color-menu-menuButton > div.luckysheet-cols-menuitem.luckysheet-mousedown-cancel.luckysheet-color-reset')
        .should('be.visible').click().wait(1000)

    cy.get('#logoutBtn').should('be.visible').click()
    /* ==== End Cypress Studio ==== */
});