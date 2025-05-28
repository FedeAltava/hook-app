/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("parabank", () => {
    beforeEach("visit base web site", () => {
      cy.visit("https://practice.expandtesting.com/dropdown");
    });
  
    it("Handle Dropdawn", () => {
      cy.get('#dropdown').select('2');
      cy.get('#country').select('ES');
    });
  });
  