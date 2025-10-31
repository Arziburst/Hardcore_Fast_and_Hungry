import type { CartItem } from '../types/product';

interface CartCalculations {
  itemCount: number;
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  total: number;
}

const DISCOUNT_THRESHOLD = 500;
const DISCOUNT_PERCENT = 10;

export function calculateCart(items: CartItem[]): CartCalculations {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountPercent = subtotal < DISCOUNT_THRESHOLD ? DISCOUNT_PERCENT : 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = subtotal - discountAmount;

  return {
    itemCount,
    subtotal,
    discountPercent,
    discountAmount,
    total,
  };
}

