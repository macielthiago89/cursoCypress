# 🔁 Cypress Hooks

O Cypress utiliza **hooks** herdados da biblioteca [Mocha](https://mochajs.org/). Eles são muito úteis para definir **ações que devem ser executadas antes ou depois de um conjunto de testes**, ou antes/depois de cada teste individual.

---

## 📌 O que são Hooks?

Hooks são funções especiais que permitem configurar o ambiente de teste e realizar tarefas como **configuração inicial, autenticação, limpeza de dados, entre outras**.

## 🧩 Tipos de Hooks

### 🔹 `before()`
Executado **uma única vez antes de todos os testes** do bloco.

```javascript
before(() => {
  // Executa uma vez antes de todos os testes
});
```
✅ Ideal para configurações globais, como autenticação ou criação de dados de teste.

### 🔹 `beforeEach()`
Executado antes de cada teste individual.

```javascript
beforeEach(() => {
  // Executa antes de cada teste
});
```
#### ✅ Por que usar beforeEach?
Evita repetição de código em cada it()

Facilita a manutenção dos testes

Garante um estado consistente para cada teste

Ajuda a manter os testes independentes uns dos outros

### 🔹 `afterEach()`
Executado após cada teste individual.

```javascript
afterEach(() => {
  // Executa após cada teste
});
```
✅ Usado para fazer limpeza entre os testes, se necessário.

🚫 Atenção: o uso de afterEach() para limpar dados pode ser um anti-padrão se isso for essencial para o sucesso dos testes seguintes. O ideal é que os testes sejam independentes entre si.

### 🔹 `after()`
Executado uma única vez após todos os testes do bloco.

```javascript
after(() => {
  // Executa uma vez depois de todos os testes
});
```
✅ Pode ser usado para finalizar ou remover dados de teste criados por before().

### 📦 Exemplo completo com todos os hooks

```javascript
describe('Hooks', () => {
  before(() => {
    // Executa uma vez antes de todos os testes no bloco
  });

  beforeEach(() => {
    // Executa antes de cada teste no bloco
  });

  it('Teste 1', () => {
    // Primeiro teste
  });

  it('Teste 2', () => {
    // Segundo teste
  });

  afterEach(() => {
    // Executa após cada teste no bloco
  });

  after(() => {
    // Executa uma vez após todos os testes no bloco
  });
});
```

### 📋 Ordem de execução dos hooks
Todos os before() são executados (uma vez)

- 1-  Para cada teste:

- 2-  Executa beforeEach()

- 3-  Executa o teste

- 4-  Executa afterEach()

Após todos os testes:

- 5-  Executa after()

### 🚨 Atenção ao uso de after() e afterEach()
- Evite usar after() ou afterEach() para "limpar estado essencial". Isso pode causar testes inconsistentes ou dependentes uns dos outros, o que quebra o princípio de testes isolados.

- Dica final: Prefira construir e destruir o estado necessário dentro de cada teste ou com beforeEach(), garantindo a independência total entre os testes.
