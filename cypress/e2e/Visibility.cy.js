/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("visit website", () => {
  beforeEach("visit base web site", () => {
    cy.visit("http://uitestingplayground.com/visibility");
  });

  it("should test if buttons are visible or not", () => {
    cy.get("table").within(() => {
      cy.get("button").as("allButtons");

      cy.get("@allButtons").each(($btn) => {
        cy.wrap($btn).should("be.visible");
      });

      cy.get("#hideButton").click();

      cy.get("@allButtons").each(($btn) => {
        const idList = $btn.attr("id");
        const isHideButton = idList && idList.includes("hideButton");
        const isOverlappedButton =
          idList && idList.includes("overlappedButton");
        const isOffscreenButton =
          idList && idList.includes("offscreenButton");

        if (isHideButton || isOverlappedButton || isOffscreenButton) {
          cy.wrap($btn).should("be.visible");
        } else {
          cy.wrap($btn).should("not.be.visible");
        }
      });
    });
  });
});
