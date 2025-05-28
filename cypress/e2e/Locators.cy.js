/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    });

    it('List Locators test',()=>{
        //Locate by ID
        cy.get('#topPanel').should('be.visible');

        //Locate by class
        cy.get('.caption').should('have.text','Experience the difference');

        //Atribute Name
        cy.get('[name="username"]').should('be.visible');

        //Combining elements by atributes

        cy.get('input[name="password"]').should('be.visible');
    });

    it('Click by text',()=> {
        //Diferent ways to click by contains
        cy.contains('Admin Page').click();
        cy.get('a').contains('Admin Page').click();
    });

    it(' type example',()=>{
        
        //Type examples
        cy.get('input[name="username"]').type('PeneLoco');
        cy.get('input[name="password"]').type('123245');
    })

});