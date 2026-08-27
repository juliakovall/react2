# Lesson 66 - Express CRUD with MongoDB Atlas

## Description

This project extends an existing Express server connected to MongoDB Atlas.

The application demonstrates CRUD operations with MongoDB using Mongoose.

## Technologies

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Passport.js
- Express Session
- dotenv

## Features

- Read users with projection
- Create one user
- Create multiple users
- Update one user
- Update multiple users
- Replace one user
- Delete one user
- Delete multiple users

## Installation

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
PORT=3000
```

## Run

```bash
npm start
```

The server runs at:

```text
http://localhost:3000
```

## API Routes

### Get users

```http
GET /users
```

Returns users from MongoDB using projection.

Example:

```bash
curl http://localhost:3000/users
```

### Create one user

```http
POST /users
```

Example:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"user1@example.com","password":"12345"}' \
  http://localhost:3000/users
```

### Create many users

```http
POST /users/many
```

Example:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '[
    {"email":"user2@example.com","password":"12345"},
    {"email":"user3@example.com","password":"12345"}
  ]' \
  http://localhost:3000/users/many
```

### Update one user

```http
PUT /users/:id
```

Example:

```bash
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"email":"updated@example.com"}' \
  http://localhost:3000/users/USER_ID
```

### Update many users

```http
PUT /users/update-many
```

Example:

```bash
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{
    "filter": {
      "email": {
        "$regex": "@example.com$"
      }
    },
    "update": {
      "password": "newPassword"
    }
  }' \
  http://localhost:3000/users/update-many
```

### Replace one user

```http
PUT /users/replace/:id
```

Example:

```bash
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{
    "email":"replacement@example.com",
    "password":"55555"
  }' \
  http://localhost:3000/users/replace/USER_ID
```

### Delete one user

```http
DELETE /users/:id
```

Example:

```bash
curl -X DELETE \
  http://localhost:3000/users/USER_ID
```

### Delete many users

```http
DELETE /users/delete-many
```

Example:

```bash
curl -X DELETE \
  -H "Content-Type: application/json" \
  -d '{
    "email": {
      "$regex": "^user"
    }
  }' \
  http://localhost:3000/users/delete-many
```

## MongoDB Methods Used

- `find()`
- `create()`
- `insertMany()`
- `updateOne()`
- `updateMany()`
- `replaceOne()`
- `deleteOne()`
- `deleteMany()`

## Author

Julia Koval
