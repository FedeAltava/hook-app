/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("visit website", () => {
  beforeEach("visit base web site", () => {
    cy.visit("http://uitestingplayground.com/upload");
  });

  it("should attach a file via drag&drop.", () => {
    const fileName = "example.json";
    cy.get("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap)
      .find(".document-uploader")
      .attachFile(fileName, { subjectType: "drag-n-drop" });
  });

  it("should attach a file via browse button.", () => {
    const fileName = "example.json";
    cy.get("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap)
      .find('input[type="file"]#browse')
      .attachFile(fileName);
  });
});
