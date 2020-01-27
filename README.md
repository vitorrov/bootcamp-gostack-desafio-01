# bootcamp-gostack-desafio-01

<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

## :rocket: Sobre o desafio

Nesse desafio, foi desenvolvida uma API para cadastro de projetos.

As rotas criadas foram:

- `POST /projects` para cadastrar projetos.

- `GET /projects` para listar todos projetos.

- `PUT /projects/:id` para alterar o título do projeto através do seu ID.

- `DELETE /projects/:id` para deletar o projeto através do seu ID.

- `POST /projects/:id/tasks` para adicionar uma tarefa em um projeto específico escolhido através do seu ID.

Também foi feito um middleware para checar se o projeto existia antes de tentar alterá-lo ou deletá-lo e outro para contabilizar as requisições feitas em todas as rotas.
