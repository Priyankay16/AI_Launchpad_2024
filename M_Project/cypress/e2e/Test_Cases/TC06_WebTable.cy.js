/// <reference types= "Cypress"/>
describe('Advanced UI Elements',function(){

    //const row = 1
    //const col = 3

    it('Web Tables',function(){
        cy.visit('https://the-internet.herokuapp.com/tables')
        
        //1. To check value present anywhere in the table
        cy.get('#table1').contains('td','http://www.jdoe.com').should('be.visible')

        //2. To check value based on specific row and column
       cy.get('#table1 > tbody > tr:nth-child(1)> td:nth-child(3)').contains('td','jsmith@gmail.com').should('be.visible')

        //3.To check value based on a condition
        cy.get('#table1 > tbody > tr> td:nth-child(2)').each(($ele,index,$list)=>{
          const fname=$ele.text()
          if(fname.includes('Jason')){
            cy.get('#table1 > tbody > tr> td:nth-child(4)').eq(index).then(function(due){
                const dueamount = due.text()
                expect(dueamount).to.equal('$100.00')
            })
          }
        })
    })
})