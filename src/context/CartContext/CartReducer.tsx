export const cartReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, payload.item],
        totalAmount:
          state.totalAmount +
          payload.item.product_price * payload.item.quantity,
      };

    case "UPDATE":
      const updatedItems = state.items?.map((item: any) => {
        if (
          item.product_code === payload.item.product_code &&
          item.color.id === payload.item.color.id &&
          item.size.id === payload.item.size.id
        ) {
          return payload.item;
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
        totalAmount:
          state.totalAmount +
          payload.item.product_price * payload.item.quantity,
      };

    case "REMOVE":
      return {
        ...state,
        items: payload.items,
        totalAmount:
          state.totalAmount -
          payload.item.product_price * payload.item.quantity,
      };

    case "INCREASE_CART_ITEM_QUANTITY":
      return {
        ...state,
        items: state.items.map((item: any) => {
          if (item.product_cart_id === payload.item.product_cart_id) {
            item.quantity += 1;
            return item;
          }
          return item;
        }),
      };
    case "DECREASE_CART_ITEM_QUANTITY":
      return {
        ...state,
        items: state.items.map((item: any) => {
          if (item.id === payload.id) {
            item.quantity -= 1;
            return item;
          }
          return item;
        }),
      };

    default:
      throw new Error("No case for that type");
  }
};
