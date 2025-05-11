# ⌨️ Comando `cy.visit()`

O comando `cy.visit()` é utilizado para navegar até uma determinada URL no navegador controlado pelo Cypress.

### 📘 Descrição

`cy.visit()` carrega uma nova página no navegador, como se o usuário estivesse digitando a URL na barra de endereços. É normalmente o primeiro comando em um teste, usado para acessar a aplicação web que será testada.

### 🧠 Sintaxe

```javascript
cy.visit(url)
cy.visit(url, options)
```
- **url**: String com a URL completa ou relativa da página.

- **options** (opcional): Objeto com configurações adicionais, como `auth`, `headers`, `method`, `body`, etc.

### ✅ Exemplo básico

```javascript
cy.visit('https://example.cypress.io')
```
Exemplo com autenticação
```javascript
cy.visit('https://example.com/admin', {
  auth: {
    username: 'admin',
    password: 'senha123'
  }
})
```
Exemplo com method e body (útil para SPAs)
```javascript
cy.visit('https://minhaapp.com/dados', {
  method: 'POST',
  body: {
    token: 'abc123'
  }
})
```
## 🔍 Observações importantes
O Cypress restringe requisições para domínios diferentes do que está definido no baseUrl do arquivo cypress.config.js, a não ser que chromeWebSecurity esteja desabilitado.

É recomendável usar URLs relativas junto com a configuração de baseUrl.

## [cy.visit() - Cypress Documentation](https://docs.cypress.io/api/commands/visit)

---

# ⌨️ Comando  `cy.title()`

O comando `cy.title()` é utilizado para obter o título da página atual.

### 📘 Descrição

`cy.title()` retorna o título da página carregada no navegador controlado pelo Cypress. Este comando é útil quando você precisa verificar ou validar o título da página em seus testes.

### 🧠 Sintaxe

```javascript
cy.title()
```
Exemplo básico:
```javascript
cy.title().should('include', 'Cypress')
```
### ✅ Resumo rápido

| Comando    | Verifica se...                                         |
|------------|--------------------------------------------------------|
| `eq`       | O valor é exatamente igual ao esperado.               |
| `include`  | O valor contém o trecho esperado.                      |
| `have.text`| Um elemento tem exatamente aquele texto.               |
| `contain`  | Um elemento contém aquele texto.                       |

## 🔍 Observações
O comando cy.title() retorna uma promessa que resolve com o título da página atual.

Pode ser usado em conjunto com as asserções do Cypress, como should ou expect, para validar o título da página.

## [cy.title() - Cypress Documentation](https://docs.cypress.io/api/commands/title)

---

# ⌨️ Comando  `cy.should()`

O comando `cy.should()` é utilizado para adicionar asserções no Cypress, ou seja, ele permite verificar se um comportamento esperado ocorreu em um elemento ou no estado do teste.

### 📘 Descrição

O comando `cy.should()` é usado para fazer asserções sobre o valor ou o estado de um elemento. Ele pode ser encadeado após um comando de busca de elementos ou outros comandos que retornam uma promessa. As asserções verificam se o comportamento ou o valor é conforme o esperado.

### 🧠 Sintaxe

```javascript
cy.get(selector).should('assertion', valorEsperado)
```
### ✅ Exemplos de uso
#### Verificando a visibilidade de um elemento
```javascript
cy.get('button').should('be.visible')
```
Verifica se o botão está visível na página.

#### Verificando o texto exato de um elemento
```javascript
cy.get('h1').should('have.text', 'Bem-vindo ao site')
```
Verifica se o título h1 contém exatamente o texto "Bem-vindo ao site".

#### Verificando se o valor é igual ao esperado
```javascript
cy.get('input').should('have.value', 'Texto de exemplo')
```
Verifica se o valor do campo de entrada é igual a "Texto de exemplo".

#### Verificando se o título contém um trecho
```javascript
cy.title().should('include', 'Cypress')
```
Verifica se o título da página contém "Cypress".

## 🔍 Observações
O comando cy.should() pode ser encadeado com outros comandos, permitindo uma sequência de verificações.

As asserções no Cypress são feitas de maneira declarativa, o que significa que o Cypress irá tentar reexecutar o comando até que a condição seja atendida ou o tempo limite seja atingido.

