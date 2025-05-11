describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  it('1- Verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  it('2- Preenche os campos obrigatórios e envia o formulário', () => {

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

    cy.get('#firstName')
      .should('be.visible')
      .type('Thiago'),

      cy.get('#lastName')
        .should('be.visible')
        .type('Andrade')

    cy.get('#email')
      .should('be.visible')
      .type('thiago@teste.com')

    cy.get('#open-text-area')
      .should('be.visible')
      .type('Teste', { delay: 100 })

    cy.get('.button').should('have.text', 'Enviar').click()

    cy.get('.success').should('be.visible', 'contain.text', 'Mensagem enviada com sucesso.')
  })
  it('3- Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

    cy.get('#firstName')
      .should('be.visible')
      .type('Thiago')

    cy.get('#lastName')
      .should('be.visible')
      .type('Andrade')

    cy.get('#email')
      .should('be.visible')
      .type('emailcomerrodeformatacao')

    cy.get('#open-text-area')
      .should('be.visible')
      .type('Teste')

    cy.get('.button').should('be.visible', 'have.text', 'Enviar').click()

    cy.get('.error > strong').should('be.visible', 'have.text', 'Valide os campos obrigatórios!')

    cy.get('#email')
      .should('be.visible')
      .focus().type('{selectall}{del}')
      .type('thiago@teste.com');

    cy.get('.button').should('have.text', 'Enviar').click()

    cy.get('.success').should('be.visible', 'contain.text', 'Mensagem enviada com sucesso.')

  })
  it('4- Verificar se o campo telefone não aceita caracteres alfanumerico', () => {

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

    cy.get('#phone').should('be.visible', 'have.value', '')

    cy.get('#phone')
      .should('be.visible')
      .type('Teste##')
      .should('have.value', '')

    cy.get('#phone')
      .should('be.visible')
      .type('988201873')
      .should('be.visible', 'have.value', '988201873')

  })
  it('5- Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.get('#firstName')
      .should('be.visible')
      .type('Thiago')

    cy.get('#lastName')
      .should('be.visible')
      .type('Andrade')

    cy.get('#email')
      .should('be.visible')
      .focus().type('{selectall}{del}')
      .type('thiago@teste.com');

    cy.get('#open-text-area')
      .should('be.visible')
      .type('Teste')

    cy.get('[for="phone-checkbox"]')
      .should('be.visible')
      .click()

    cy.get('.phone-label-span')
      .should('be.visible', 'have.contain', 'obrigatório')

    cy.get('.button').should('have.text', 'Enviar').click()

    cy.get('.error > strong').should('be.visible', 'have.text', 'Valide os campos obrigatórios!')

    cy.get('#phone')
      .should('be.visible')
      .type('988201873')
      .should('be.visible', 'have.value', '988201873')

    cy.get('.button').should('have.text', 'Enviar').click()

    cy.get('.success').should('be.visible', 'contain.text', 'Mensagem enviada com sucesso.')

  })
  it('6- Preenche e limpa os campos nome, sobrenome, email e telefone ', () => {

    cy.get('#firstName')
      .should('be.visible')
      .type('Thiago'),

      cy.get('#lastName')
        .should('be.visible')
        .type('Andrade')

    cy.get('#email')
      .should('be.visible')
      .type('thiago@teste.com')

    cy.get('#open-text-area')
      .should('be.visible')
      .type('Teste')

    cy.get('#firstName')
      .should('be.visible')
      .clear().should('have.value', '')

    cy.get('#lastName')
      .should('be.visible')
      .clear().should('have.value', '')

    cy.get('#email')
      .should('be.visible')
      .clear().should('have.value', '')

    cy.get('#open-text-area')
      .should('be.visible')
      .clear().should('have.value', '')

    cy.get('.button').should('have.text', 'Enviar').click()

    cy.get('.error > strong').should('be.visible', 'have.text', 'Valide os campos obrigatórios!')

    cy.get('#firstName')
      .should('be.visible')
      .type('Thiago')

    cy.get('#lastName')
      .should('be.visible')
      .type('Andrade')

    cy.get('#email')
      .should('be.visible')
      .type('thiago@teste.com')

    cy.get('#open-text-area')
      .should('be.visible')
      .type('Teste')

    cy.get('.button').should('have.text', 'Enviar').click()

    cy.get('.success').should('be.visible', 'contain.text', 'Mensagem enviada com sucesso.')

  })
})
