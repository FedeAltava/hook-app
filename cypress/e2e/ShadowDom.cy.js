/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("visit website", () => {
  beforeEach("visit base web site", () => {
    cy.visit("http://uitestingplayground.com/shadowdom");
  });

  it("should find elements in shadow dom", () => {
    cy.get("guid-generator")
      .should("be.visible")
      .shadow()
      .find(".button-generate")


    cy.get("guid-generator")
      .should("be.visible")
      .shadow()
      .find(".button-copy")

  });
});
