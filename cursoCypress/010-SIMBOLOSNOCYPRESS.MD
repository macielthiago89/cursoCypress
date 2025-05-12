## ✅ 1. Ponto `.` → Classe

Usado para selecionar elementos pela **classe CSS**.

### **Exemplo de HTML:**
```html
<button class="btn btn-primary">Enviar</button>
```
### Exemplo no Cypress:

```javascript
cy.get('.btn')             // Seleciona qualquer elemento com a classe 'btn'
cy.get('.btn-primary')     // Seleciona qualquer elemento com a classe 'btn-primary'
cy.get('.btn.btn-primary') // Ambos ao mesmo tempo (elementos com as duas classes)
```

## ✅ 2. Cerquilha # → ID
Usado para selecionar elementos pelo ID.

### Exemplo de HTML:
```javascript
<input id="email" type="text">
```
### Exemplo no Cypress:

```javascript
cy.get('#email')  // Seleciona o elemento com o id "email"
```
## ✅ 3. Nome do elemento (sem símbolo)
Seleciona diretamente pelo nome da tag HTML.

### Exemplo de HTML:

```javascript
<h1>Título</h1>
```
### Exemplo no Cypress:

```javascript
cy.get('h1')  // Seleciona todos os elementos <h1>
```
## ✅ 4. Colchetes [] → Atributos personalizados
Permite buscar elementos com atributos específicos, como type, name, data-*, etc.

### Exemplo de HTML:

```javascript
<input type="password" name="senha" data-cy="campo-senha">
```
### Exemplo no Cypress:

```javascript
cy.get('[type="password"]')         // Seleciona input de senha
cy.get('[name="senha"]')            // Seleciona pelo atributo name
cy.get('[data-cy="campo-senha"]')   // Melhor prática no Cypress (data-* atributos personalizados)
```
## ✅ 5. Espaço → Descendente
Seleciona um elemento dentro de outro.

### Exemplo de HTML:

```javascript
<form id="login-form">
  <input type="text" name="usuario">
</form>
```
### Exemplo no Cypress:

```javascript
cy.get('#login-form input')  // Seleciona o input dentro do form com id "login-form"
```
## ✅ 6. > → Filho direto
Seleciona filhos diretos de um elemento pai.

### Exemplo de HTML:

```javascript
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```
### Exemplo no Cypress:

```javascript
cy.get('ul > li')  // Seleciona todos os <li> filhos diretos de <ul>
## ✅ 7. :nth-child() → Posição do filho
```
Seleciona um filho com base em sua posição.

### Exemplo de HTML:

```javascript
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
### Exemplo no Cypress:

```javascript
cy.get('ul li:nth-child(2)')  // Seleciona o segundo <li>
```
## ✅ 8. contains → Seleciona por texto visível
Seleciona um elemento que contém um texto específico.

### Exemplo de HTML:

```javascript
<button>Entrar</button>
```
### Exemplo no Cypress:

```javascript
cy.contains('Entrar')  // Seleciona o botão com o texto "Entrar"
```
## 🔍 Resumo rápido dos símbolos

| Símbolo    | Significado     | Exemplo           |
|------------|------------------|-------------------|
| `.`        | Classe           | `.btn-primary`    |
| `#`        | ID               | `#form-login`     |
| `[]`       | Atributo         | `[type="email"]`  |
| (espaço)   | Descendente      | `form input`      |
| `>`        | Filho direto     | `ul > li`         |
| `:`        | Pseudo-seletor   | `:nth-child(2)`   |
