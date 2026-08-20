# Lesson 64 - Express Server with Passport Authentication

## Description

This project demonstrates user authentication using Passport.js with Express.

Features:

- User registration
- User login
- User logout
- Session-based authentication
- Protected route available only for authenticated users
- Express-session integration
- HTTP-only cookies for session storage

## Technologies

- Node.js
- Express.js
- Passport.js
- passport-local
- express-session

## Installation

Install dependencies:

```bash
npm install
```

## Run the project

```bash
npm start
```

The server starts on:

```
http://localhost:3000
```

## Routes

### GET /

Home page.

### POST /register

Registers a new user.

### POST /login

Logs in a user.

### GET /logout

Logs out the current user.

### GET /protected

Protected route available only for authenticated users.

## Project Structure

```
lesson64/
│
├── controllers/
├── middleware/
├── routes/
├── app.js
├── package.json
├── README.md
└── .gitignore
```

## Notes

- Authentication uses Passport Local Strategy.
- User session is stored using express-session.
- Session cookies use the `httpOnly` option.
- User data is stored in memory for demonstration purposes.
