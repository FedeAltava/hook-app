/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("visit website", () => {
    beforeEach("visit base web site", () => {
      cy.visit("http://uitestingplayground.com/sampleapp");
    });
  
    it("should test what happends with non-empty user name and valid passwords", () => {
        cy.get('input[name="UserName"]').type('Solomillo');
        cy.get('input[name="Password"]').type('pwd');
        cy.get('#login').click();
        cy.get('#loginstatus').should('be.visible');
    });
  });
  