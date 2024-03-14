"use client";
import { useCallback, useMemo, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";
import { v4 as uuidv4 } from "uuid";
// import axiosInstance from "@/utils/axios";
import { IProduct } from "@/types/IProduct";
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [
      {
        id: "599e630a-3def-4baf-bbaf-8d360aca677f",
        product_id: 1,
        product_manufacturer: "REBELHORN",
        product_code: "R001",
        product_name: "GAP III",
        product_price: 100,
        product_image: "/images/R001.JPG",
        variant_id: 1,
        color: {
          id: 1,
          created_at: "2024-03-03T21:06:11.437Z",
          updated_at: "2024-03-03T21:06:11.437Z",
          name: "CRNA",
          value: "#000000",
        },
        size: {
          id: 3,
          created_at: "2024-03-03T21:06:11.437Z",
          updated_at: "2024-03-03T21:06:11.437Z",
          name: "M",
          quantity: 1,
          is_available: false,
        },
        quantity: "10",
      },
    ],
    totalAmount: 0,
  });

  const addToCart = useCallback(
    async (item: any) => {
      const preparedProductToAdd = {
        id: uuidv4(),
        product_id: item.id,
        product_manufacturer: item.manufacturer,
        product_code: item.code,
        product_name: item.name,
        product_price: item.price,
        product_image: item.variants[0]?.images[0]?.url,
        variant_id: item.variants[0]?.id,
        color: item.selectedColor,
        size: item.selectedSize,
        quantity: item.quantity,
      };
      const itemExists = state.items?.find(
        (cartItem: any) =>
          cartItem.product_code === item.code &&
          cartItem.color.id === item?.selectedColor.id &&
          cartItem.size.id === item?.selectedSize.id
      );

      if (itemExists) {
        dispatch({
          type: "UPDATE",
          payload: {
            item: preparedProductToAdd,
          },
        });
      } else {
        dispatch({
          type: "ADD",
          payload: {
            item: preparedProductToAdd,
          },
        });
      }

      dispatch({
        type: "UPDATE_TOTAL_AMOUNT",
        payload: {
          totalAmount: preparedProductToAdd.quantity * preparedProductToAdd.product_price,
        },
      });
    },
    [state.items]
  );

  const updateCartItemQuantity = useCallback(
    (payload: any, action: string) => {
      switch (action) {
        case "INCREASE":
          dispatch({
            type: "INCREASE_CART_ITEM_QUANTITY",
            payload: {
              item: payload,
            },
          });
          return;
        case "DECREASE":
          dispatch({
            type: "DECREASE_CART_ITEM_QUANTITY",
            payload: {
              item: payload,
            },
          });
          return;
      }
      dispatch({
        type: "UPDATE_TOTAL_AMOUNT",
        payload: {
          totalAmount: 1,
        },
      });
      return;
    },
    []
  );

  const removeFromCart = useCallback(
    (id: number) => {
      dispatch({
        type: "REMOVE",
        payload: {
          id: id,
        },
      });

    },
    []
  );

  const memoizedValue = useMemo(
    () => ({
      items: state.items,
      totalAmount: state.totalAmount,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
    }),
    [
      state.items,
      state.totalAmount,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
    ]
  );

  return (
    <CartContext.Provider value={memoizedValue}>
      {children}
    </CartContext.Provider>
  );
};
