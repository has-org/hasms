
export const cartReducer = (state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD":
            return {
                ...state,
                items: payload.items,
            };

        case "REMOVE":
            return {
                ...state,
                items: payload.items,
            };

        case "INCREASE_CART_ITEM_QUANTITY":
            return {
                ...state,
                items: state.items.map((item: any) => {
                    if (item.product_cart_id === payload.item.product_cart_id) {
                        item.quantity += 1
                        return item
                    }
                    return item
                })
            };
        case "DECREASE_CART_ITEM_QUANTITY":
            return {
                ...state,
                items: state.items.map((item: any) => {
                    if (item.id === payload.id) {
                        item.quantity -= 1
                        return item
                    }
                    return item
                })
            };

        default:
            throw new Error("No case for that type");
    }
};

