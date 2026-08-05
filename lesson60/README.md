# Lesson 60

## Description

This project demonstrates a simple RESTful API built with Express.js using the MVC architecture.

## Features

- Root route
- Users routes
- Articles routes
- MVC structure
- Express Router
- REST API

## Technologies

- JavaScript
- Node.js
- Express.js

## Project Structure

```
lesson60/
│
├── controllers/
│   ├── articleController.js
│   └── userController.js
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

```bash
npm install
```

## Run

```bash
npm start
```

## API Routes

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
