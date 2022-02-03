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

- `Requisição info`

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
- `Requisição para adicionar uma nova tarefa`

```sh
    http://localhost:3000/addtask
```

- `Resposta`

```sh
    {
        "name": "Ler Arquitetura Limpa",
        "date": "5/02/2022",
        "status": false,
        "_id": "61fbdf292ce6364852d26a87",
        "__v": 0
    }
```

- `Requisição para exibir uma tarefa`

```sh
     http://localhost:3000/gettask/:id
```
- `Resposta`

```sh
       {
            "_id": "61fbdef92ce6364852d26a84",
            "name": "Fazer Rematrícula",
            "date": "15/02/2022",
            "status": false,
            "__v": 0
        }
```
- `Requisição para exibir todas as tarefas`

```sh
    http://localhost:3000/getalltask
```
- `Resposta`
    
```sh
    [
        {
            "_id": "61fbdef92ce6364852d26a84",
            "name": "Fazer Rematrícula",
            "date": "15/02/2022",
            "status": false,
            "__v": 0
        },
        {
            "_id": "61fbdf292ce6364852d26a87",
            "name": "Ler Arquitetura Limpa",
            "date": "5/02/2022",
            "status": false,
            "__v": 0
        }
    ]
```
- `Requisição para atualizar uma tarefa`

```sh
    http://localhost:3000/editask/:id
```


- `Resposta`
```sh
    {
        "_id": "61fbbd01bf586b65c166d58a",
        "name": "Fazer teste",
        "date": "15/02/2022",
        "status": false,
        "__v": 0
    }
```
- `Requisição para deletar uma tarefa`

```sh
    http://localhost:3000/deletetask/:id
```

- `Resposta`

```sh
    {
        "message": "Tarefa deletada com sucesso"
    }
```

- `Requisição para deletar todas as tarefas`

```sh
    http://localhost:3000/deletealltask
```
- `Resposta`

```sh
    {
        "message": "Tarefas deletadas com sucesso!"
    }
```
