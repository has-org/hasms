import { createContext, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
    });

    const addToCart = (item: any) => {
        console.log('cald', item)
        const updatedItems = [...state.items, item];

        dispatch({
            type: "ADD",
            payload: {
                items: updatedItems,
            },
        });
    };

    const removeFromCart = (id: number) => {
        const updatedCart = state.items.filter(
            (currentProduct: { id: number; }) => currentProduct.id !== id
        );

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
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}