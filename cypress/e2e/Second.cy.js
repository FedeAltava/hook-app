 /* eslint-disable no-undef */
/// <reference types="cypress" />


describe('mocks',()=>{

    beforeEach(() => {

        cy.intercept('POST', 'https://i.clarity.ms/collect', {
          statusCode: 204,
          body: {},
        }).as('clarity');
      });
      

      it('should navigate to assisted configuration from home', () => {
        // Visit the Coolmod homepage and accept all cookies
        cy.visit('https://www.coolmod.com/');
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
      
        // Open the sidebar menu
        cy.get('label[for="drawer-toggle"]').first().click();
      
        // Click on the second menu item inside the dynamic menu
        cy.get('div.cn_content_backdrop-adf93cbc-6fdd-46b7-9fe6-32ed75f57ade a', { timeout: 8000 }).eq(1).click();
      
        // Check if the logo is visible to confirm successful navigation
        cy.get('[data-test="image-logo"]').should('exist');
      
        // Click on the 'New Configuration' link
        cy.get('[href="/nueva-configuracion/"]').first().click({ force: true });
      
        // Ensure the menu icon (svg) is visible
        cy.get('svg.w-5.h-5').should('be.visible');
      
        // Click on the configuration menu icon
        cy.get('div.px-2.py-4.flex.gap-3.justify-between svg').click();
      
        // Open the dropdown menu
        cy.get('div.grow details.dropdown.w-full summary.btn').first().click();
      
        // Click on the second selectable option in the dialog
        cy.get('dialog div.basis-1\\/2.cursor-pointer.p-3.rounded-md.flex.flex-col.justify-between').eq(1).click();

        //Type something in a search input
        cy.get('input#seek').type('gaming');
        
        //Click and select an Item from left side menu
        cy.get('button[aria-label="Suggestion: rtx 5090"]').click();
        
        //Click on add-to-cart button and should add the first item.
        cy.get('button[data-role="add_to_cart"]').first().click({force:true});

        //Click on a close button to go to home page
        cy.get('button.dfd-close-button').click();

      });
      


});