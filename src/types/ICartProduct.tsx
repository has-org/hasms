import { ICategory } from './ICategory';
import { IColor } from './IColor';
import { ISize } from './ISize';
export interface ICartProduct {
	id: number;
	cartItemId: string;
	code: string;
	name: string;
	description: string;
	manufacturer: string;
	category_id: number;
	subcategory_id: number;
	workspace_id: number;
	color: string;
	size: string;
	quantity: number;
	image: string;
	price: string;
	taxAmount: string;
	priceWithoutTax: string;
	taxPercentage: number;
	currency: string;
	model: string;
	category: string;
	subcategory: string;
	tags: string[];
}
