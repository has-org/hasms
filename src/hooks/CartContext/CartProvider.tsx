'use client'
import { Product } from "@/types/Product";
import { Size } from "@/types/Size";
import { Variant } from "@/types/Variant";
import { Color } from "@/types/Color";
import { createContext, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";
import { v4 as uuidv4 } from 'uuid';
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
    });

    const addToCart = (item: any) => {
        const preparedProductToAdd = {
            product_cart_id: uuidv4(),
            product_id: item.id,
            product_code: item.code,
            product_name: item.name,
            product_price: item.price,
            product_image: item.variants[0].images[0].url,
            variant_id: item.variants[0].id,
            color: item.color,
            size: item.size,
            quantity: 1
        }
        const itemExists = state.items.find((cartItem: { product_id: number; color: Color; size: Size }) => {
            if (cartItem.product_id === item.id && cartItem.color.id === item.color.id && cartItem.size.id === item.size.id) { return cartItem }
            return undefined
        })
        if (itemExists) {
            console.log(itemExists)
            return dispatch({
                type: "INCREASE_CART_ITEM_QUANTITY",
                payload: {
                    item: itemExists,
                },
            });
        }

        return dispatch({
            type: "ADD",
            payload: {
                items: [...state.items, preparedProductToAdd],
            },
        });
    };

    const updateCartItemQuantity = (payload: any, action: string) => {
        switch (action) {
            case 'increase':
                dispatch({
                    type: "INCREASE_CART_ITEM_QUANTITY",
                    payload: {
                        item: payload,
                    },
                });
                return;
            case 'decrease':
                dispatch({
                    type: "DECREASE_CART_ITEM_QUANTITY",
                    payload: {
                        item: payload,
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