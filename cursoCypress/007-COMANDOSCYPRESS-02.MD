# ⌨️ Comando `.clear()`

O comando `.clear()` é usado para **limpar o conteúdo de um campo de entrada (`input`) ou área de texto (`textarea`)**.  
Ele funciona como um atalho para o comando `.type('{selectall}{del}')`.

### ⚠️ **Atenção:** Não é seguro encadear comandos que dependem do valor anterior após o uso de `.clear()`.

### 🔧 Sintaxe
```javascript
.clear()
.clear(options)
```
### ✅ Uso Correto
```javascript
// Limpa um input de texto
cy.get('[type="text"]').clear()

// Preenche um textarea e depois limpa
cy.get('textarea').type('Olá!').clear()

// Limpa o campo atualmente em foco
cy.focused().clear()
```
### ❌ Uso Incorreto
```javascript
cy.clear() // Erro: não pode ser chamado diretamente de 'cy'

cy.get('nav').clear() // Erro: 'nav' não é um input ou textarea

cy.clock().clear() // Erro: 'clock' não retorna um elemento DOM
```
### 🛠️ Argumentos

Você pode passar um objeto de `options` para modificar o comportamento padrão do `.clear()`:

| Opção                     | Padrão                  | Descrição                                                                 |
|--------------------------|-------------------------|--------------------------------------------------------------------------|
| `animationDistanceThreshold` | `animationDistanceThreshold` | Distância (em pixels) para considerar o elemento como em animação       |
| `force`                  | `false`                 | Força a ação, ignorando verificações de ação possível (actionability)   |
| `log`                    | `true`                  | Exibe o comando no log de comandos do Cypress                           |
| `scrollBehavior`         | `scrollBehavior`        | Define como o elemento será rolado até a visualização antes do comando  |
| `timeout`                | `defaultCommandTimeout` | Tempo de espera até que o comando seja concluído                        |
| `waitForAnimations`      | `waitForAnimations`     | Espera as animações terminarem antes de executar o comando              |

### 🧪 Exemplo com options
```javascript
cy.get('input#email').clear({ force: true, timeout: 5000 })
```
Esse exemplo força a limpeza do campo, mesmo que ele esteja invisível ou desabilitado, e aguarda até 5 segundos para que a ação seja completada.

## [cy.clear() - Cypress Documentation](https://docs.cypress.io/api/commands/clear)

---
# ⌨️ `contains`

O comando `contains` no Cypress é utilizado para encontrar um elemento DOM que contenha um texto específico. Ele pode coincidir com mais do que o texto desejado se o elemento DOM contiver conteúdo adicional, e prefere certos elementos DOM em vez de outros.

## Sintaxe

```javascript
.contains(content)
.contains(content, options)
.contains(selector, content)
.contains(selector, content, options)

```
Ou:

```javascript
cy.contains(content)
cy.contains(content, options)
cy.contains(selector, content)
cy.contains(selector, content, options)
```
## ✅ Uso Correto
```javascript
cy.get('.nav').contains('About') // Encontra o elemento dentro de .nav contendo 'About'
cy.contains('Hello') // Encontra o primeiro elemento no documento contendo 'Hello'
```
## ❌ Uso Incorreto

```javascript
cy.title().contains('My App') // Erro: title não retorna um elemento DOM
cy.getCookies().contains('_key') // Erro: getCookies não retorna um elemento DOM
```
### ℹ️ Argumentos
 - content (String, Number, RegExp): O texto (ou padrão) para procurar dentro de um elemento DOM.

 - selector (String): Um seletor usado para filtrar os elementos DOM que contêm o texto. Isso substitui a preferência padrão do Cypress por elementos mais profundos, permitindo procurar por elementos mais rasos.

 - options (Object): Um objeto opcional para modificar o comportamento padrão do comando .contains().

## [cy.contains() - Cypress Documentation](https://docs.cypress.io/api/commands/contains)

---

# ⌨️`.select()`

## Descrição

O comando `.select()` é utilizado para **selecionar uma `<option>` dentro de um `<select>`** (menus suspensos).

