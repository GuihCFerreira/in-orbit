<img src="./web/public/icon.svg" width=100 />

# In-Orbit
O In-Orbit é um projeto que permite você gerenciar todas as suas metas da semana.

## Projeto

O in-orbit é um projeto Full-Stack desenvolvido durante o NLW Pocket de React + Node da RocketSeat. 

Para o design do Front-end, foi utilizado React, com Vite, TailwindCSS, RadixUI, possui integração com as libs do Zod e ReactHookForm.

Já para o Back-End, utilizamos Node com o framework do Fastify e o DrizzleORM que permite executar Queries mais complexas, os dados foram salvos em um banco de dados Postgres.

## Executar o projeto localmente

Para executar o código, é necessário ter instalado o NodeJs, Docker ou Postgres e o Git.

```bash
# Clone este repositório
$ git clone <https://github.com/GuihCFerreira/in-orbit.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd in-orbit
```

#### Executando o Back-End
```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

#### Executando o Front-End
```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm run dev

# O servidor inciará na porta:5173 - acesse <http://localhost:5173>
```

## Imagens do projeto 

<img src="assets/home.png">
<img src="assets/goals.png">
<img src="assets/new.png">

## Licença

Projeto desenvolvido por mim Guilherme durante a NLW Pocket da RockeSeat.