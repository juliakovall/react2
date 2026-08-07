# Lesson 61

## Description

This project demonstrates the use of middleware in an Express.js application. The server is organized using the MVC pattern and includes logging, authorization, validation, and access control middleware.

## Features

- Express.js server
- MVC project structure
- Logger middleware
- Authorization middleware
- User validation middleware
- Article access middleware
- REST API routes

## Technologies

- JavaScript (ES Modules)
- Node.js
- Express.js

## Project Structure

```
lesson61/
│
├── controllers/
│   ├── articleController.js
│   └── userController.js
│
├── middlewares/
│   ├── articleAccess.js
│   ├── auth.js
│   ├── logger.js
│   └── validate.js
│
├── routes/
│   ├── articleRoutes.js
│   └── userRoutes.js
│
├── app.js
├── package.json
└── README.md
```

## Installation

Install dependencies:

```bash
npm install
```

## Run

Start the server:

```bash
npm start
```

The server will run at:

```
http://localhost:3000
```

## Middleware

### logger

Logs every incoming request.

### auth

Checks for the `Authorization` header before accessing user routes.

### validate

Validates the request body for user creation and update.

### articleAccess

Allows access to article routes only for users with the `admin` role.

## Available Routes

### Root

- GET /

### Users

- GET /users
- POST /users
- GET /users/:userId
- PUT /users/:userId
- DELETE /users/:userId

### Articles

- GET /articles
- POST /articles
- GET /articles/:articleId
- PUT /articles/:articleId
- DELETE /articles/:articleId

## Author

Julia Koval