### ✅ Resumo rápido

| Comando    | Verifica se...                                         |
|------------|--------------------------------------------------------|
| `eq`       | O valor é exatamente igual ao esperado.               |
| `include`  | O valor contém o trecho esperado.                      |
| `have.text`| Um elemento tem exatamente aquele texto.               |
| `contain`  | Um elemento contém aquele texto.                       |

| Asserção                 | Descrição                        | Recomendado?                     |
|--------------------------|----------------------------------|----------------------------------|
| `should('eq', ...)`      | Verifica igualdade exata         | ✅ Sim                           |
| `should('equal', ...)`   | Verifica igualdade exata         | ✅ Sim                           |
| `should('be.equal', ...)`| Igualdade com encadeamento       | ⚠️ Pode usar, mas é desnecessário |

## [cy.should() - Cypress Documentation](https://docs.cypress.io/api/commands/should)

---

# ⌨️ Comando `.type()`

O comando `.type()` é usado para **digitar texto em campos de formulário**, como inputs, textareas e outros elementos que aceitam entrada de texto.

### 📌 Sintaxe

```javascript
cy.get('seletor').type('texto a ser digitado')
```
### 🧩 Parâmetros

| Parâmetro         | Descrição                                                                 |
|-------------------|---------------------------------------------------------------------------|
| `texto`           | Texto a ser digitado. Pode incluir caracteres especiais e comandos (ex: `{enter}`, `{backspace}`, `{tab}` etc). |
| `options` (opcional) | Objeto para configurar opções como `delay` (tempo entre as teclas) ou `force` (força a digitação mesmo que o elemento esteja invisível). |

### Exemplo básico
```javascript
cy.get('#nome').type('Thiago')
```
Esse comando encontra o campo com o ID nome e digita "Thiago".

### Exemplo com delay (digitando devagar)
```javascript
cy.get('#mensagem').type('Mensagem com atraso', { delay: 100 })
```
Isso digita a mensagem simulando uma digitação humana (100 ms entre teclas).

### 🔄 Exemplo com comandos de teclado
```javascript
cy.get('#campo').type('Primeira Parte{backspace} Parte Final{enter}')
```
{backspace} remove o último caractere.

{enter} simula a tecla Enter.

### 📚 Comandos especiais suportados

- **text (String)**: Texto a ser digitado em um elemento do DOM.
  - Pode incluir **sequências especiais** como `{enter}`, `{backspace}`, etc.
  - Para desativar o uso dessas sequências, use a opção `parseSpecialCharSequences: false`.


## 🔣 Sequências Especiais (ações durante a digitação)

| Sequência         | Ação realizada                                  |
|-------------------|--------------------------------------------------|
| `{{}`             | Digita o caractere `{` literal                   |
| `{backspace}`     | Apaga o caractere à esquerda do cursor           |
| `{del}`           | Apaga o caractere à direita do cursor            |
| `{enter}`         | Pressiona Enter                                  |
| `{esc}`           | Pressiona Escape                                 |
| `{leftArrow}`     | Move cursor para a esquerda                      |
| `{rightArrow}`    | Move cursor para a direita                       |
| `{upArrow}`       | Move cursor para cima                            |
| `{downArrow}`     | Move cursor para baixo                           |
| `{home}`          | Move cursor para o início da linha               |
| `{end}`           | Move cursor para o final da linha                |
| `{moveToStart}`   | Move cursor para o início do elemento editável   |
| `{moveToEnd}`     | Move cursor para o fim do elemento editável      |
| `{selectAll}`     | Seleciona todo o texto                           |
| `{pageUp}`        | Rola a página para cima                          |
| `{pageDown}`      | Rola a página para baixo                         |
| `{insert}`        | Insere caractere à direita do cursor             |

## 🔧 Modificadores de Teclas

| Sequência   | Modificador ativado                 |
|-------------|-------------------------------------|
| `{alt}`     | `altKey` (alias: `{option}`)        |
| `{ctrl}`    | `ctrlKey` (alias: `{control}`)      |
| `{meta}`    | `metaKey` (alias: `{command}`, `{cmd}`) |
| `{shift}`   | `shiftKey`                          |

## ⚙️ Opções de Configuração

