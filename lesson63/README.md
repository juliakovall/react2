# Lesson 63

## Description

This project demonstrates working with static files, cookies, and JWT authentication using Express.js.

The application allows users to:

- register
- log in
- log out
- save a preferred theme using cookies
- access a protected profile page using JWT authentication

A favicon is also served as a static file.

---

## Technologies

- Node.js
- Express.js
- EJS
- Cookie Parser
- JSON Web Token (JWT)

---

## Installation

Install dependencies:

```bash
npm install
```

---

## Run

Start the server:

```bash
npm start
```

The server will run at:

```
http://localhost:3000
```

---

## Routes

### Home

```
GET /
```

Main page.

---

### Register

```
POST /auth/register
```

Registers a new user and creates a JWT cookie.

---

### Login

```
POST /auth/login
```

Authenticates a user and creates a JWT cookie.

---

### Logout

```
POST /auth/logout
```

Removes the authentication cookie.

---

### Profile

```
GET /profile
```

Protected route.

Requires a valid JWT.

---

### Theme

```
POST /theme
```

Saves the selected theme in cookies.

---

## Static Files

The application serves static files from the **public** directory.

- favicon.ico
- styles.css
- logo.png

---

## Features

- Express server
- Static files
- Cookies
- JWT authentication
- Protected routes
- Theme persistence
- Favicon support

---

## Author

Julia Koval
