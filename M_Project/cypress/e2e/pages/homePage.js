class HomePage{
  
    getYourFeed(){
        return 'Your Feed'
    }

    getGlobalFeed(){
        return 'Global Feed'
    }

    getHome(){
        return 'Home'
    }

    getNewPost(){
       return 'New Post'
    }

    getSettigns(){
        return 'Settings'
    }

   checkYourFeedIsVisible(){
    cy.contains(this.getYourFeed()).should('be.visible')
   }
   
   clickSettingsButton(){
    cy.contains(this.getSettigns()).click()
   }

}

export default HomePage