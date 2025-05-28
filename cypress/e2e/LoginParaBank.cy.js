/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("parabank", () => {
  beforeEach("visit base web site", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("Login test", () => {
    cy.get(':nth-child(2) > .input').type('Cypress');
    cy.get(':nth-child(4) > .input').type('Cypress');
    cy.get(':nth-child(5) > .button').click()
  });
});
