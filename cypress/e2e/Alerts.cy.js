/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("visit website", () => {
  beforeEach("visit base web site", () => {
    cy.visit("http://uitestingplayground.com/alerts");
  });

  it("should deal with standard alert", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);
    cy.get("#alertButton")
      .click()
      .then(() => {
        expect(stub).to.be.calledWith(
          "Today is a working day.\nOr less likely a holiday."
        );
      });
  });

  it("should deal with standard confirmation", () => {
    const stub = cy.stub();
    cy.on("window:confirm", (msg) => {
      stub(msg);
      return true;
    });
    cy.get("#confirmButton")
      .click()
      .then(() => {
        expect(stub).to.be.calledWith("Today is Friday.\nDo you agree?");
      });
  });

  it("should deal with standard prompt", () => {
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("This is my answer.");
      cy.get("#promptButton").click();
    });
  });
});
