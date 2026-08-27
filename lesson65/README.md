# Lesson 65 - MongoDB Atlas Integration

## Description

This project demonstrates how to connect an Express.js server to MongoDB Atlas using Mongoose.

Implemented features:

- Connection to MongoDB Atlas
- User model with Mongoose
- Passport authentication
- Express session support
- Protected routes
- Reading users from MongoDB

## Technologies

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Passport
- Express Session
- dotenv

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=lesson65-secret
PORT=3000
```

## Run

```bash
npm start
```

Server runs at:

```
http://localhost:3000
```

## Project Structure

```
config/
controllers/
middlewares/
models/
routes/
app.js
```
