#  Schemaless API


| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Schemaless API**
| :label: Tecnologias | node.js, express, mongodb (tecnologias utilizadas)
| :rocket: URL         | https://url-deploy.com.br
| :fire: Desafio     | https://url-do-desafio.com.br

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://lh3.googleusercontent.com/pw/AP1GczNnh9ZXvjrgA9uXm0bfVfeP4OklvoM5VrQswMJC-pmmEmCQoX1GLyCqZL7ulsR9qHa-C-qvVc4qSbqvSJqTNpsUg6i_ZsNV9Uht4YCTJMzf4sf9wHAuZJkx6FrOw-rxUxHfirpi6QlE9Fxt7cQFE0uHlQ=w1093-h615-s-no-gm?authuser=1#vitrinedev)

## Descrição do Projeto
Este projeto consiste no desenvolvimento de uma API utilizando o banco de dados MongoDB, aproveitando o modelo NoSQL schema-less que ele oferece. A API foi projetada para proporcionar flexibilidade no armazenamento de dados, permitindo alterações na estrutura sem a necessidade de redefinir esquemas rígidos. Esse modelo é ideal para lidar com dados heterogêneos ou em constante evolução.  

A API será responsável por gerenciar operações CRUD (Create, Read, Update, Delete) de maneira eficiente, com foco na escalabilidade e na simplicidade na integração com outros sistemas. Além disso, boas práticas de segurança e desempenho serão implementadas para garantir a robustez do sistema.  

### Funcionalidades
- **Usuários**: Registro e gestão de usuários (nome, e-mail, etc.).
- **Produtos**: Registro e gestão de produtos (nome, preço, quantidade, categoria, etc.).
- **Busca**: Pesquisar produtos e usuários por parâmetros como nome, preço e categoria.
- **Relações**: Buscar produtos registrados por um usuário e obter informações do usuário associado a um produto.

---


## Pré-requisitos
- Node.js instalado (versão 14 ou superior recomendada).
- npm instalado (vem junto com o Node.js).
- MongoDB instalado (ou um serviço como o MongoDB Atlas).

### Passos para Rodar a API RESTful

1. **Clonar o repositório**

   O primeiro passo é clonar o repositório do projeto:

   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>
   ```

2. **Instalar as dependências**

   No diretório do projeto, instale todas as dependências necessárias:

   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente (se aplicável)**

   Se o projeto usa variáveis de ambiente (por exemplo, para o MongoDB URI), crie um arquivo `.env` com base no arquivo de exemplo `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Atualize o arquivo `.env` com as informações corretas, como a URI ou USUÁRIO do MongoDB:

   ```
   PORT=3000
   DB_USER="xxxxxx"
   DB_PASSWORD="**************"
   ```

4. **Rodar o servidor**

   Se o Nodemon estiver configurado como dependência de desenvolvimento, você pode iniciar o servidor com o seguinte comando:

   ```bash
   npm run dev
   ```

   Ou, se não estiver usando Nodemon:

   ```bash
   node server.js
   ```

5. **Acessar a API**

   Agora a API estará disponível em: `http://localhost:<PORT>/api-nosql/api/v1/`. O valor padrão da `PORT` é `3000`, se não houver sido modificado.

   Exemplo para acessar a rota de produtos:

   ```
   GET http://localhost:<PORT>/api-nosql/api/v1/products
   ```

### MongoDB

Certifique-se de que o MongoDB está rodando localmente ou configure o arquivo `.env` com a URI correta para um servidor remoto, como o MongoDB Atlas.

---

### Rotas da API

1 Usuários

 **1.1 Criar Usuário**

Endpoint: POST /api-nosql/api/v1/users

Corpo da Requisição:
```bash
{
   "name": "Leonardo Carvalho",
   "email": "leonardo.carvalho@example.com",
   "password": "password123",
   "created_in": "2024-11-19"
}
```
Resposta:
```bash
{
    "acknowledged": true,
    "insertedId": "673e26c73a4bf0cbadac0d57"
}
```


**1.2 Buscar usuários**

Endpoint: GET /api-nosql/api/v1/users

