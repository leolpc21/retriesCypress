/// <reference types="cypress" />
beforeEach(function () {
  this.variable = { 1: 'test 1' }

  cy.log(this.variable)
});

describe('Cypress retries validation', function () {
  beforeEach(function () {
    cy.log(this.variable)

    this.variable = { ...this.variable, 2: 'test 2' }
  });

  it('validation', function () {
    cy.log(this.variable)

    cy.get('empty').click();
  });
});