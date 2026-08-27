# Lesson 67 - MongoDB Cursors and Aggregation

## Description

This project extends the previous Express and MongoDB Atlas application.

The main goal of this lesson is to improve data processing by using MongoDB cursors and aggregation queries.

## Technologies

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Passport.js
- Express Session
- dotenv

## New Features

- Reading users with a MongoDB cursor
- Processing documents one by one
- Aggregation pipeline for user statistics
- Existing CRUD functionality from the previous lesson

## Installation

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

## Routes

### Get users

```http
GET /users
```

Returns users from MongoDB.

### Get users with cursor

```http
GET /users/cursor
```

Uses a MongoDB cursor to iterate through documents one by one.

Example:

```bash
curl http://localhost:3000/users/cursor
```

Example response:

```json
{
  "count": 2,
  "users": [
    {
      "_id": "USER_ID",
      "email": "user1@example.com"
    },
    {
      "_id": "USER_ID",
      "email": "user2@example.com"
    }
  ]
}
```

### Get user statistics

```http
GET /users/stats
```

Uses MongoDB aggregation to calculate statistics.

The response includes:

- total number of users
- date of the first created user
- date of the most recently created user

Example:

```bash
curl http://localhost:3000/users/stats
```

Example response:

```json
{
  "totalUsers": 3,
  "firstUserCreatedAt": "2026-08-27T10:00:00.000Z",
  "lastUserCreatedAt": "2026-08-27T12:00:00.000Z"
}
```

## Existing CRUD Routes

```text
POST   /users
POST   /users/many

PUT    /users/:id
PUT    /users/update-many
PUT    /users/replace/:id

DELETE /users/:id
DELETE /users/delete-many
```

## MongoDB Methods Used

- `find()`
- `cursor()`
- `aggregate()`
- `create()`
- `insertMany()`
- `updateOne()`
- `updateMany()`
- `replaceOne()`
- `deleteOne()`
- `deleteMany()`

## Author

Julia Koval
