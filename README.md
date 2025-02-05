# Cadastro Simples - Frontend e Backend

Este projeto consiste em um sistema simples de cadastro com frontend e backend. O objetivo é demonstrar a integração entre as duas camadas utilizando tecnologias modernas para o desenvolvimento web.

## 🚀 Tecnologias Utilizadas

### Frontend:
- HTML
- CSS
- JavaScript
- React (VITE)

### Backend:
- Node.js
- Express
- MongoDb

## 📌 Funcionalidades
- Cadastro de usuários
- Listagem de usuários cadastrados
- Edição de usuários / Só no backend
- Exclusão de usuários

## 📂 Estrutura do Projeto
```
📦 Cadastro-Simples-Frontend-e-Backend
├── 📂 backend
│   ├── server.js
│   ├── database.js
│   ├── routes.js
│   ├── controllers
│   └── models
├── 📂 frontend
│   ├── index.html
│   ├── styles.css
│   ├── script.js
└── README.md
```

## 🔧 Como Rodar o Projeto
### Backend:
1. Clone o repositório:
   ```bash
   git clone https://github.com/Jusenx/Cadastro-Simples-Frotend-e-Backend.git
   ```
2. Acesse a pasta do backend:
   ```bash
   cd Cadastro-Simples-Frotend-e-Backend/backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   node server.js
   ```
5. Troque as info do banco de dados para o seu mongodb

### Frontend:
1. Acesse a pasta do frontend:
   ```bash
   cd ../frontend
   npx vite
   ```  
2. Abra o arquivo `index.html` no navegador.

## 🔗 Rotas da API
- `GET /users` - Retorna a lista de usuários
- `POST /users` - Cria um novo usuário
- `PUT /users/:id` - Atualiza um usuário
- `DELETE /users/:id` - Exclui um usuário

## 📌 Melhorias Futuras
- Implementação de autenticação de usuário
- Melhorias na interface do frontend
- Validações mais robustas no backend
- 
---
📌 Desenvolvido por [Jusenx](https://github.com/Jusenx) 🚀

