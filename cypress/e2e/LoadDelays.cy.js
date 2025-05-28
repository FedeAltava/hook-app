/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/');

    });

    it('should not press the same button two times',()=>{
        cy.get(':nth-child(1) > :nth-child(4) > h3 > a').click();
        cy.get('.btn').click();

    })
});