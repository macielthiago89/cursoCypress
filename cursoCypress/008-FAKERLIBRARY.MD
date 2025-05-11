# Como Usar o Faker com Cypress

## 1. Instalar o Faker

Primeiro, instale o pacote **Faker** no seu projeto usando `npm`:

```bash
npm install @faker-js/faker --save-dev
```

## 2. Importar e Usar o Faker nos Testes Cypress
Depois de instalar o Faker, você pode usá-lo em seus testes com Cypress. Aqui está um exemplo básico de como gerar dados falsos e preenchê-los em um formulário:

```javascript
// cypress/integration/test_with_faker.js
import { faker } from '@faker-js/faker';

describe('Testando o Faker com Cypress', () => {
  it('Deve preencher o formulário com dados falsos', () => {
    cy.visit('http://example.com/formulario');

    // Gerar dados falsos com Faker
    const nomeFalso = faker.name.fullName();         // Nome completo
    const emailFalso = faker.internet.email();       // Email
    const telefoneFalso = faker.phone.number();      // Telefone

    // Preencher o formulário
    cy.get('input[name="nome"]').type(nomeFalso);
    cy.get('input[name="email"]').type(emailFalso);
    cy.get('input[name="telefone"]').type(telefoneFalso);

    // Enviar o formulário
    cy.get('form').submit();

    // Verificar o sucesso
    cy.contains('Obrigado').should('be.visible');
  });
});
```
## 3. Executar os Testes
Agora, execute os testes normalmente com o Cypress:

```javascript
npx cypress open
```

Isso abrirá a interface do Cypress, permitindo que você execute seus testes com dados falsos sempre renovados a cada execução.

### 💡 Dica:
O Faker pode gerar uma grande variedade de dados, como:

 - faker.address

 - faker.date

 - faker.company

 - faker.internet

 - faker.person

## 📚 Documentação Oficial do Faker

Para conhecer todos os métodos e funcionalidades disponíveis no Faker, acesse a documentação oficial:

🔗 [fakerjs.dev](https://fakerjs.dev)