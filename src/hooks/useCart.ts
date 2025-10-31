import { useState } from "react";
import type { Product, CartItem } from "../types/product";

function addToCart(items: CartItem[], product: Product): CartItem[] {
  const existingItem = items.find((item) => item.product.id === product.id);

  if (existingItem) {
    return items.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...items, { product, quantity: 1 }];
}

function removeFromCart(items: CartItem[], productId: number): CartItem[] {
  return items.filter((item) => item.product.id !== productId);
}

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => addToCart(prevItems, product));
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prevItems) => removeFromCart(prevItems, productId));
  };

  return {
    cartItems,
    handleAddToCart,
    handleRemoveItem,
  };
}
