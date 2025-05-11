# Capítulo 01 - Configurando o arquivo `cypress.config.js`

O arquivo `cypress.config.js` é utilizado para configurar diversos parâmetros e opções de execução do Cypress. Esse arquivo contém configurações importantes para personalizar o comportamento dos testes, como tamanho da tela, URL base, timeout, entre outros.

No exemplo fornecido, o conteúdo do arquivo `cypress.config.js` foi modificado para a seguinte configuração:

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
})
```
## O que foi alterado e o que cada configuração faz:

- **`const { defineConfig } = require('cypress')`:**

  Esse código importa a função `defineConfig` da biblioteca do Cypress. A função `defineConfig` ajuda a definir a configuração de forma mais estruturada e proporciona melhor suporte ao editor de código, como sugestões automáticas e validações.

- **`module.exports = defineConfig({ ... })`:**

  Aqui, a configuração do Cypress é exportada para o módulo, para que o Cypress consiga ler e aplicar as configurações quando os testes forem executados.

- **`viewportHeight: 880,` e `viewportWidth: 1280,`:**

  Essas configurações definem o tamanho da janela do navegador utilizado nos testes.

  - `viewportHeight` define a altura da janela (em pixels), enquanto `viewportWidth` define a largura da janela.

  - No caso, foi definido um tamanho de 1280px de largura por 880px de altura para simular a tela do navegador.

- **`e2e: {}`:**

  O bloco `e2e` é onde você pode definir configurações específicas para testes de ponta a ponta (end-to-end).

  Atualmente, está vazio, o que significa que não há configurações adicionais específicas para testes E2E nesse momento, mas você poderia adicionar opções como o diretório dos testes, a URL base, ou outros parâmetros relacionados aos testes end-to-end.

## Explicação do que foi feito:

O arquivo `cypress.config.js` foi configurado para:

- Utilizar um tamanho de janela específico durante a execução dos testes, o que ajuda a garantir que os testes sejam realizados em uma tela de dimensões específicas, garantindo maior consistência nos resultados, especialmente ao testar interfaces responsivas.
- Definir que a configuração do Cypress para testes E2E será vazia (não foi especificado nenhum valor adicional para o momento).

Essa configuração é um ponto de partida básico, e você pode adicionar mais configurações conforme necessário, dependendo das necessidades do seu projeto, como especificar um diretório de testes ou outras opções de execução.

### 🔍 Dimensões padrão do Cypress

Por padrão, o Cypress utiliza as seguintes dimensões de viewport durante a execução dos testes:

- `viewportWidth`: **1000px**
- `viewportHeight`: **660px**

Esses valores são aplicados automaticamente se nenhuma configuração personalizada for definida no arquivo `cypress.config.js`.

📚 Você pode consultar essa informação diretamente na documentação oficial do Cypress:

[🔗 Dimensões padrão do Cypress (viewport defaults)](https://docs.cypress.io/api/commands/viewport#Defaults)


# Capítulo 02 - Configurando o arquivo `package.json`

### 📦 Scripts no `package.json` com Cypress

O trecho abaixo faz parte do arquivo `package.json` e define scripts que podem ser executados no terminal usando **npm** ou **yarn**.

```json
"scripts": {
  "cy:open": "cypress open",
  "test": "cypress run"
}
```
### 📦 Explicação de cada script:
#### "cy:open": "cypress open"
Este script abre a interface gráfica do Cypress.

É útil para rodar testes manualmente, selecionar navegadores e acompanhar os testes em tempo real.

✅ Como executar no terminal:

```json
npm run cy:open
```
ou
```json
yarn cy:open
```
#### "test": "cypress run"

Este script executa todos os testes de forma automática no terminal (modo headless), ou seja, sem abrir a interface gráfica.

É ideal para integração contínua (CI/CD) ou quando você quer rodar todos os testes rapidamente.

✅ Como executar no terminal:

```json
npm test
```
ou
```json
yarn test
```
💡 Dica: Você pode adicionar outros scripts conforme necessidade, como por exemplo para rodar testes de uma pasta específica ou com parâmetros personalizados.

### ✅ Resumo dos Scripts

| Script    | Ação executada                          | Interface              |
|-----------|------------------------------------------|------------------------|
| `cy:open` | Abre o Cypress com interface GUI         | Gráfica                |
| `test`    | Roda todos os testes automaticamente     | Terminal (headless)    |

