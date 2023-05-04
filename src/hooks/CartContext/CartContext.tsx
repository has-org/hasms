'use client'
import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    addToCart: (item: any) => {},
    removeFromCart: (id: number) => {},
});