import type { Product } from "../types/product";

export const products: Product[] = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, rating: 4.8 },
  { id: 2, name: "Phone", category: "Electronics", price: 800, rating: 4.6 },
  {
    id: 3,
    name: "Headphones",
    category: "Electronics",
    price: 150,
    rating: 4.3,
  },
  { id: 4, name: "Keyboard", category: "Electronics", price: 90, rating: 4.4 },
  { id: 5, name: "T-shirt", category: "Clothes", price: 30, rating: 4.1 },
  { id: 6, name: "Jeans", category: "Clothes", price: 70, rating: 4.5 },
  { id: 7, name: "Jacket", category: "Clothes", price: 140, rating: 4.7 },
  { id: 8, name: "Coffee", category: "Food", price: 12, rating: 4.9 },
  { id: 9, name: "Chocolate", category: "Food", price: 8, rating: 4.6 },
  { id: 10, name: "Tea", category: "Food", price: 10, rating: 4.2 },
];
