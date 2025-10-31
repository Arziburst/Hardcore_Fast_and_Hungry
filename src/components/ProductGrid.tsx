import type { Product } from '../types/product';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6 flex flex-col h-full">
            <h3 className="text-base font-semibold text-gray-800 mb-2 leading-tight">
              {product.name}
            </h3>
            {product.description && (
              <p className="text-sm text-gray-500 mb-4 flex-grow leading-relaxed">
                {product.description}
              </p>
            )}
            <div className="flex flex-col gap-3 mt-auto">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-2xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

