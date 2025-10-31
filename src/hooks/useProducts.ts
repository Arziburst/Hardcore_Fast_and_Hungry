import { useState, useEffect } from "react";
import type { Product } from "../types/product";

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("/products.json");
  if (!response.ok) {
    throw new Error("Failed to load products");
  }
  return response.json();
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchProducts()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(
          err instanceof Error ? err : new Error("Failed to load products")
        );
        setIsLoading(false);
        console.error("Failed to load products:", err);
      });
  }, []);

  return { products, isLoading, error };
}
