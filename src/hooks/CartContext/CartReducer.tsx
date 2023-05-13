
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

        default:
            throw new Error("No case for that type");
    }
};

