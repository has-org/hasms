'use client'
import { Product } from "@/types/Product";
import { createContext, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
    });

    const addToCart = (item: any) => {
        let updatedItems;
        const isItemInCart = state.items.find((currentProduct: { id: number; }) => currentProduct.id === item.id)
        if (isItemInCart) {
            updatedItems = state.items.map((currentProduct: { id: number; quantity: number; variants: any }) => {
                if (currentProduct.id === item.id) {
                    currentProduct.variants.map((variant: { quantity: number; }) => {
                        variant.quantity += 1;
                    })
                }
                return currentProduct;
            });
        } else {
            updatedItems = [...state.items, item]
        }
        dispatch({
            type: "ADD",
            payload: {
                items: updatedItems,
            },
        });

        return updatedItems;
    };

    const updateCartItemQuantity = (cartItem: any, action: string) => {
        switch (action) {
            case 'increase':
                dispatch({
                    type: "INCREASE_CART_ITEM_QUANTITY",
                    payload: {
                        cartItem: cartItem,
                    },
                });
                return;
            case 'decrease':
                dispatch({
                    type: "DECREASE_CART_ITEM_QUANTITY",
                    payload: {
                        cartItem: cartItem,
                    },
                });
                return;
        }
        return
    }


    const removeFromCart = (id: number) => {
        let updatedCart

        const itemExists = state.items.find((prod: Product) => prod.id === id);
        const itemHasQuantity = itemExists.variants[0].quantity > 1;

        if (itemExists) {
            if (itemHasQuantity) {

            } else {
                state.items.filter(
                    (currentProduct: { id: number; }) => currentProduct.id !== id
                );
            }
        }


        dispatch({
            type: "REMOVE",
            payload: {
                items: updatedCart,
            },
        });
    };

    const value = {
        items: state.items,
        addToCart,
        removeFromCart,
        updateCartItemQuantity
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}