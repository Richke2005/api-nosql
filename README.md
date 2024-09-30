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

   Agora a API estará disponível em: `http://localhost:<PORT>`. O valor padrão da `PORT` é `3001`, se não houver sido modificado.

   Exemplo para acessar a rota de itens:

   ```
   GET http://localhost:3000/api/items
   ```

### MongoDB

Certifique-se de que o MongoDB está rodando localmente ou configure o arquivo `.env` com a URI correta para um servidor remoto, como o MongoDB Atlas.
