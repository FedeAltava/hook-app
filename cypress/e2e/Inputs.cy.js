
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('https://practice.expandtesting.com/inputs');

    });

    it('Find inputs',()=>{
        cy.get('#input-number').should('be.visible').type(4);
        cy.get('#input-text').should('be.visible').type('PeneLoco!!!!');
        cy.get('#input-password').type('Peneloco23134');
        cy.get('#input-date').type('1992-05-08');
        cy.get('#btn-display-inputs').click()
    });


});