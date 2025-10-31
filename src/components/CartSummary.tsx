import type { CartItem } from '../types/product';
import { calculateCart } from '../tools/cartCalculations';

interface CartSummaryProps {
  items: CartItem[];
  onRemoveItem: (productId: number) => void;
}

export function CartSummary({ items, onRemoveItem }: CartSummaryProps) {
  const { itemCount, subtotal, discountPercent, discountAmount, total } =
    calculateCart(items);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md sticky top-4">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Cart Summary</h2>
      
      {items.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Your cart is empty</p>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Items: {itemCount}</p>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.product.name}</p>
                    <p className="text-xs text-gray-500">
                      ${item.product.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-red-600 hover:text-red-800 ml-2"
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {discountPercent > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span>Discount ({discountPercent}%):</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