⚠️ **Atenção**: Não é seguro encadear comandos após `.select()` que dependam do elemento `<select>`.

Sintaxe
```javascript
.select(valor)
.select([valores])
.select(valor, opções)
.select([valores], opções)
```
## Argumentos

| Argumento | Tipo           | Descrição                                                         |
|-----------|----------------|-------------------------------------------------------------------|
| `valor`   | String/Number  | Valor, índice ou texto da `<option>` a ser selecionada            |
| `valores` | Array          | Lista de valores, índices ou textos a serem selecionados          |
| `opções`  | Objeto         | Altera o comportamento padrão do `.select()`                      |

### Opções disponíveis

| Propriedade | Padrão               | Descrição                                                                 |
|-------------|----------------------|---------------------------------------------------------------------------|
| `force`     | `false`              | Força a seleção, mesmo que o elemento esteja invisível ou desabilitado    |
| `log`       | `true`               | Mostra o comando no log                                                   |
| `timeout`   | `defaultCommandTimeout` | Tempo de espera antes de gerar erro                                     |


## ✅ Uso Correto
```javascript
cy.get('select').select('user-1') // Seleciona a opção 'user-1'
```
## ❌ Uso Incorreto
```javascript
cy.select('John Adams') // ❌ Erro: cy.select não existe
cy.clock().select()     // ❌ Erro: clock não retorna um <select>
```
### Exemplos
#### Selecionar por texto
```javascript
<select>
  <option value="456">apples</option>
</select>
```
```javascript
cy.get('select').select('apples').should('have.value', '456')
```
#### Selecionar por valor
```javascript
cy.get('select').select('456').should('have.value', '456')
```
#### Selecionar por índice
```javascript
cy.get('select').select(0).should('have.value', '456')
```
### Seleção múltipla
```javascript
<select multiple>
  <option value="456">apples</option>
  <option value="457">oranges</option>
  <option value="458">bananas</option>
</select>
```
#### Por texto
```javascript
cy.get('select').select(['apples', 'bananas'])
  .invoke('val').should('deep.equal', ['456', '458'])
```
#### Por valor
```javascript
cy.get('select').select(['456', '457'])
  .invoke('val').should('deep.equal', ['456', '457'])
```
#### Por índice
```javascript
cy.get('select').select([0, 1])
  .invoke('val').should('deep.equal', ['456', '457'])
```

#### 💡 Passar um array limpa as seleções anteriores. Usar cy.select([]) limpa todas.

### Forçar seleção (force: true)
#### Exemplo com <select> oculto
```javascript
cy.get('select').select('banana', { force: true })
  .invoke('val').should('eq', 'banana')
```
#### Exemplo com <select> desabilitado
```javascript
cy.get('select').select('okra', { force: true })
  .invoke('val').should('eq', 'okra')
```
#### ⚠️ Não força seleção em <option> desabilitada ou dentro de <optgroup> desabilitado.

### Obter opção selecionada
```javascript
<select id="name">
  <option>Joe</option>
  <option>Mary</option>
  <option selected="selected">Peter</option>
</select>
```
```javascript
cy.get('select#name option:selected').should('have.text', 'Peter')
```
## [cy.select() - Cypress Documentation](https://docs.cypress.io/api/commands/select)

---

# ⌨️`.check()`

O comando `.check()` é utilizado para **marcar caixas de seleção (checkboxes)** ou **botões de opção (radios)** em testes automatizados com Cypress.

> ⚠️ **Atenção:** Não é seguro encadear comandos que dependam do elemento após `.check()`.

## ✅ Requisitos

O elemento **deve ser um `<input>` com `type="checkbox"` ou `type="radio"`**.

## 🧪 Sintaxe
```javascript
.check()
.check(value)
.check(values)
.check(options)
.check(value, options)
.check(values, options)
```
## ✅ Uso Correto
```javascript
cy.get('[type="checkbox"]').check() // Marca checkbox
cy.get('[type="radio"]').first().check() // Marca primeiro radio
```
## ❌ Uso Incorreto
```javascript
cy.check('[type="checkbox"]') // Erro: não pode usar 'cy.check'
cy.get('p:first').check() // Erro: elemento não é checkbox/radio
```

