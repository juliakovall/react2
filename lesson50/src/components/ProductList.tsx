import ProductCard from "./ProductCard";
import type { Product } from "../types/product";

type ProductListProps = {
  products: Product[];
  onSelect: (product: Product) => void;
};

function ProductList({ products, onSelect }: ProductListProps) {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
    </ul>
  );
}

export default ProductList;
