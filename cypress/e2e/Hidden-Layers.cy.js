/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/hiddenlayers');

    });

    it('should not press the same button two times',()=>{
        cy.get('#greenButton').click();
        cy.get('#greenButton').click();

    })
});