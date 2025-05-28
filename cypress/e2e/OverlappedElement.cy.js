/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("visit website", () => {
    beforeEach("visit base web site", () => {
      cy.visit("http://uitestingplayground.com/overlapped");
    });
  
    it("should scroll element before entering the text", () => {
        cy.get('#id').type('croquetas');
        cy.get('#name').scrollIntoView().type(' De la abuela');
        cy.get('#name').scrollIntoView().should('have.value', ' De la abuela');
    });
  });
  