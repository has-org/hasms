'use client';
import { ICartProduct } from '@/types/ICartProduct';
import { IProduct } from '@/types/IProduct';
import { createContext } from 'react';

export const CartContext = createContext<{
	products: ICartProduct[] | null;
	totalAmount: number;
	totalWithoutTax: number;
	totalTax: number;
	addToCart: (product: ICartProduct) => void;
	removeFromCart: (id: number | string) => void;
}>({
	products: null,
	totalAmount: 0,
	totalWithoutTax: 0,
	totalTax: 0,
	addToCart: (product) => {},
	removeFromCart: (id) => {},
});
