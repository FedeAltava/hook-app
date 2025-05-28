/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/verifytext');

    });

    it('should finds an element with Welcome... text',()=>{
        cy.contains('.bg-primary', 'Welcome').should('be.visible');
    })
});