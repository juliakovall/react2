import { memo } from "react";
import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

function ProductCard({ product, onSelect }: ProductCardProps) {
  console.log("Render ProductCard:", product.name);

  return (
    <li className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>

      <button onClick={() => onSelect(product)}>Select</button>
    </li>
  );
}

export default memo(ProductCard);
