import { IProduct } from '@/types/IProduct';
import { CategoryProductItem } from './CategoryProductItem';

export const CategoryProductList = ({ products }: { products: IProduct[] }) => {
	return (products?.map((product) => <CategoryProductItem key={product.code} product={product} />));
};
