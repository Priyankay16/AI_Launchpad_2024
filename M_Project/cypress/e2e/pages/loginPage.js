class LoginPage{
    getEmail(){
       return 'input[type="email"]'
    }

    getPassword(){
       return 'input[type="password"]'
    }

    getSigninButton(){
        return 'button[type="submit"]'
    }

    enterEmail(emailvalue){
        cy.get(this.getEmail()).type(emailvalue)
    }

    enterPassword(passwordvalue){
        cy.get(this.getPassword()).type(passwordvalue)
    }

    ClickSignin(){
        cy.get(this.getSigninButton()).click()
    }



}

export default LoginPage