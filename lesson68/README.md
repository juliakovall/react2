# Lesson 68 – Docker, Express & MongoDB

This project demonstrates how to run an Express.js application with MongoDB using Docker and Docker Compose.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Docker Compose

## Project Structure

```
lesson68/
│
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── README.md
├── .env
│
├── config/
├── controllers/
├── middlewares/
├── models/
└── routes/
```

## Installation

Install dependencies:

```bash
npm install
```

## Run without Docker

Start the application:

```bash
npm start
```

Server:

```
http://localhost:3000
```

## Run with Docker

Build and start containers:

```bash
docker compose up --build
```

Run containers in the background:

```bash
docker compose up -d
```

Stop containers:

```bash
docker compose down
```

## Docker Configuration

### Dockerfile

The project uses:

- node:lts image
- Working directory `/app`
- Installs project dependencies
- Copies application files
- Exposes port **3000**
- Starts the server with:

```bash
node app.js
```

### Docker Compose

The project contains two services:

- app
- mongo

The application connects to MongoDB using the `MONGODB_URI` environment variable.

## API

### Home

```
GET /
```

Returns:

```
Lesson 68 MongoDB Atlas server.
```

### Authentication

```
POST /register
POST /login
POST /logout
```

### Users

```
GET /users
POST /users
POST /users/many
PUT /users/:id
PUT /users/many
PUT /users/replace/:id
DELETE /users/:id
DELETE /users/many
GET /users/cursor
GET /users/stats
```

## Environment Variables

Create a `.env` file:

```
PORT=3000
SESSION_SECRET=your_secret_key
MONGODB_URI=your_mongodb_connection_string
```

## Testing

Start Docker:

```bash
docker compose up --build
```

Open:

```
http://localhost:3000
```

The server should start successfully and connect to MongoDB.

## Author

Julia Koval
