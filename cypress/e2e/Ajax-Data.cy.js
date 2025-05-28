/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/ajax');

    });

    it('should wait 15 secs in order to a label appear then click on that label',()=>{

        cy.get('#ajaxButton').click();
        cy.wait(15000);
        cy.get('.bg-success').should('contain', 'Data loaded with AJAX get request.').click();

    })
});