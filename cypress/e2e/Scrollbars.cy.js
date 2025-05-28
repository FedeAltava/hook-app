/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('https://practice.expandtesting.com/scrollbars');

    });

    it('should scroll the button into a visible area',()=>{
        cy.get('#hidingButton')
            .scrollIntoView()
            .should('be.visible')
            .click();
    });


});
