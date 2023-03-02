# <h1 align="center">💾 Blogs-API 💾</h1>
<fig>
<img src="https://images.pexels.com/photos/7367/startup-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Uma imagem relacionada ao projeto">
</fig>

## Inicialização
Para executar o projeto, utilize as ferramentas descritas na sessão *Ferramentas*.

## Ferramentas
* Docker - Conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional.
* Docker Compose - Ferramenta usada para definir e executar aplicativos de vários contêineres do Docker
```bash

# Faça o clone
$ git clone git@github.com:sergioruza/Blogs-API.git

# Acesse a pasta
$ cd Blogs-API

# Instale as dependências local
$ npm install

# Suba os contêineres
$ docker-compose up -d --build

# Entre no terminal do container
$ docker exec -it blogs_api bash

# Instale as dependências no bash
$ npm install

# Popule crie o db e o popule
$ npm run prestart

# Inicie o projeto
$ npm run debug
# [nodemon] starting `node .`
# ouvindo porta 3000
```
# Blogs-API

## Introdução

Este projeto possui o objetivo principal de criar uma API de gerenciamento de um blog e,
com os objetivos gerais de firmar conhecimentos em nodeJS com Sequelize.

## Análise técnica

### Descrição do ambiente técnico

O sistema é composto de uma API com rotas. Linguagem, frameworks e bibliotecas principais:
> Back-End
* **F1** - JavaScript.
* **F2** - Node.
* **F3** - Sequelize.
* **F3** - MySQL.

### Requisitos Funcionais
Respeitando a proposta, o sistema deverá atender os seguintes requisitos:

* **RF1** - Desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

## Finais
<details>
 <summary><strong>:memo: Objetivos de Aprendizado</strong></summary><br /> 

- Utilizar Node.js;

- Utilizar a ORM Sequelize para manipular o MySQL;

- Realizar uma aplicação com CRUD;

</details>