Resposta:
```bash
[
   {
      "_id": "673d508520cfb583bd2ddf1e",
      "name": "Alice Souza",
      "email": "alice.souza@example.com",
      "password": "password123",
      "created_in": "2024-11-19"
   },
   {
      ...
   }
]
```


**1.3 Buscar 1 usuário por ID**

Endpoint: GET /api-nosql/api/v1/users/:id

Resposta:
```bash
{
   "_id": "673d508520cfb583bd2ddf1e",
   "name": "Alice Souza",
   "email": "alice.souza@example.com",
   "password": "password123",
   "created_in": "2024-11-19"
}
```


**1.4 Buscar usuáris por Parâmetro**

Endpoint: GET /api-nosql/api/v1/users/search?name=Leonardo&?email=leonardo.carvalho@example.com

`nome: STRING` 
`email: STRING`

Resposta:
```bash
[
    {
      "_id": "673e26c73a4bf0cbadac0d57",
      "name": "Leonardo Carvalho Gama",
      "email": "leonardo.carvalho@example.com",
      "password": "password2345",
      "created_in": "2024-11-19"
    },
   {
      ...
   }
]
```


**1.5 Buscar todos os produtos cadastrados por um usuário x**

Endpoint: GET /api-nosql/api-nosql/api/v1/users/:id/products

Resposta:
```bash
[
   {
      "_id": "673d4aca6d8ee18436831067",
      "name": "Notebook",
      "desc": "notebook dell processor 8th ...",
      "price": 2400,
      "qtt_stock": 10,
      "category": [
          "Eletronic",
          "computer"
         ],
      "registered_by": {
         "user_id": "673d508520cfb583bd2ddf1e",
         "name": "Alice Souza"
         }
   },
   }
      ...
   }
]
```


**1.6 Atualizar um usuário**

Endpoint: PUT /api-nosql/api/v1/users/:id

Corpo da Requisição:
```bash
{
   "name": "Leonardo Carvalho Gama",
   "password": "password2345" 
}
```
Resposta:
```bash
{
   "message": "Document with ID: 673e26c73a4bf0cbadac0d57 successfully updated",
   "update": {
      "acknowledged": true,
      "modifiedCount": 1,
      "upsertedId": null,
      "upsertedCount": 0,
      "matchedCount": 1
    }
}
```


**1.7 Deletar um usuário**

Endpoint: DELETE /api-nosql/api/v1/users/:id

Resposta:
```bash
{
    "message": "Document with ID 673e26c73a4bf0cbadac0d57 Was deleted",
    "deleted": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```

---


2 Produtos

**2.1 Criar um Produto**

Endpoint: POST /api-nosql/api/v1/products

Corpo da Requisição:
```bash
{
  "name": "Produto X",
  "price": 150.00,
  "qtt_stock": 10,
  "category": "Eletrônicos",
  "registered_by": {
      user_id: "ObjectID",
      name: "Leonardo Carvalho"
   }
}
```
Resposta:
```bash
{
    "acknowledged": true,
    "insertedId": "673e342cca8c4c80623cf07e"
}
```

2.1. Buscar Produtos por Parâmetro

Endpoint: GET /api-nosql/api/v1/products/search?name=Produto&priceGte=100

Resposta:
```bash
[
  {
    "_id": "product-id",
    "name": "Produto X",
    "price": 150.00,
    "qtt_stock": 10,
    "category": "Eletrônicos",
    "registered_by": "user-id"
  }
]
```
4. Atualizar um Produto

Endpoint: PUT /api-nosql/api/v1/products/:id

Corpo da Requisição:
```bash
{
  "price": 120.00,
  "qtt_stock": 15
}
```
Resposta:
```bash
{
  "message": "Document with ID: some-product-id successfully updated",
  "update": {
    "matchedCount": 1
  }
}
```
5. Deletar um Produto

Endpoint: DELETE /api-nosql/api/v1/products/:id

Resposta:
```bash
{
  "message": "Document with ID some-product-id was deleted",
  "deleted": {
    "deletedCount": 1
  }
}
```