## 🔡 Argumentos

| Argumento | Tipo   | Descrição                                               |
|-----------|--------|---------------------------------------------------------|
| `value`   | String | Valor do checkbox ou radio a ser marcado                |
| `values`  | Array  | Lista de valores a serem marcados                       |
| `options` | Objeto | Altera o comportamento padrão do `.check()`             |

---

## 🔧 Opções do `options`

| Opção                      | Padrão                | Descrição                                                                 |
|---------------------------|-----------------------|--------------------------------------------------------------------------|
| `force`                   | `false`               | Força a marcação mesmo se invisível, desabilita verificação de visibilidade |
| `log`                     | `true`                | Mostra o comando no log                                                  |
| `timeout`                 | `defaultCommandTimeout` | Tempo máximo para o comando ser executado                             |
| `scrollBehavior`          | `scrollBehavior`      | Controle de rolagem antes da ação                                        |
| `animationDistanceThreshold` | `animationDistanceThreshold` | Distância para considerar animações                             |
| `waitForAnimations`       | `waitForAnimations`   | Espera finalização de animações antes da ação                            |


#### 🎯 O que retorna?
.check() retorna o mesmo elemento que foi passado.
#### ⚠️ Não é seguro encadear comandos que dependem do estado do elemento após .check().

#### 📌 Exemplos
✔️ Marcar todos os checkboxes
```javascript
cy.get('[type="checkbox"]').check()
```
✔️ Selecionar todos os radios
```javascript
cy.get('[type="radio"]').check()
```
✔️ Marcar elemento com ID específico
```javascript
cy.get('#saveUserName').check()
```
#### 💡 Usando value
Exemplo: marcar o radio com valor "US"
```javascript
<form>
  <input type="radio" value="CA" />
  <input type="radio" value="US" />
</form>
```
```javascript
cy.get('[type="radio"]').check('US')
```
#### 💡 Usando values
Exemplo: marcar múltiplos checkboxes
```javascript
<input type="checkbox" value="subscribe" />
<input type="checkbox" value="accept" />
```
```javascript
cy.get('input[type="checkbox"]').check(['subscribe', 'accept'])
```
#### 💡 Usando options
Exemplo: marcar checkbox invisível
```javascript
cy.get('.action-checkboxes')
  .should('not.be.visible')
  .check({ force: true })
  .should('be.checked')
```
#### 🔍 Encontrar opção marcada
```javascript
cy.get('#pick-fruit :checked')
  .should('be.checked')
  .and('have.value', 'apple')
```

## [cy.check() - Cypress Documentation](https://docs.cypress.io/api/commands/check)

---

# ⌨️`.each()`

O comando `.each()` é utilizado para **iterar sobre uma estrutura semelhante a um array**, como arrays ou objetos com a propriedade `length`.

### ⚠️ **Atenção:**  
Não é seguro encadear comandos que dependem diretamente do *subject* após `.each()`.

#### 📌 Sintaxe
```javascript
.each(callbackFn)
```
## ✅ Uso Correto
```javascript
cy.get('ul>li').each(() => {
  // itera sobre cada <li>
})


cy.getCookies().each(() => {
  // itera sobre cada cookie
})
```
## ❌ Uso Incorreto
```javascript
cy.each(() => {})           // Erro: não pode ser encadeado diretamente do cy
cy.clock().each(() => {})   // Erro: 'clock' não retorna um array
```
### 🧠 Argumentos
A função callbackFn recebe os seguintes parâmetros:

value: valor atual do item na iteração

index: posição no array

collection: a coleção completa sendo iterada

### 🎯 Retorno
.each() sempre retorna o mesmo subject original.

O valor retornado dentro do callback não altera o subject.

### 🧪 Exemplo com elementos DOM
```javascript
cy.get('ul>li').each(($el, index, $list) => {
  if ($el.text() === 'Clique aqui') {
    cy.wrap($el).click() // usa o elemento com comandos do Cypress
  }
})
```
### 🔄 Array original é preservado
Mesmo que você retorne algo diferente, o subject original é mantido:

