export const ProductReducer = (state: any, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case 'SELECT_IMAGE':
			return {
				...state,
				selectedImage: payload.image,
			};
		case 'SELECT_SIZE':
			return {
				...state,
				selectedSize: payload.size,
			};
		case 'SELECT_COLOR':
			return {
				...state,
				selectedColor: payload.color,
			};

		default:
			throw new Error('No case for that type');
	}
};
