# User Profile App

## Description

This project was created with Vite and React. It contains a `UserProfile` component that performs an asynchronous GET request to the JSONPlaceholder API and displays information about a user.

The component handles three states:

- Loading state
- Successful data loading
- Error state

Tests are written using Vitest and React Testing Library.

---

## Technologies

- React
- TypeScript
- Vite
- Vitest
- React Testing Library

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## Run the project

```bash
npm run dev
```

---

## Run tests

```bash
npm run test
```

---

## Build the project

```bash
npm run build
```

---

## API

The application uses the following endpoint:

```
https://jsonplaceholder.typicode.com/users/1
```

---

## Component Features

- Displays a loading indicator while fetching data.
- Shows user information after a successful request.
- Displays an error message if the request fails.

---

## Testing

The following scenarios are covered by tests:

1. Loading state.
2. Successful API response.
3. Error during request.

---

## Project Structure

```
src/
│
├── components/
│   ├── UserProfile.tsx
│   └── UserProfile.test.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```
