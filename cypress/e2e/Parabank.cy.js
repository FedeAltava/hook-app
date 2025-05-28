 /* eslint-disable no-undef */
/// <reference types="cypress" />


describe('parabank',()=>{

    it('visit the home page',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('.logo').should('be.visible');
        cy.get('.caption').should('have.text','Experience the difference');
    })
})