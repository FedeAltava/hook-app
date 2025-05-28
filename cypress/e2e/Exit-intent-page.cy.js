/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('https://practice.expandtesting.com/exit-intent');

    });

    it('should opena modal when mouse leave view-port',()=>{
        cy.get('.flex-shrink-0').trigger('mousemove', { clientX: 100, clientY: 300 });
        cy.get('#exampleModalLabel').should('be.visible');
    });


});
