import { FilterPanel } from "./components/FilterPanel";
import { ProductGrid } from "./components/ProductGrid";
import { CartSummary } from "./components/CartSummary";
import { useProducts } from "./hooks/useProducts";
import { useProductFilter } from "./hooks/useProductFilter";
import { useCart } from "./hooks/useCart";
import "./App.css";

function App() {
  const { products } = useProducts();
  const { selectedCategory, filteredProducts, handleCategoryChange } =
    useProductFilter(products);
  const { cartItems, handleAddToCart, handleRemoveItem } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Product Dashboard
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-2 order-1">
            <FilterPanel
              products={products}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </aside>

          <section className="lg:col-span-7 order-2">
            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </section>

          <aside className="lg:col-span-3 order-3">
            <CartSummary items={cartItems} onRemoveItem={handleRemoveItem} />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
