import { faker } from '@faker-js/faker';

describe('Central de Atendimento ao Cliente TAT', () => {

  let primeiroNome;
  let ultimoNome;
  let emailFaker;
  let feedbackFaker;
  let telefoneFaker;

  beforeEach(() => {
    cy.visit('./src/index.html')

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

    primeiroNome = faker.person.firstName();  // Nome
    ultimoNome = faker.person.lastName();     // Sobrenome
    emailFaker = faker.internet.email();      // Email
    feedbackFaker = faker.lorem.sentence();   // Feedback aleatório
    telefoneFaker = faker.number.int(9)

  })
  it('1- Verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  it('2- Preenche os campos obrigatórios e envia o formulário', () => {

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, emailFaker, feedbackFaker)

    cy.cadastroComSucesso()
  })
  it('3- Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, 'emailFaker', feedbackFaker)

    cy.cadastroSemsucesso()

    cy.get('#email')
      .should('be.visible')
      .focus().type('{selectall}{del}')
      .type(emailFaker);

    cy.cadastroComSucesso()

  })
  it('4- Verificar se o campo telefone não aceita caracteres alfanumerico', () => {

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

    cy.get('#phone')
      .should('be.visible')
      .and('have.value', '')

    cy.get('#phone')
      .should('be.visible')
      .type('Teste##')
      .should('have.value', '')

    cy.get('#phone')
      .should('be.visible')
      .type(telefoneFaker)
      .should('be.visible', 'have.value', telefoneFaker)

  })
  it('5- Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, emailFaker, feedbackFaker)

    cy.get('[for="phone-checkbox"]')
      .should('be.visible')
      .click()

    cy.get('.phone-label-span')
      .should('be.visible', 'have.contain', 'obrigatório')

    cy.cadastroSemsucesso()

    cy.get('#phone')
      .should('be.visible')
      .type('988201873')
      .should('be.visible', 'have.value', telefoneFaker)

    cy.cadastroComSucesso()

  })
  it('6- Preenche e limpa os campos nome, sobrenome, email e telefone ', () => {

    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, emailFaker, feedbackFaker)

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

    cy.cadastroSemsucesso()

    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, emailFaker, feedbackFaker)

    cy.cadastroComSucesso()

  })
  it('7- exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.cadastroSemsucesso()

    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, emailFaker, feedbackFaker)

    cy.cadastroComSucesso()
  })
  it('8- Seleciona um produto (YouTube) por seu texto', () => {

    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, emailFaker, feedbackFaker)

    cy.get('#product').select('YouTube').should('have.value', 'youtube')

    cy.cadastroComSucesso()

  })
  it('9- Seleciona um produto (Mentoria) por seu valor (value)', () => {

    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, emailFaker, feedbackFaker)

    cy.get('#product').select('mentoria').should('have.value', 'mentoria')

    cy.cadastroComSucesso()

  })
  it('10- Seleciona um produto (Blog) por seu índice', () => {
    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, emailFaker, feedbackFaker)

    cy.get('#product').select(1).should('have.value', 'blog')

    cy.cadastroComSucesso()
  })
  it('11- Marca o tipo de atendimento "Feedback"', () => {
    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, emailFaker, feedbackFaker)

    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')

    cy.cadastroComSucesso()
  })
  it('12- Marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
      .each(tipoDeAtendimento => {
        cy.wrap(tipoDeAtendimento)
          .check()
          .should('be.checked')
      })

    cy.fillMandatoryFieldsAndSubmit(primeiroNome, ultimoNome, emailFaker, feedbackFaker)

    cy.cadastroComSucesso()
  })
})

