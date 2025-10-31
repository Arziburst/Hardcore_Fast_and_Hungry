import type { Product } from "../types/product";

interface FilterPanelProps {
  products: Product[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterPanel({
  products,
  selectedCategory,
  onCategoryChange,
}: FilterPanelProps) {
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Categories</h2>
      <div className="flex flex-col space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