```javascript
cy.get('li')
  .should('have.length', 3)
  .each(($li) => {
    return 'outro valor'
  })
  .then(($lis) => {
    expect($lis).to.have.length(3) // continua sendo o array original
  })
```
### ⏳ Suporte a Promises
O Cypress aguarda a Promise retornar antes de ir para o próximo item:

```javascript
cy.wrap([1, 2, 3]).each((num) => {
  return new Cypress.Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, num * 100)
  })
})
```

## [cy.each() - Cypress Documentation](https://docs.cypress.io/api/commands/each)

---

# ⌨️`cy.wrap()`

O comando `cy.wrap()` permite que você "envolva" um objeto (como um elemento DOM, objeto JavaScript ou *promise*) para que ele possa ser utilizado na cadeia de comandos do Cypress.

### 📌 Sintaxe
```javascript
cy.wrap(assunto)
cy.wrap(assunto, opções)
```

### 📥 Parâmetros

| Parâmetro | Tipo   | Descrição                                                                 |
|-----------|--------|---------------------------------------------------------------------------|
| assunto   | Object | Objeto que será envolvido (elemento, valor, função, ou *promise*).        |
| opções    | Object | (Opcional) Configurações adicionais, como tempo de espera e log.          |

---

### 🔧 Opções Comuns

| Opção    | Padrão               | Descrição                                                                 |
|----------|----------------------|---------------------------------------------------------------------------|
| log      | `true`               | Mostra o comando no log de comandos do Cypress.                           |
| timeout  | `defaultCommandTimeout` | Tempo de espera até que o `wrap` resolva antes de gerar erro por timeout. |

### 🔁 O que cy.wrap() retorna?
Ele retorna o mesmo objeto passado, permitindo que você continue usando comandos Cypress sobre ele.

### ✅ Exemplos
#### Envolver Objetos
```javascript
const getNome = () => 'Jane Lane'

cy.wrap({ nome: getNome })
  .invoke('nome')
  .should('eq', 'Jane Lane')
```
#### Envolver Elementos DOM
```javascript
cy.get('form').within(($form) => {
  cy.wrap($form).should('have.class', 'form-container')
})
```
#### Envolver Condicionalmente
```javascript
cy.get('button').then(($botao) => {
  if ($botao.is(':visible')) {
    cy.wrap($botao).click()
  }
})
```
#### Envolver Promises
```javascript
const minhaPromise = new Promise((resolve) => {
  setTimeout(() => resolve({ mensagem: 'Funcionou!' }), 2500)
})

cy.wrap(minhaPromise).its('mensagem').should('eq', 'Funcionou!')
```
#### Exemplo Real com Login Assíncrono
```javascript
import { userService } from '../../src/_services/user.service'

cy.wrap(userService.login('usuario', 'senha'))
  .should('have.keys', ['firstName', 'lastName', 'username', 'id', 'token'])

cy.visit('/')
cy.contains('Hi Test!').should('be.visible')
```
### ⚠️ Atenção: Assíncrono não é sincronizado automaticamente
Não use cy.wrap() diretamente em funções assíncronas que dependem da execução de outros comandos:

```javascript
cy.wrap(foo()) // Executa imediatamente

cy.get('input').type('valor')
// Isso ainda não terminou, mas...
cy.wrap(bar()) // ...bar() será executado prematuramente
```
#### ✅ Forma correta:

```javascript
cy.get('input').type('valor')
  .then(() => {
    cy.wrap(bar()) // Executa depois que os comandos anteriores terminarem
  })
```
#### 🧠 Dica
Use cy.wrap() para integrar valores externos (como funções ou dados da aplicação) ao fluxo de comandos do Cypress com segurança.


## [cy.wrap() - Cypress Documentation](https://docs.cypress.io/api/commands/wrap)

---

# ⌨️`.uncheck()`

O comando `.uncheck()` é utilizado para desmarcar checkbox(es) em testes automatizados com Cypress.

