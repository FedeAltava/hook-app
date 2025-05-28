/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/disabledinput');

    });

    it('should  get value of CPU load Compare it with value in the yellow label',()=>{
        cy.get('#enableButton').click();
        cy.get('#inputField') 
        .then(($ele)=>{
            if($ele.is(":enabled")){
                cy.get('#inputField').type('garbanzo')
            }
        })

    })
});