| Opção                        | Padrão                  | Descrição                                                                 |
|-----------------------------|--------------------------|---------------------------------------------------------------------------|
| `animationDistanceThreshold`| `animationDistanceThreshold` | Pixels para considerar animação em andamento                              |
| `delay`                     | `10` ms                  | Delay entre cada tecla digitada                                           |
| `force`                     | `false`                  | Força a digitação, ignorando verificações de visibilidade/actionabilidade |
| `log`                       | `true`                   | Exibe o comando no log do Cypress                                         |
| `parseSpecialCharSequences`| `true`                   | Interpreta as sequências entre `{}` como comandos especiais               |
| `release`                   | `true`                   | Mantém modificadores (ex: `ctrl`) ativados entre comandos                 |
| `scrollBehavior`            | `scrollBehavior`         | Controle de rolagem até o elemento antes de digitar                       |
| `timeout`                   | `defaultCommandTimeout`  | Tempo máximo para execução do `.type()`                                   |
| `waitForAnimations`         | `waitForAnimations`      | Espera a finalização de animações antes da digitação                      |

### 🔐 Simulando senha com .type()
```javascript
cy.get('#senha').type('senhaSecreta123', { log: false })
```
{ log: false } evita que a senha apareça nos logs do Cypress (útil para dados sensíveis).

### 🚫 Importante:
O Cypress não digita em campos disabled, a menos que use { force: true }.

O comando `.type()` é utilizado para inserir texto em um elemento do **DOM**.

Não é seguro encadear outros comandos que dependam do elemento após `.type()`.

## 🚫 Incorreto
```javascript
cy.type('Welcome') // Erro, não pode ser encadeado diretamente em 'cy'
cy.clock().type('www.cypress.io') // Erro, 'clock' não retorna elementos do DOM
```
## 🧩 Correto
```javascript
cy.get('input').type('Hello, World') // Digita 'Hello, World' no campo 'input'
```
### 🧪 Exemplo completo
```javascript
cy.get('#email')
  .type('teste@exemplo.com')
  .should('have.value', 'teste@exemplo.com')
```
Esse exemplo preenche o campo de e-mail e verifica se o valor foi digitado corretamente.

### `.type()` em Campos de Data, Mês, Semana e Hora

