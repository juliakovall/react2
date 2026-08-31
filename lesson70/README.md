# Lesson 70. Refactoring MongoDB Project to Mongoose

## Description

This project demonstrates how to use Mongoose instead of the native MongoDB Node.js Driver.

## Technologies

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Passport.js
- Express Session

## Installation

```bash
npm install
```

Create a `.env` file:

```
MONGODB_URI=your_connection_string
SESSION_SECRET=your_secret
```

Run:

```bash
npm start
```

## Routes

GET /users - get all users

POST /users - create user

PUT /users/:id - update user

PATCH /users/update-many - update many users

PUT /users/replace/:id - replace user

DELETE /users/:id - delete user

DELETE /users/delete-many - delete many users

GET /users/cursor - get users with cursor

GET /users/stats - get statistics
