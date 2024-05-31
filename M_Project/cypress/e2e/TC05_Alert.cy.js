/// <reference types= "Cypress"/>
describe('Advanced UI Elements',function(){

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Simple alert',function(){
       cy.contains('Click for JS Alert').click()
      //cy.on is even lister it will listen to the tom and check if its doing whatever we are asking it todo
       cy.on('window:alert',(str)=>{
        expect(str).to.equal('I am a JS Alert')
       })
       cy.get('#result').should('contain','You successfully clicked an alert')
        
    })

    it('Confirmation alert - Ok button',function(){
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str)=>{
          expect(str).to.equal('I am a JS Confirm')
         })
        cy.get('#result').should('contain','You clicked: Ok')
    })

    it('Confirmation alert - Cancel button',function(){
      cy.contains('Click for JS Confirm').click()
      cy.on('window:confirm',(str)=>{
        expect(str).to.equal('I am a JS Confirm')
        return false
       })
      cy.get('#result').should('contain','You clicked: Cancel')
        
    })

    it('Prompt Alert',function(){
      cy.window().then(function(win){
        cy.stub(win,'prompt').returns('Hello Test')
        cy.contains('Click for JS Prompt').click()
      })
      cy.get('#result').should('contain','You entered: Hello Test')
       
    })
})