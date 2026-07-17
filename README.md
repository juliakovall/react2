# Node.js HTTP Server

## Description

This project demonstrates how to build a simple HTTP server using the built-in Node.js modules without any external frameworks.

The server supports multiple routes, processes GET and POST requests, validates form data, and returns appropriate HTTP status codes.

---

## Features

- HTTP server using Node.js
- GET routes
  - `/`
  - `/about`
  - `/contact`
- POST route
  - `/submit`
- Form data parsing
- HTML escaping (XSS protection)
- Request body size limit (1 MB)
- Error handling
- HTTP status codes:
  - 200 OK
  - 400 Bad Request
  - 404 Not Found
  - 413 Payload Too Large
  - 500 Internal Server Error

---

## Technologies

- Node.js
- HTTP module
- Querystring module

---

## Installation

```bash
npm install
```

Run the server:

```bash
npm start
```

The server will start at:

```
http://localhost:3000
```

---

## Available Routes

### GET /

Returns the Home page.

### GET /about

Returns the About page.

### GET /contact

Returns the Contact page.

### POST /submit

Accepts:

```
name
email
```

Returns submitted data.

---

## Security

The project includes:

- HTML escaping
- Request body size limit
- Input validation

---

## GitHub Repository

## https://github.com/juliakovall/react2/tree/main/lesson57

## Author

Julia Koval
