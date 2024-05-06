export interface IOrder {
	id: number;
	created_at?: Date;
	updated_at?: Date;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	country: string;
	city: string;
	zip: string;
	address: string;
	notes: string;
	deliveryMethod: string;
	paymentMethod: string;
	products: [
		{
			id: number;
			cartItemId: string;
			name: string;
			code: string;
			description: null;
			manufacturer: string;
			category_id: number;
			workspace_id: number;
			price: string;
			taxAmount: string;
			priceWithoutTax: string;
			quantity: number;
			color: {
				id: number;
				created_at?: string;
				updated_at?: string;
				name: string;
				value: string;
			};
			size: {
				id: number;
				created_at: string;
				updated_at: string;
				name: string;
			};
			image: string;
		},
	];
}
