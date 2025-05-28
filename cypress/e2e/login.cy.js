
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('https://practice.expandtesting.com/login');

    });

    it('should show an error when the username is incorrect',()=>{
        cy.get('#username').type('invalide{enter}');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('#flash > b').should('contain', 'Your username is invalid!');
        cy.url().should('include', '/login');
    });

    it('should show an error when the password is incorrect',()=>{
        cy.get('#username').type('practice');
        cy.get('#password').type('invalide{enter}');
        cy.get('#flash > b').should('contain', 'Your password is invalid!');
        cy.url().should('include', '/login');

    });

    it('should log in successfully with valid credentials',()=>{
        cy.get('#username').type('practice');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('#login > .btn').click();
        cy.get('#flash > b').should('contain', 'You logged into a secure area!');
        cy.url().should('include', '/secure');

    });

    it('should log in and log out successfully and show a confirmation message',()=>{
        cy.get('#username').type('practice');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('#login > .btn').click();
        cy.get('#flash > b').should('contain', 'You logged into a secure area!');
        cy.get('.icon-2x').click()
        cy.get('#flash > b').should('contain', 'You logged out of the secure area!');
        cy.url().should('include', '/login');

    });

});

