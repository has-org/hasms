"use client";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";
import { v4 as uuidv4 } from "uuid";
// import axiosInstance from "@/utils/axios";
import { IProduct } from "@/types/IProduct";
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalWithoutTax: 0,
    totalTax: 0,
  });

  const addToCart = useCallback(
    async (item: any) => {
      const preparedProductToAdd = {
        id: uuidv4(),
        product_id: item.id,
        product_manufacturer: item.manufacturer,
        product_code: item.code,
        product_name: item.name,
        product_price: item.variants[0]?.product_prices[0]?.price,
        product_price_without_tax: item.variants[0]?.product_prices[0]?.price_without_tax,
        product_tax_amount: item.variants[0]?.product_prices[0]?.tax_amount,
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
    },
    [state.items]
  );

  const updateCartItemQuantity = useCallback((payload: any, action: string) => {
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
  }, []);

  const removeFromCart = useCallback((id: number) => {
    dispatch({
      type: "REMOVE",
      payload: {
        id: id,
      },
    });
  }, []);

  useEffect(() => {
    if (state.items) {
      const calculateTotalAmount = () => {
        let totalWithTax = 0;
        let totalWithoutTax = 0;
        let totalTax = 0;
        for (const item of state.items) {
          totalWithTax += Math.round(item.product_price * item.quantity);
          totalWithoutTax += Math.round(item.product_price_without_tax * item.quantity);
          totalTax += item.product_tax_amount * item.quantity;
        }
        return { totalWithTax, totalWithoutTax, totalTax };
      };

      const total = calculateTotalAmount();

      dispatch({
        type: "UPDATE_TOTAL_AMOUNT",
        payload: {
          totalAmount: total.totalWithTax.toFixed(2),
          totalWithoutTax: total.totalWithoutTax.toFixed(2),
          totalTax: total.totalTax.toFixed(2),
        },
      });
    }
  }, [state.items]);

  const memoizedValue = useMemo(
    () => ({
      items: state.items,
      totalAmount: state.totalAmount,
      totalWithoutTax: state.totalWithoutTax,
      totalTax: state.totalTax,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
    }),
    [
      state.items,
      state.totalAmount,
      state.totalWithoutTax,
      state.totalTax,
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
