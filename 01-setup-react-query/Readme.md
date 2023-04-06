# Title: 01-setup-react-query

Este documento descreve o status de um workshop em andamento sobre React Query. O workshop inclui apresentações sobre o que é o React Query, um projeto demo, configuração do React, chaves do React Query, uso do Typescript, opções padrão do React Query. 


## Tópicos abordados

React Query -  https://tanstack.com/query/latest

- [x]  Apresentação do que é o React Query
- [x]  Apresentação do Projeto Demo
- [x]  React setup
- [x]  React Query - Keys
- [x]  React Query - Typescript
- [x]  Options Default do React Query
    - [x]  refetchOnMount
    - [x]  refetchOnFocus
    - [x]  mostrar todas as options (Refetch Interval ….)
---


# Setup Chat Wars

Setup: 

```
yarn install
```

Run concurrently:

```
yarn dev
```

Run parallel:

```
yarn server
```

Run individually:

```
yarn dev:backend
yarn dev:client
```


## Server
| packages/backend

Backend create with Express and SQL Lite in Memory Database has a simple CRUD to manage the users and the messages.

### Rest API

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | /chat/messages | Get all messages |
| GET | /chat/messages/:id | Get a message by id |
| POST | /chat/messages | Create a new message |
| PUT | /chat/messages/:id | Update a message |
| DELETE | /chat/messages/:id | Delete a message |



## Client
| packages/client

Frontend create with React (Vite) and React Query to consume the Rest API and show the messages.

Simple chat with a list of messages and a form to create a new message (In Progress).



