# 🟡 Diferença entre `let` e `const` no Cypress

No Cypress (que usa **JavaScript/Node.js**), entender a diferença entre `let` e `const` é fundamental para escrever testes claros e organizados.

---

## ✅ `let`

- Permite **reatribuição** de valor.  
- Pode ser **declarada sem valor inicial**.  
- Possui **escopo de bloco** (entre `{}`).

### 📌 Exemplo:

```javascript
let mensagem;
mensagem = "Testando o botão de login";
cy.log(mensagem); // Saída: Testando o botão de login

mensagem = "Testando o botão de cadastro";
cy.log(mensagem); // Saída: Testando o botão de cadastro
```

### Uso comum em Cypress:
Quando o valor da variável pode mudar durante o teste.

```javascript
let resultado;

cy.get('#input').type('Cypress');
cy.get('#submit').click();
cy.get('#output').then(($output) => {
  resultado = $output.text();
  cy.log(resultado);
});
```
---

## 🔒 const
Não permite reatribuição do valor (imutável).

Deve ser inicializada na declaração.

Também tem escopo de bloco.

#### Exemplo com const:
```javascript
const url = "https://meusite.com/login";
cy.visit(url);

// Tentar mudar o valor resultará em erro:
// url = "https://meusite.com/cadastro"; // ❌ Erro!
```
### Uso comum em Cypress:
Quando você não precisa mudar o valor — ideal para seletores, URLs fixas, e textos esperados.

```javascript
const loginButton = '#btn-login';
cy.get(loginButton).click();
```
---

## 📌 Resumo rápido

| Característica   | `let`            | `const`              |
|------------------|------------------|-----------------------|
| Reatribuição     | ✅ Sim           | ❌ Não                |
| Inicialização    | Opcional         | Obrigatória           |
| Escopo           | Bloco (`{}`)     | Bloco (`{}`)          |
| Usar quando...   | Valor pode mudar | Valor é fixo/imutável |

### 🎯 Dica para Cypress
Use const para elementos e valores fixos:

```javascript
const BASE_URL = "https://exemplo.com";
const USERNAME = "usuario";
const PASSWORD = "senha123";

cy.visit(BASE_URL);
cy.get('#user').type(USERNAME);
cy.get('#pass').type(PASSWORD);
```
Use let para valores que são definidos durante a execução:

```javascript
let token;

cy.request('POST', '/api/login', { user: 'admin', pass: '1234' })
  .then((response) => {
    token = response.body.token;
    cy.log(token);
  });
```