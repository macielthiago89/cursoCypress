## Estrutura de Testes no Cypress: `describe`, `it` e Funções Arrow

### 🧩 `describe()`

A função `describe()` é usada para agrupar um conjunto de testes relacionados. Ela ajuda a organizar os testes e tornar o relatório mais legível. O primeiro parâmetro é uma **descrição textual** do grupo de testes e o segundo é uma **função (normal ou arrow)** que contém os testes.

### 🧪 `it()`

A função `it()` representa um **caso de teste individual**. O primeiro parâmetro é uma descrição legível do que o teste verifica, e o segundo é uma função que executa o teste propriamente dito. Ele deve conter os comandos Cypress que interagem com a aplicação e fazem as asserções.

### ⚡ Funções Arrow (`=>`)

As funções arrow (ou funções de seta) são uma sintaxe mais concisa de funções em JavaScript. Elas não têm o próprio `this` e são muito usadas em testes por simplicidade e clareza.

---

## 🧾 Exemplo de código explicado

```javascript
describe('SUITE DE TESTE', () => {
  it('CASO DE TESTE', () => {
    cy.visit('http//:www.google.com.br')

    cy.title().should('eq', 'Google')
  })
})
```
### 📘 Explicação linha a linha:

#### `describe('SUITE DE TESTE', () => { ... })`  
Agrupa todos os testes que se referem à aplicação **"SUITE DE TESTE"**.  
Útil para organizar os testes por funcionalidade ou tela.

#### `it('CASO DE TESTE', () => { ... })`  
Define um **caso de teste** que tem como objetivo verificar se o **título da página** está correto.

#### `cy.visit('http//:www.google.com.br')`  
Manda o Cypress abrir o arquivo `google.html` localizado no caminho relativo fornecido.  
É como acessar a página manualmente no navegador.


