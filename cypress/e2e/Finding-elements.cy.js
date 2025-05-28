/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    });

    afterEach('Ptint test is finised',()=>{
        cy.log('Test is finised');
    })

    it('Finding elements',()=>{
        cy.get('li.Solutions').should('be.visible');
        cy.get('.home > a').click();
        cy.get('#rightPanel > :nth-child(4) > a').click();
        cy.get('.contact > a').click()
        cy.get('.title').should('have.text', 'Customer Care');
    });

    it('type on contact form', ()=>{
        cy.get('.contact > a').click();
        cy.get('#name').type('Pene Loco');
        cy.get('#email').type('PeneLoco@gmail.com');
        cy.get('#phone').type('656787984');
        cy.get('#message').type('Lorem fistrum qué dise usteer quietooor está la cosa muy malar a gramenawer a peich ese pedazo de condemor al ataquerl se calle ustée a peich.')
    })


});