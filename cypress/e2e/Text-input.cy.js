/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/textinput');

    });

    it('should change the button name based on input value',()=>{
        cy.get('#newButtonName').type('Ramonet');
        cy.get('#updatingButton').click();
    });
});