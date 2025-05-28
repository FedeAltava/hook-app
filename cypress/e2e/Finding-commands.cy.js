/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    });

    afterEach('Print test is finised',()=>{
        cy.log('Test is finised');
    })

    it('Finding elements',()=>{
        cy.get('#headerPanel').find('.leftmenu').get('li').contains('Solutions').click();
        cy.get('#headerPanel').find('.leftmenu').get('li').contains('About Us').click();
    });

});