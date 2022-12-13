import HomePage from './homepage.js'
describe('home testing', () => {
    beforeEach(() => {
        cy.loginSuccess()
        const HomeInstance = new HomePage()
        cy.wrap(HomeInstance).as('homepage')
    })
    it('home testing', function () {
        //等到进入home页面判断pathname再执行
        cy.location('pathname').should('eq', '/home').then(() => {
            this.homepage.searchinputType("LN")
            this.homepage.searchinput.type('{enter}')//模拟用户按下回车键
            this.homepage.searchDutClick()
            this.homepage.dutinputType("3m")
            this.homepage.dutinputsearchbuttonClick()
            this.homepage.refreshbuttonClick()//刷新
            this.homepage.reservebuttonClick()//设置
            this.homepage.refreshbuttonClick()
            this.homepage.holdbuttonClick()
            this.homepage.releasebuttonClick()
            this.homepage.usermousehover()
            this.homepage.userprofileClick()//点击用户profile
            this.homepage.usermousehover()
            this.homepage.userpreferencesClick()
            // this.homepage.usermousehover()
            // this.homepage.userswitchsiteHover()
            this.homepage.usermousehover()
            this.homepage.usersignoutClick()
        })
    })
})