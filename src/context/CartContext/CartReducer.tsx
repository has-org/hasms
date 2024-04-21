import { ICartProduct } from "@/types/ICartProduct";

export const cartReducer = (state: any, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case 'ADD':
			return {
				...state,
				products: [...state.products, payload.product],
			};

		case 'UPDATE':
			const updatedItems = state.products?.map((product: ICartProduct) => {
				if (
					product.code === payload.product.code &&
					product.color?.id === payload.product.color.id &&
					product.size?.id === payload.product.size.id
				) {
					return payload.product;
				}
				return product;
			});
			return {
				...state,
				products: updatedItems,
			};

		case 'REMOVE':
			return {
				...state,
				products: state.products.filter((product: ICartProduct) => product.id !== payload.id),
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
