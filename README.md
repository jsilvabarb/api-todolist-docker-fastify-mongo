# API-TODOLIST

Api para listar tarefas

## Requisitos - Dependências
- Docker 
- docker-compose
- mongoose versão 6.1.10 
- fastify versão 3.27.0
- fastify-plugin versão 3.0.1
- nodemon versão 2.0.15

## Docker

## Docker-compose

## Fastify

## Requisições e Respostas

Para testar você pode utilizar o Insomnia, Postman ou alguma plataforma semelhante

- `Requisição`

```sh
    http://localhost:3000/
```

- `Resposta`

```sh
    {
        "message": "API-TODOLIST",
        "add_task": "/addtask",
        "get_task": "/gettask/:id",
        "get_all_tasks": "/getalltask",
        "edit_task": "/editask/:id",
        "delete_task": "deletetask/:id",
        "delete_all_tasks": "/deletealltask"
    }
```

