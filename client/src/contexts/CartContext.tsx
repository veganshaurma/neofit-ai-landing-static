import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface CartItem {
  productId: string;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  getItemCount: () => number;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | null>(null);

function loadCart(): CartItem[] {
  try {
    const stored = localStorage.getItem("cartItems");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function saveCart(items: CartItem[]) {
  localStorage.setItem("cartItems", JSON.stringify(items));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  const addItem = useCallback((productId: string) => {
    setItems(prev => {
      const existing = prev.find(i => i.productId === productId);
      let next: CartItem[];
      if (existing) {
        next = prev; // already in cart, qty=1 per product
      } else {
        next = [...prev, { productId, qty: 1 }];
      }
      saveCart(next);
      return next;
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems(prev => {
      const next = prev.filter(i => i.productId !== productId);
      saveCart(next);
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    saveCart([]);
  }, []);

  const getItemCount = useCallback(() => items.length, [items]);

  const isInCart = useCallback((productId: string) => items.some(i => i.productId === productId), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, getItemCount, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
