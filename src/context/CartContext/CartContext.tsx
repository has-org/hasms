'use client'
import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addToCart: (item: any) => {},
    removeFromCart: (id: number) => {},
    updateCartItemQuantity: (item: any, action: string) => {}
});