

/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('http://uitestingplayground.com/dynamicid');

    });

    it('should inentificate the button avoiding the use of its ID',()=>{
        cy.get('button.btn.btn-primary').should('contain', 'Button with Dynamic ID').click();
    });


});
