# Product Search Memoization App

## Description

This project demonstrates how memoization works in React using **useMemo**, **useCallback**, and **React.memo**.

The application allows users to search, filter, sort, and select products while optimizing component rendering and avoiding unnecessary calculations.

---

## GitHub Repository

Repository:
https://github.com/juliakovall/react2/tree/main/lesson50

---

## Features

- Search products by name
- Filter products by category
- Sort products by price or rating
- Display selected product
- Display product statistics
- Counter for demonstrating unnecessary re-renders
- Memoization with `useMemo`
- Memoized callback functions with `useCallback`
- Optimized component rendering with `React.memo`

---

## Technologies

- React
- TypeScript
- Vite
- CSS

---

## Memoization

### useMemo

Used for:

- filtering products;
- sorting products;
- calculating the total price;
- calculating the average rating.

### useCallback

Used for:

- selecting a product;
- resetting filters.

### React.memo

`ProductCard` is wrapped with `React.memo`, so product cards only re-render when their props change.

---

## How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open in your browser:

```
http://localhost:5173
```

---

## Build

```bash
npm run build
```

---

## Project Structure

```
src
│
├── components
│   ├── ProductCard.tsx
│   ├── ProductList.tsx
│   └── Statistics.tsx
│
├── data
│   └── products.ts
│
├── types
│   └── product.ts
│
├── App.tsx
├── App.css
└── main.tsx
```

---

## Author

Julia Koval
