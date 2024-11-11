# Nome do meu projeto

Rápida descrição do objetivo de fazer esse projeto

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **API NOsql**
| :label: Tecnologias | node.js, express, mongodb (tecnologias utilizadas)
| :rocket: URL         | https://url-deploy.com.br
| :fire: Desafio     | https://url-do-desafio.com.br

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://via.placeholder.com/1200x500.png?text=imagem+lindona+do+meu+projeto#vitrinedev)

## Detalhes do projeto

## Descrição do Projeto

Este projeto é uma API desenvolvida com Node.js e MongoDB, que permite a criação, leitura, atualização e exclusão (CRUD) de registros de usuários e produtos. A API também oferece funcionalidades de pesquisa e relacionamento entre produtos e usuários registrados.

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

   Atualize o arquivo `.env` com as informações corretas, como a URI do MongoDB:

   ```
   MONGO_URI=mongodb://localhost:27017/api-nosql
   PORT=3000
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

   Agora a API estará disponível em: `http://localhost:<PORT>`. O valor padrão da `PORT` é `3000`, se não houver sido modificado.

   Exemplo para acessar a rota de produtos:

   ```
   GET http://localhost:3000/products
   ```

### MongoDB

Certifique-se de que o MongoDB está rodando localmente ou configure o arquivo `.env` com a URI correta para um servidor remoto, como o MongoDB Atlas.


### Exemplos de Requisições

1. Criar um Usuário

Endpoint: POST /api-nosql/api/v1/users

Corpo da Requisição:
```bash
{
  "name": "João Silva",
  "email": "joao@example.com"
}
```
Resposta:
```bash
{
  "_id": "some-mongo-id",
  "name": "João Silva",
  "email": "joao@example.com"
}
```
2. Criar um Produto

Endpoint: POST /api-nosql/api/v1/products

Corpo da Requisição:
```bash
{
  "name": "Produto X",
  "price": 150.00,
  "qtt_stock": 10,
  "category": "Eletrônicos",
  "registered_by": "user-id-here"
}
```
Resposta:
```bash
{
  "_id": "some-product-id",
  "name": "Produto X",
  "price": 150.00,
  "qtt_stock": 10,
  "category": "Eletrônicos",
  "registered_by": "user-id-here"
}
```
3. Buscar Produtos por Parâmetro

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

