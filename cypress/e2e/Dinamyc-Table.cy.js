/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/dynamictable');

    });

    it('should  get value of CPU load Compare it with value in the yellow label',()=>{
        cy.contains('[role="row"]','Chrome')
            .within(()=>{
                cy.contains('%')
                    .invoke('text')
                        .then((text)=>{
                            cy.log(text)
                            cy.wrap(text.trim()).as('cpuFromTable');
                        })
            })
        
        cy.get('@cpuFromTable').then((cpuValue) => {
            cy.get('.bg-warning').should('contain', cpuValue);
        });

    })
});