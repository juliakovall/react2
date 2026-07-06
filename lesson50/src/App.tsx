import { useCallback, useMemo, useState } from "react";
import "./App.css";

import ProductList from "./components/ProductList";
import Statistics from "./components/Statistics";
import { products } from "./data/products";
import type { Product } from "./types/product";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("price");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [counter, setCounter] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log("useMemo: filtering and sorting products");

    return products
      .filter((product) => {
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchValue.toLowerCase());

        const matchesCategory =
          category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "price") {
          return a.price - b.price;
        }

        return b.rating - a.rating;
      });
  }, [searchValue, category, sortBy]);

  const totalPrice = useMemo(() => {
    console.log("useMemo: calculating total price");

    return filteredProducts.reduce((sum, product) => sum + product.price, 0);
  }, [filteredProducts]);

  const averageRating = useMemo(() => {
    console.log("useMemo: calculating average rating");

    if (filteredProducts.length === 0) {
      return 0;
    }

    const totalRating = filteredProducts.reduce(
      (sum, product) => sum + product.rating,
      0,
    );

    return Number((totalRating / filteredProducts.length).toFixed(1));
  }, [filteredProducts]);

  const handleSelectProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const handleResetFilters = useCallback(() => {
    setSearchValue("");
    setCategory("All");
    setSortBy("price");
    setSelectedProduct(null);
  }, []);

  return (
    <main className="app">
      <section className="hero">
        <h1>Product Search Memoization</h1>
        <p>
          This React application demonstrates useMemo, useCallback and
          React.memo for performance optimization.
        </p>
      </section>

      <section className="demo-panel">
        <h2>Memoization demo</h2>
        <p>
          Click the counter button and open the browser console. Product cards
          will not re-render unnecessarily because they use React.memo and the
          callback is memoized with useCallback.
        </p>

        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          Counter: {counter}
        </button>
      </section>

      <section className="controls">
        <input
          type="text"
          placeholder="Search product..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="All">All categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothes">Clothes</option>
          <option value="Food">Food</option>
        </select>

        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="price">Sort by price</option>
          <option value="rating">Sort by rating</option>
        </select>

        <button onClick={handleResetFilters}>Reset filters</button>
      </section>

      <Statistics
        count={filteredProducts.length}
        totalPrice={totalPrice}
        averageRating={averageRating}
      />

      {selectedProduct && (
        <section className="selected-product">
          <h2>Selected product</h2>
          <p>
            You selected: <strong>{selectedProduct.name}</strong>
          </p>
        </section>
      )}

      <ProductList products={filteredProducts} onSelect={handleSelectProduct} />
    </main>
  );
}

export default App;
