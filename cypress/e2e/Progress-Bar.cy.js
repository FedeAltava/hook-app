/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/progressbar');

    });

    it('should click start and then click stop when linearprogress is 75%',()=>{
        cy.get('#startButton').click();
        function checkProgress() {
            cy.get('#progressBar')
              .invoke('attr', 'aria-valuenow')
              .then((value) => {
                const currentValue = parseInt(value);
                cy.log(`Progreso actual: ${currentValue}%`);
      
                if (currentValue >= 75) {
                  cy.get('#stopButton').click();
                  cy.log(`Parado en: ${currentValue}%`);

                } else {
                  cy.wait(50);
                  checkProgress();
                }
              });
          }
      
          checkProgress();
    })
});