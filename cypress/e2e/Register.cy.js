/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('visit website',()=>{
    beforeEach('visit base web site',()=>{
        cy.visit('https://practice.expandtesting.com/register');

    });

    it('should register with valid credentials',()=>{
        cy.get('#username').type('elpaco');
        cy.get('#password').type('ramones1234');
        cy.get('#confirmPassword').type('ramones1234');
        cy.get('[data-testid="register"] > .btn').click();
        cy.get('#flash > b').should('contain', 'Successfully registered, you can log in now.');
    });

    it('should throw an error message if try registration with Missing Username',()=>{
        cy.get('#password').type('ramones1234');
        cy.get('#confirmPassword').type('ramones1234');
        cy.get('[data-testid="register"] > .btn').click();
        cy.get('#flash > b').should('contain', 'All fields are required.');
    });

    it('should throw an error message if try registration with Missing Password',()=>{
        cy.get('#username').type('ramonr');
        cy.get('#confirmPassword').type('ramones1234');
        cy.get('[data-testid="register"] > .btn').click();
        cy.get('#flash > b').should('contain', 'All fields are required.');
    });

    it('should throw an error with non-matching passwords',()=>{
        cy.get('#username').type('ramontyp');
        cy.get('#password').type('ramones1234');
        cy.get('#confirmPassword').type('ramones134');
        cy.get('[data-testid="register"] > .btn').click();
        cy.get('#flash > b').should('contain', 'Passwords do not match.');
    });

});
