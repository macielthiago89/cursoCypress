# 📌 Criando Commands no Cypress

No Cypress, **commands personalizados** (custom commands) são uma maneira de estender a funcionalidade da ferramenta, encapsulando **lógicas repetidas** em comandos reutilizáveis.

---

## 🔧 O que são Custom Commands?

Custom Commands são **funções** que você adiciona ao Cypress para **automatizar ações repetitivas** ou **melhorar a legibilidade dos testes**.

### 📁 Estrutura do Arquivo
O arquivo de comandos personalizados geralmente fica localizado em:

cypress/

└── support/

    └── commands.js

### ✍️ Como Criar um Custom Command
A sintaxe básica é:
```javascript
Cypress.Commands.add('nomeDoComando', (parametros) => {
  // lógica do comando
});
```
### ✅ Exemplo 1: Criar um comando para login
```javascript
// Dentro do arquivo cypress/support/commands.js
Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login');
  cy.get('input[name=email]').type(email);
  cy.get('input[name=password]').type(senha);
  cy.get('button[type=submit]').click();
});
```
Uso no teste:
```javascript
// Dentro do arquivo de teste
describe('Teste de Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.login('usuario@exemplo.com', 'senha123');
    cy.url().should('include', '/dashboard');
  });
});
```
### ✅ Exemplo 2: Comando sem parâmetros
```javascript
Cypress.Commands.add('aceitarCookies', () => {
  cy.get('#botao-cookies').click();
});
```
Uso:
```javascript
cy.aceitarCookies();
```
### ✅ Exemplo 3: Comando encadeado (uso do prevSubject)
Você pode criar comandos que funcionam encadeados a outros comandos do Cypress:

```javascript
Cypress.Commands.add('preencherEChecar', { prevSubject: 'element' }, (element, valor) => {
  cy.wrap(element).type(valor).should('have.value', valor);
});
```
Uso:
```javascript
cy.get('input[name=nome]').preencherEChecar('Thiago');
```

### 🧪 Boas Práticas
Use comandos para ações reutilizáveis (login, preencher formulários, configurar dados).

Nomeie os comandos de forma clara e objetiva.

Teste seus comandos individualmente antes de usá-los em massa.

### 📚 Dica de Estudo
Crie uma lista com comandos comuns no seu projeto (ex: cy.login, cy.logout, cy.cadastrarUsuario, cy.limparBanco). Isso melhora a produtividade e evita repetição de código.








