it('查找元素测试', function() {
    cy.visit('https://coediting.clounix.com/');
    cy.get('.Login').click();
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').click();
    cy.get(':nth-child(1)  > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(1)  > .el-form-item__content > .el-input > .el-input__inner').type('user-test-1');
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear();
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('12121');
    cy.get('.el-button').click();
    // 选中'test'文件
    cy.get('.role').select('test')
    // 确认url中包含'Catalogue',并等待3秒
    cy.url().should('include','Catalogue').wait(3000)
    // 进行输入的操作
    cy.get('#luckysheet-rich-text-editor').type('{ctrl+f}',{force:true})

    cy.get('#searchInput > input')
        .should('be.visible').wait(500).clear().type('元素').get('#searchAllBtn').should('be.visible')
        .click()
    cy.get('#searchAllbox > div.boxMain > div').should(($divs) => {
        expect($divs).to.have.length(6)
        expect($divs.eq(0)).to.contain('元素01')
        expect($divs.eq(1)).to.contain('元素02')
        expect($divs.eq(2)).to.contain('元素03')
        expect($divs.eq(3)).to.contain('元素11')
        expect($divs.eq(4)).to.contain('元素22')
        expect($divs.eq(5)).to.contain('元素99')
    })
    cy.get('#searchInput > input')
        .should('be.visible').wait(500).clear().type('元素0').get('#searchAllBtn').should('be.visible')
        .click()
    cy.get('#searchAllbox > div.boxMain > div').should(($divs) => {
        expect($divs).to.have.length(3)
        expect($divs.eq(0)).to.contain('元素01')
        expect($divs.eq(1)).to.contain('元素02')
        expect($divs.eq(2)).to.contain('元素03')
    })

    cy.get('#searchInput > input')
        .should('be.visible').wait(500).clear().type('元素99').get('#searchAllBtn').should('be.visible')
        .click()
    cy.get('#searchAllbox > div.boxMain > div').should(($divs) => {
        expect($divs).to.have.length(1)
        expect($divs.eq(0)).to.contain('元素99')
    })
});