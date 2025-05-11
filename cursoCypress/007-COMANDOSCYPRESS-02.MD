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

