import LandingPage from '../pages/landingPage'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import SettingsPage from '../pages/settingsPage'

describe('Page object model test',()=>{
    const landingPage = new LandingPage()
    const loginPage = new LoginPage()
    const homePage= new HomePage()
    const settingsPage= new SettingsPage()

    beforeEach(function(){
        cy.fixture('Conduit_Testdata').as('data')
    })

    it('Conduit - Valid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        landingPage.clickSigninButton()
        loginPage.enterEmail(this.data.validEmailid)
        loginPage.enterPassword(this.data.ValidPassword)
        loginPage.ClickSignin()
        homePage.checkYourFeedIsVisible()
        homePage.clickSettingsButton()
        settingsPage.clickLogoutButton()
    
    })
})