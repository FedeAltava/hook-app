/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("visit website", () => {
  beforeEach("visit base web site", () => {
    cy.visit("http://uitestingplayground.com/animation");
  });

  it("should make sure that when Moving Target is clicked, it's class does not contain 'spin'", () => {
    cy.get("#animationButton").click();
    cy.get("#opstatus").should("contain", "Animating the button...");
    cy.wait(5000);
    cy.get("#movingTarget").click();
    cy.get("#opstatus")
      .invoke("text")
      .then((text) => {
        expect(text).to.not.contain("spin");
      });
  });
});
