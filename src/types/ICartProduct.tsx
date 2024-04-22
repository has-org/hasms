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
	workspace_id: number;
	color: IColor;
	size: ISize;
	quantity: number;
	image: string;
	price: number;
	taxAmount: number;
	priceWithoutTax: number;
}
