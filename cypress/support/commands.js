// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (firstName, lastName, email, feedback) => {
    cy.get('#firstName')
        .should('be.visible')
        .type(firstName)

    cy.get('#lastName')
        .should('be.visible')
        .type(lastName)

    cy.get('#email')
        .should('be.visible')
        .type(email)

    cy.get('#open-text-area')
        .should('be.visible')
        .type(feedback)
})

Cypress.Commands.add('cadastroComSucesso', () => {
    cy.get('.button').should('have.text', 'Enviar').click()

    cy.get('.success')
        .should('be.visible')
        .and('contain.text', 'Mensagem enviada com sucesso.')
})

Cypress.Commands.add('cadastroSemsucesso', () => {
    cy.get('.button')
        .should('be.visible')
        .and('have.text', 'Enviar').click()

    cy.get('.error > strong')
        .should('be.visible')
        .and('have.text', 'Valide os campos obrigatórios!')
})