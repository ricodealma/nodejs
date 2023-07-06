# 📚 Projeto de Estudos - README

## Introdução

Olá! Bem-vindo ao meu projeto de estudos com a Alura. Este é um projeto prático desenvolvido com o objetivo de aprimorar minhas habilidades e conhecimentos em programação. Aqui, irei destacar os principais pontos aprendidos durante o desenvolvimento.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte maneira:
```
├── config
│ └── dbConnect.js
├── controllers
│ ├── autoresController.js
│ ├── editorasController.js
│ └── livrosController.js
├── models
│ ├── Autor.js
│ ├── Editora.js
│ └── Livro.js
├── routes
│ ├── autoresRoutes.js
│ ├── editorasRoutes.js
│ └── livrosRoutes.js
└── index.js
```

### Arquivo `dbConnect.js`

Este arquivo contém a configuração de conexão com o banco de dados MongoDB. Utilizamos a biblioteca `db` para estabelecer a conexão e monitorar erros.

### Pasta `controllers`

A pasta `controllers` contém os arquivos que definem a lógica de controle para cada entidade do nosso projeto: autores, editoras e livros. Cada arquivo é responsável por manipular as requisições e interagir com os modelos correspondentes.

### Pasta `models`

A pasta `models` contém os arquivos que definem os modelos de dados para cada entidade do nosso projeto: autores, editoras e livros. Cada arquivo representa uma entidade e define a estrutura e os métodos relacionados a ela.

### Pasta `routes`

A pasta `routes` contém os arquivos de rotas para diferentes entidades do nosso projeto: autores, editoras e livros. Cada arquivo define as rotas específicas para cada entidade.

### Arquivo `index.js`

O arquivo `index.js` é o ponto de entrada da nossa aplicação. Aqui, importamos o módulo `express` e o utilizamos para criar a instância do nosso servidor. Também configuramos o uso do `express.json()` para tratar requisições JSON e importamos as rotas definidas na pasta `routes`.

## ℹ️ Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Faça o clone deste repositório.
3. Acesse a pasta raiz do projeto no seu terminal.
4. Execute o comando `npm install` para instalar as dependências.
5. Execute o comando `npm run dev` para iniciar a aplicação.

## 👏 O Que Aprendemos

Durante o desenvolvimento deste projeto de estudos, exploramos e aprendemos os seguintes pontos:

- Configuração de conexão com o banco de dados MongoDB.
- Utilização do framework Express.js para criar um servidor Node.js.
- Definição de rotas e seus respectivos controladores.
- Uso do middleware `express.json()` para tratar requisições JSON.
- Criação de modelos de dados para cada entidade do projeto.
- Implementação da lógica de controle nas camadas de controle (controllers).

## 🌟 Conclusão

Este projeto de estudos nos proporcionou uma ótima oportunidade de praticar nossas habilidades de programação e expandir nossos conhecimentos em *Node.js*, *Express.js* e *MongoDB*. A estrutura adicional do projeto, com as pastas controllers e models, nos permitiu organizar melhor o código e adotar uma abordagem mais modular.

Nos controllers, implementamos a lógica de controle das requisições, separando-a das rotas e tornando o código mais legível e fácil de dar manutenção. Já nos models, definimos a estrutura dos dados das entidades do projeto e os métodos relacionados a elas, facilitando as operações de CRUD (Create, Read, Update, Delete) no banco de dados.

Agora, podemos trabalhar de forma mais eficiente, com as responsabilidades de cada componente bem definidas e com um código mais organizado.

Caso tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato. Aproveite o código e bora estudar! 😄
