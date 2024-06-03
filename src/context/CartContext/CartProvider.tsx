'use client';
import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { CartContext } from './CartContext';
import { cartReducer } from './CartReducer';
import { v4 as uuidv4 } from 'uuid';
// import axiosInstance from "@/utils/axios";
import { ICartProduct } from '@/types/ICartProduct';
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(cartReducer, {
		products: [],
		totalAmount: 0,
		totalWithoutTax: 0,
		totalTax: 0,
	});

	const addToCart = useCallback(
		async (product: ICartProduct) => {

			const itemExists = state.products.find(
				(stateProduct: ICartProduct) =>
					stateProduct.code === product.code &&
					stateProduct.color === product.color &&
					stateProduct.size === product.size,
			);

			if (itemExists) {
				return dispatch({
					type: 'UPDATE',
					payload: {
						product: product,
					},
				});
			}

			const preparedProductToAdd = {
				...product,
				cartItemId: uuidv4(),
			};

			dispatch({
				type: 'ADD',
				payload: {
					product: preparedProductToAdd,
				},
			});
		},
		[state.products],
	);

	const removeFromCart = useCallback((id: number | string) => {
		dispatch({
			type: 'REMOVE',
			payload: {
				id: id,
			},
		});
	}, []);

	useEffect(() => {
		if (state.products) {
			const calculateTotalAmount = () => {
				let totalWithTax = 0;
				let totalWithoutTax = 0;
				let totalTax = 0;
				for (const product of state.products) {
					totalWithTax += Math.round(product.price * product.quantity);
					totalWithoutTax += Math.round(product.priceWithoutTax * product.quantity);
					totalTax += product.taxAmount * product.quantity;
				}
				return { totalWithTax, totalWithoutTax, totalTax };
			};

			const total = calculateTotalAmount();

			dispatch({
				type: 'UPDATE_TOTAL_AMOUNT',
				payload: {
					totalAmount: total.totalWithTax.toFixed(2),
					totalWithoutTax: total.totalWithoutTax.toFixed(2),
					totalTax: total.totalTax.toFixed(2),
				},
			});
		}
	}, [state.products]);

	const memoizedValue = useMemo(
		() => ({
			products: state.products,
			totalAmount: state.totalAmount,
			totalWithoutTax: state.totalWithoutTax,
			totalTax: state.totalTax,
			addToCart,
			removeFromCart,
		}),
		[state.products, state.totalAmount, state.totalWithoutTax, state.totalTax, addToCart, removeFromCart],
	);

	return <CartContext.Provider value={memoizedValue}>{children}</CartContext.Provider>;
};
