import User_Crud from "./user_crud";
import HomePage from '../home/homepage'
describe('user crud testing', () => {
    beforeEach(() => {
        cy.loginSuccess()
        const homepageInstance = new HomePage()
        const instance = new User_Crud()
        cy.wrap(instance).as('user_crud')
        homepageInstance.reservebuttonClick()
        instance.gotocurrentpagebuttonClick()
    })
    it('user crud testing', function () {
        this.user_crud.gotocurrentpagebuttonClick()
        this.user_crud.pagesizebuttonClick()
        this.user_crud.tabadmin_adminsClick()
        this.user_crud.tabadmin_deactivedClick()
        this.user_crud.tabadmin_activeClick()
        this.user_crud.searchinputType()
        this.user_crud.adduserbuttnClick()
        this.user_crud.adduserType()
        this.user_crud.curd_opearations_viewClick()
        this.user_crud.curd_opearations_editClick()
        this.user_crud.curd_opearations_delClick()
    })
})