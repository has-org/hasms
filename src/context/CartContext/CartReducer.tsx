export const cartReducer = (state: any, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case 'ADD':
			return {
				...state,
				items: [...state.items, payload.item],
			};

		case 'UPDATE':
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
			};

		case 'REMOVE':
			return {
				...state,
				items: state.items.filter((item: any) => item.id !== payload.id),
			};

		case 'INCREASE_CART_ITEM_QUANTITY':
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
		case 'DECREASE_CART_ITEM_QUANTITY':
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

		case 'UPDATE_TOTAL_AMOUNT':
			return {
				...state,
				totalAmount: payload.totalAmount,
				totalWithoutTax: payload.totalWithoutTax,
				totalTax: payload.totalTax,
			};

		default:
			throw new Error('No case for that type');
	}
};
