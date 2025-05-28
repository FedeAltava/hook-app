/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/classattr');

    });

    it('should register with valid credentials',()=>{
        cy.on('window:alert', (text) => {
            expect(text).to.eq('Primary button pressed');
          });
          
          cy.get('.btn-primary').click();
          
    });



});