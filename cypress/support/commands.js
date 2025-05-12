Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (firstName, lastName, email, feedback) => {
    cy.get('#firstName')
        .should('be.visible')
        .type(firstName, { delay : 0})
        .should('have.value', firstName)

    cy.get('#lastName')
        .should('be.visible')
        .type(lastName, { delay : 0})
        .should('have.value', lastName)

    cy.get('#email')
        .should('be.visible')
        .type(email, { delay : 0})
        .should('have.value', email)

    cy.get('#open-text-area')
        .should('be.visible')
        .type(feedback, { delay : 0})
        .should('have.value', feedback)
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