/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/click');

    });

    it('should change the button color',()=>{
        cy.wait(1000);
        cy.get('#badButton').click();
    });
});