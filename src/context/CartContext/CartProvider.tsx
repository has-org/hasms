"use client";
import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "./CartReducer";
import { v4 as uuidv4 } from "uuid";
// import axiosInstance from "@/utils/axios";
import { IProduct } from "@/types/IProduct";
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0
  });

  const addToCart = async (item: any) => {
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
    // try {
    //   const res = await axiosInstance.post("/cart", {
    //     cart: preparedProductToAdd,
    //   });
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }

    // try {
    //   const res1 = await axiosInstance.get(`/cart/${preparedProductToAdd.id}`);
    //   console.log(res1);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const updateCartItemQuantity = (payload: any, action: string) => {
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
    return;
  };

  const removeFromCart = (id: number) => {
    let updatedCart;
    const itemExists = state.items.find((prod: IProduct) => prod.id === id);
    const itemHasQuantity = itemExists.variants[0]?.quantity > 1;

    if (itemExists) {
      if (itemHasQuantity) {
      } else {
        state.items.filter(
          (currentProduct: { id: number }) => currentProduct.id !== id
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
    totalAmount: state.totalAmount,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
