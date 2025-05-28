/* eslint-disable no-undef */
/// <reference types="cypress" />


describe('TodoMVC - React version',()=>{
    it('create new task',()=>{
        cy.visit('https://todomvc.com/');
        cy.get('paper-tab.x-scope').first().click();
        cy.get('a.applist-item').first().click();
        cy.get('a.demo-link').click();
        cy.get('input.new-todo').type('Caffe Machiatto per favore');
    });

});

