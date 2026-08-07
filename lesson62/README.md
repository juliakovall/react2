# Lesson 62

## Description

This project demonstrates the integration of Pug and EJS template engines into an Express.js server.

Pug is used for user pages, while EJS is used for article pages.

## Features

- Express.js server
- Pug template engine
- EJS template engine
- User list page
- User details page
- Article list page
- Article details page
- Static CSS styles
- MVC-style project structure

## Technologies

- JavaScript
- Node.js
- Express.js
- Pug
- EJS
- CSS

## Project Structure

```text
lesson62/
├── controllers/
│   ├── articleController.js
│   └── userController.js
│
├── routes/
│   ├── articleRoutes.js
│   └── userRoutes.js
│
├── views/
│   ├── users/
│   │   ├── list.pug
│   │   └── details.pug
│   │
│   └── articles/
│       ├── list.ejs
│       └── details.ejs
│
├── public/
│   └── styles.css
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

The server runs at:

```text
http://localhost:3000
```

## Routes

### Home

```text
GET /
```

Displays links to users and articles.

### Users — Pug

```text
GET /users
```

Displays the list of users using a Pug template.

```text
GET /users/:userId
```

Displays information about a specific user using a Pug template.

Example:

```text
http://localhost:3000/users/1
```

### Articles — EJS

```text
GET /articles
```

Displays the list of articles using an EJS template.

```text
GET /articles/:articleId
```

Displays information about a specific article using an EJS template.

Example:

```text
http://localhost:3000/articles/1
```

## Template Engines

### Pug

Pug is used for:

- `/users`
- `/users/:userId`

### EJS

EJS is used for:

- `/articles`
- `/articles/:articleId`

## Author

Julia Koval
