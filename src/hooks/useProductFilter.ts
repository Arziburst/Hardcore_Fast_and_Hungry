import { useState, useMemo } from "react";
import type { Product } from "../types/product";

function filterProductsByCategory(
  products: Product[],
  category: string
): Product[] {
  if (category === "All") {
    return products;
  }
  return products.filter((p) => p.category === category);
}

export function useProductFilter(products: Product[]) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = useMemo(() => {
    return filterProductsByCategory(products, selectedCategory);
  }, [products, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return {
    selectedCategory,
    filteredProducts,
    handleCategoryChange,
  };
}
