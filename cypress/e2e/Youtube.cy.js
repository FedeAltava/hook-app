/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("", () => {
  it("should mock a user interaction", () => {
    cy.visit("https://www.gog.com/");

    //Click and accpet the coockies
    cy.get(
      "button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"
    ).click();

    //Click on Store button
    cy.get("a.menu-link.menu-uppercase.js-menu-link").click();

    //Scroll until certain element
    cy.get("product-tile").eq(9).scrollIntoView();

    // CLick in a specific element
    cy.get("product-tile").eq(11).click();

    //click in a age-gate button
    cy.get('body').then(($body) => {
        if ($body.find('button.button.button--big.age-gate__button').length > 0) {
          cy.get('button.button.button--big.age-gate__button').click();
        } else {
          cy.log('Botón no encontrado, se continúa sin hacer click');
        }
      });
      


  });
});
