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
 Docker é uma plataforma que facilita a criação e administração de serviços isolados. Um container é uum conjunto de um ou mais processos organizados isoladamente do sistema através de namespaces + chroot disposto em um servidor que divide um único host de controle, logo o Docker facilita a criação e administração de containers por meio de imagens (receitas de Bolo).  
 
## Docker-compose
 O Docker Compose é um orquestrador de containers, ou seja, com ele podemos organizar o comportamento de diversos containers através do arquivo docker-compose.yml.
 Dessa forma, para nossa aplicação node que depende do Mongodb, indicamos a dependencia no arquivo docker-compose e especificamos a rede(networking) para que tanto a aplicação node quanto o banco possam se comunicar. Assim, não precisamos fazer tudo manualmente com o docker-run, o que agiliza muito o desenvolvimento.

## Fastify
O Fastify é um framework web focado em performance com uma arquitetura de plugins, assim como no JavaScript tudo é um objeto no Fastify tudo é um plugin.

## Requisições e Respostas

| Endpoint                           | Método HTTP             | Descrição                |
| ---------------------------------- | :---------------------: | :-----------------------:|
| `/`                                | `GET`                   | `Info`                   |
| `/addtask`                         | `POST`                  | `Add nova tarefa`        |
| `/gettask/:id`                     | `GET`                   | `Exibe uma tarefa`       |
| `/getalltask`                      | `GET`                   | `Exibe todas as tarefas` |
| `/editask/:id`                     | `PUT`                   | `Atualiza tarefa`        |
| `/deletetask/:id`                  | `DELETE`                | `Deleta uma tarefa`      |
| `/deletealltask`                   | `DELETE`                | `Deleta todas as tarefas`|



Para testar você pode utilizar o Insomnia, Postman ou alguma plataforma semelhante

- `Requisição`

```sh
    Info
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
- `Requisição`

```sh
   Add nova tarefa
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

- `Requisição`

```sh
     Exibe uma tarefa
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
- `Requisição`

```sh
   Exibe todas as tarefas
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
- `Requisição`

```sh
    Atualiza tarefa
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
- `Requisição`

```sh
    Deleta uma tarefa
```

- `Resposta`

```sh
    {
        "message": "Tarefa deletada com sucesso"
    }
```

- `Requisição`

```sh
    Deleta todas as tarefas
```
- `Resposta`

```sh
    {
        "message": "Tarefas deletadas com sucesso!"
    }
```