## 📅 Campos de Data (`<input type="date">`)
- **Formato exigido**: `yyyy-MM-dd` (ex: `1999-12-31`)
- Esse formato segue a [especificação W3C](https://html.spec.whatwg.org/) e é independente da localidade do navegador.
- **Atenção**: Não simula exatamente como um usuário digita, mas funciona como solução compatível entre navegadores.
- **Permitido**:
  - `{upArrow}` / `{downArrow}` para incrementar/decrementar o dia (respeitando o atributo `step`)
- **Não permitido**:
  - Caracteres especiais como `{leftArrow}`, `{selectAll}`, etc.

```javascript
cy.get('input[type="date"]').type('2025-05-11', { delay: 100 });
```

## 📆 Campos de Mês (`<input type="month">`)
- **Formato exigido**: `yyyy-MM` (ex: `1999-12`)
- Também é um workaround baseado na especificação W3C.
- **Permitido**:
  - `{upArrow}` / `{downArrow}` para incrementar/decrementar o mês (respeitando o atributo `step`)
- **Não permitido**:
  - Caracteres especiais `{leftArrow}`, `{selectAll}`, etc.

```javascript
cy.get('input[type="month"]').type('2025-05');
```
## 📅 Campos de Semana (`<input type="week">`)
- **Formato exigido**: `yyyy-Www` (ex: `1999-W23`)
  - `W` é um literal fixo; `ww` é o número da semana (01 a 53).
- Formato definido pela W3C, útil para compatibilidade entre navegadores.
- **Permitido**:
  - `{upArrow}` / `{downArrow}` para mudar a semana (com base no `step`)
- **Não permitido**:
  - Caracteres especiais `{leftArrow}`, `{selectAll}`, etc.

```javascript
cy.get('input[type="week"]').type('2025-W19');
```

## ⏰ Campos de Hora (`<input type="time">`)
- **Formatos válidos**:
  - `HH:mm` → Ex: `01:30` ou `23:15`
  - `HH:mm:ss` → Ex: `10:00:30`
  - `HH:mm:ss.SSS` → Ex: `12:00:00.384`
- **Intervalos válidos**:
  - `HH`: 00–23  
  - `mm`, `ss`: 00–59  
  - `SSS`: 000–999
- **Permitido**:
  - `{upArrow}` / `{downArrow}` para ajustar segundos, minutos ou horas (dependendo do `step`)
- **Não permitido**:
  - Caracteres especiais `{leftArrow}`, `{selectAll}`, etc.

#### ✅ Exemplo simples:
```javascript
cy.get('input[type="time"]').type('14:45');
```
#### ✅ Exemplo com segundos:
```javascript
cy.get('input[type="time"]').type('14:45:30');
```
#### ✅ Exemplo com milissegundos:
```javascript
cy.get('input[type="time"]').type('14:45:30.123');
```
### ✅Navegação com Teclas (limitado)
Você pode usar as teclas de seta para cima e para baixo para incrementar ou decrementar valores, desde que o campo esteja focado:

#### ✅ Exemplo com {upArrow} para aumentar o dia:
```javascript
cy.get('input[type="date"]')
  .focus()
  .type('{upArrow}');
```
#### 🚫 Não suportado
As seguintes teclas não funcionam corretamente com esses campos:
`{leftArrow}`, `{rightArrow}`, `{selectAll}`, `{moveToStart}`, `{moveToEnd}`, etc.

## 💡 Observação Importante
> O uso de `.type()` nesses tipos de inputs não simula a digitação do usuário de forma exata, mas garante que o valor seja aceito e interpretado corretamente segundo o padrão dos navegadores e da especificação HTML.

## [cy.type() - Cypress Documentation](https://docs.cypress.io/api/commands/type)

---

# ⌨️ Comando  `cy.get()`

## 📌 Descrição

Recupera um ou mais elementos do DOM usando um **seletor CSS** ou um **alias**.  
O comportamento é semelhante ao `$(...)` do jQuery.

## 🔧 Sintaxe

```js
cy.get(selector)
cy.get(alias)
cy.get(selector, options)
cy.get(alias, options)
```
## 🧩 Parâmetros

### selector (`String`)
Seletor CSS para buscar elementos DOM.

### alias (`String`)
Nome de um alias criado com `.as()`, referenciado com `@`.

### options (`Object`)
Modifica o comportamento padrão do `cy.get()`:

| Opção              | Padrão                    | Descrição                                                  |
|--------------------|---------------------------|------------------------------------------------------------|
| `log`              | `true`                    | Exibe o comando no log                                     |
| `timeout`          | `defaultCommandTimeout`   | Tempo máximo de espera antes de um timeout                 |
| `withinSubject`    | `null`                    | Define o escopo inicial da busca (padrão: documento completo) |
| `includeShadowDom` | `config includeShadowDom` | Permite a busca dentro do Shadow DOM                       |

### 📤 Retorno (Yields)
Retorna os elementos DOM encontrados ou os dados do alias.

Pode ser encadeado com outros comandos.

### ✅ Exemplos de Uso

Seletores comuns
```js
cy.get('input').should('be.disabled')
cy.get('ul li:first').should('have.class', 'active')
cy.get('.dropdown-menu').click()
cy.get('[data-test-id="test-example"]').should('have.length', 5)
cy.get('a[href*="questions"]').click()
cy.get('[id^=local-]')
cy.get('[id$=-remote]')
cy.get('[id^=local-][id$=-remote]')
cy.get('#id\\.\\.\\.1234') // Escapando caracteres especiais
```

### 📌 Uso com .within()
```js
cy.get('form').within(() => {
  cy.get('input').type('Pamela')
  cy.get('textarea').type('is a developer')
})
```
Dentro de .within(), cy.get() busca apenas no escopo definido.

### 🔍 Diferença entre cy.get() e .find()
cy.get() → busca a partir do documento inteiro

.find() → busca dentro do elemento atual

```js
cy.get('#comparison')
  .get('div')
  .should('have.class', 'test-title')
  .and('have.class', 'feature')

cy.get('#comparison')
  .find('div')
  .should('have.length', 1)
  .and('have.class', 'feature')
```
### 🏷️ Uso de Alias
Elementos DOM
```js
cy.get('ul#todos').as('todos')
// ...ações...
cy.get('@todos')
```
Exemplo com botão
```js
beforeEach(() => {
  cy.get('button[type=submit]').as('submitBtn')
})

it('disables on click', () => {
  cy.get('@submitBtn').should('be.disabled')
})
```
Alias com Fixture
```js
beforeEach(() => {
  cy.fixture('users.json').as('users')
})

it('usa os dados do usuário', () => {
  cy.get('@users').then((users) => {
    const user = users[0]
    cy.get('header').contains(user.name)
  })
})
```

## [cy.get() - Cypress Documentation](https://docs.cypress.io/api/commands/get)

---

# ⌨️ Comando `.as`

O comando `.as()` no Cypress permite atribuir um alias a um sujeito (elemento DOM, rota, fixture, etc.), que pode ser referenciado posteriormente utilizando o `@` dentro dos comandos `cy.get()` ou `cy.wait()`.

### Sintaxe

```javascript
.as(nomeDoAlias)
.as(nomeDoAlias, opções)
```
### Argumentos
nomeDoAlias (String): O nome do alias.

opções (Objeto): Objeto opcional para modificar o comportamento padrão do .as().

### Opção	Padrão	Descrição
type	query	O tipo de alias a ser armazenado. Valores válidos:

query: Reexecuta a consulta toda vez que o alias é solicitado.

static: Recupera o valor uma vez, quando o alias é criado, e não muda mais.

#### Nota: O type não tem efeito sobre interceptações, spies e stubs.

## 🧩 Uso Correto
```javascript
cy.get('.main-nav').find('li').first().as('firstNav')  // Alias de elemento como @firstNav
cy.get('input.username').invoke('val').as('username', { type: 'static' })  // Alias de valor no momento em que foi criado
cy.intercept('PUT', '/users').as('putUser')  // Alias de rota como @putUser
cy.stub(api, 'onUnauth').as('unauth')  // Alias de stub como @unauth
cy.spy(win, 'fetch').as('winFetch')  // Alias de spy como @winFetch
```
## 🚫 Uso Incorreto
```javascript
cy.as('foo') // Erro, não pode ser encadeado a partir de 'cy'
```
#### Retorno
O .as() retorna o mesmo sujeito que foi dado a ele, sendo seguro encadear outros comandos.

### Exemplos

#### Elemento DOM
```javascript
it('desabilita ao clicar', () => {
  cy.get('button[type=submit]').as('submitBtn')
  cy.get('@submitBtn').click().should('be.disabled')
})
```
#### Interceptação
```javascript
cy.intercept('PUT', '/users', { fixture: 'user' }).as('editUser')
cy.get('form').submit()
cy.wait('@editUser').its('url').should('contain', 'users')
Fixture
```
```javascript
beforeEach(() => {
  cy.fixture('users-admins.json').as('admins')
})

it('o fixture de usuários é vinculado a this.admins', function () {
  cy.log(`Existem ${this.admins.length} administradores.`)
})
```
### Pontos Importantes
#### Reset de Aliases: Todos os aliases são resetados antes de cada teste.

Palavras Reservadas: Não é permitido usar palavras reservadas (ex: test, runnable, timeout) como nomes de alias.

Comportamento Assíncrono: O .as() é assíncrono. Não é possível acessar de forma síncrona algo que foi aliasado, sendo necessário utilizar .then() ou outros comandos assíncronos para acessá-los.

#### Exemplo Assíncrono
```javascript
describe('Um fixture', () => {
  it('pode ser acessado via get()', () => {
    cy.fixture('admin-users.json').as('admins')
    cy.get('@admins').then((users) => {
      cy.log(`Existem ${users.length} administradores.`)
    })
  })

  it('pode ser acessado via then()', function () {
    cy.fixture('admin-users.json').as('admins')
    cy.visit('/').then(() => {
      cy.log(`Existem ${this.admins.length} administradores.`)
    })
  })
})
```
## [.as - Cypress Documentation](https://docs.cypress.io/api/commands/as)

---

# ⌨️ Comando `.click()`

O comando `.click()` é usado para **clicar em um elemento DOM**. Ele possui várias opções e formas de uso.

## 📌 Sintaxe

```javascript
.click()
.click(opções)
.click(posição)
.click(posição, opções)
.click(x, y)
.click(x, y, opções)
```

## ✅ Uso Correto
```javascript
cy.get('.btn').click()            // Clica em um botão
cy.focused().click()              // Clica no elemento com foco
cy.contains('Bem-vindo').click() // Clica no primeiro elemento que contém 'Bem-vindo'
```
## ❌ Uso Incorreto
```javascript
cy.click('.btn')         // Erro: não pode ser encadeado diretamente de 'cy'
cy.window().click()      // Erro: 'window' não retorna um elemento DOM
```
## 🎯 Argumentos

### `posição` (String)

Posição onde o clique deve ocorrer no elemento.  
**Padrão:** `center`  
**Posições válidas:**

- `topLeft`
- `top`
- `topRight`
- `left`
- `center`
- `right`
- `bottomLeft`
- `bottom`
- `bottomRight`

### `x` (Number)

Distância em pixels da **esquerda do elemento** para onde o clique será feito.

### `y` (Number)

Distância em pixels do **topo do elemento** para onde o clique será feito.

### `opções` (Objeto)

Objeto de configuração para modificar o comportamento padrão do `.click()`:

| Opção                       | Padrão                 | Descrição                                                   |
|----------------------------|------------------------|-------------------------------------------------------------|
| `altKey`                   | `false`                | Ativa a tecla Alt (Option no Mac)                           |
| `animationDistanceThreshold` | `animationDistanceThreshold` | Distância mínima para detectar animação              |
| `ctrlKey`                  | `false`                | Ativa a tecla Ctrl                                           |
| `log`                      | `true`                 | Exibe o comando no log                                       |
| `force`                    | `false`                | Força a ação, ignorando verificações de visibilidade         |
| `metaKey`                  | `false`                | Ativa a tecla Meta (Command no Mac)                         |
| `multiple`                 | `false`                | Clica em múltiplos elementos em sequência                    |
| `scrollBehavior`           | `scrollBehavior`       | Controla o comportamento de rolagem antes do clique         |
| `shiftKey`                 | `false`                | Ativa a tecla Shift                                          |
| `timeout`                  | `defaultCommandTimeout`| Tempo máximo de espera pelo clique                           |
| `waitForAnimations`        | `waitForAnimations`    | Espera as animações terminarem antes de executar o clique   |

### 🔄 Retorno (Yields)
.click() retorna o mesmo elemento sobre o qual foi executado.

### ⚠️ Não é seguro encadear comandos que dependem do elemento após .click().

### 🧪 Exemplos
#### 👉 Sem argumentos
```javascript
cy.get('.nav > a').click()
```
#### 👉 Com posição
```javascript
cy.get('img').click('topRight') // Clica no canto superior direito
```
#### 👉 Com coordenadas
```javascript
cy.get('#top-banner').click(15, 40) // Clica a 15px da esquerda e 40px do topo
```
#### 👉 Com opções
```javascript
cy.get('.close').click({ force: true }) // Força o clique mesmo se o elemento não estiver visível
```
#### 👉 Posição + Opções
```javascript
cy.get('#collapse-sidebar').click('bottomLeft', { force: true })
```
#### 👉 Coordenadas + Opções
```javascript
cy.get('#footer .next').click(5, 60, { force: true })
```
#### 👉 Clique múltiplo
```javascript
cy.get('[id^=btn]').click({ multiple: true })
```
#### 👉 Clique com combinação de teclas
```javascript
cy.get('li:first').click({
  shiftKey: true, // SHIFT + clique
})
```
### ℹ️ Observações
#### Ação (Actionability)
O elemento deve estar acionável para que o .click() funcione.

Segue todas as regras de ação do Cypress (visível, habilitado, etc).

#### 🎯 Foco

O foco é atribuído ao **primeiro elemento focável**.

> **Exemplo:** clicar em `<span>` dentro de `<button>` foca no botão — comportamento real do navegador.

#### 🚫 Cancelamento

Se o evento `mousedown` for cancelado com `e.preventDefault()`, o elemento **não receberá foco**.  
Esse é o comportamento padrão do navegador.

## [.click() - Cypress Documentation](https://docs.cypress.io/api/commands/click)

---