### ⚠️ **Atenção**: Não é seguro encadear comandos que dependem do elemento após `.uncheck()`.

### 🔧 Sintaxe
```javascript
.uncheck()
.uncheck(value)
.uncheck(values)
.uncheck(options)
.uncheck(value, options)
.uncheck(values, options)
```
### ✅ Uso Correto
```javascript
cy.get('[type="checkbox"]').uncheck() // Desmarca checkbox
```
### ❌ Uso Incorreto
```javascript
cy.uncheck('[type="checkbox"]') // Erro: não pode ser encadeado diretamente de 'cy'
cy.get('p:first').uncheck() // Erro: o elemento não é um checkbox
```
### 📥 Argumentos
value (String)
Valor de um checkbox a ser desmarcado.

values (Array)
Lista de valores de checkboxes a serem desmarcados.

options (Object)
Objeto para personalizar o comportamento do .uncheck().

| Opção                    | Padrão                    | Descrição                                                                 |
|--------------------------|---------------------------|---------------------------------------------------------------------------|
| `animationDistanceThreshold` | `animationDistanceThreshold` | Define distância para considerar animações.                              |
| `force`                  | `false`                   | Força a ação, ignorando verificações de acionabilidade.                  |
| `log`                    | `true`                    | Exibe a ação no log de comandos.                                         |
| `scrollBehavior`         | `scrollBehavior`          | Define o posicionamento do scroll antes da execução.                     |
| `timeout`                | `defaultCommandTimeout`   | Tempo limite para a execução do comando.                                 |
| `waitForAnimations`      | `waitForAnimations`       | Aguarda o fim de animações antes de executar.                            |

### 🔄 Retorno
.uncheck() retorna o mesmo elemento fornecido, mas não é seguro encadear comandos que dependam dele após essa chamada.

### 🧪 Exemplos
#### Desmarcar todos os checkboxes:
```javascript
cy.get(':checkbox').uncheck()
```
#### Desmarcar checkbox com ID específico:
```javascript
cy.get('#saveUserName').uncheck()
```
#### Desmarcar checkbox com valor específico:
```javascript
cy.get('input[type="checkbox"]').uncheck(['ga'])
```
#### Desmarcar múltiplos checkboxes por valor:
```javascript
cy.get('[type="checkbox"]').uncheck(['ga', 'ca'])
```
## [cy.uncheck() - Cypress Documentation](https://docs.cypress.io/api/commands/uncheck)

---

# ⌨️`.last()`

A função `.last()` no Cypress retorna o último elemento DOM de um conjunto de elementos DOM.

O comportamento de consulta deste comando é o mesmo que o método `.last()` no jQuery.
### Sintaxe
```javascript
.last()
.last(options)
```
## Uso
### ✅ Uso Correto
```javascript
cy.get('nav a').last() // Retorna o último link dentro de 'nav'
```
### ❌ Uso Incorreto
```javascript
cy.last() // Erro, não pode ser encadeado a partir de 'cy'
cy.getCookies().last() // Erro, 'getCookies' não retorna um elemento DOM
```
### Argumentos
options (Objeto): Permite alterar o comportamento padrão de .last().
| Opção    | Padrão                | Descrição                                           |
|----------|-----------------------|-----------------------------------------------------|
| `log`    | `true`                | Exibe o comando no log de comandos                  |
| `timeout`| `defaultCommandTimeout` | Tempo de espera para que o `.last()` resolva antes de expirar |
Retorno
O método .last() retorna o último elemento DOM encontrado.

O método .last() é uma consulta, o que significa que é seguro encadear outros comandos após ele.

### Exemplos
#### Sem Argumentos
Obter o último item de uma lista:

```javascript
<ul>
  <li class="one">Knick knack on my thumb</li>
  <li class="two">Knick knack on my shoe</li>
  <li class="three">Knick knack on my knee</li>
  <li class="four">Knick knack on my door</li>
</ul>
```
```javascript
// Retorna: <li class="four">Knick knack on my door</li>
cy.get('li').last()

## [cy.last() - Cypress Documentation](https://docs.cypress.io/api/commands/last)
```

---

