import { IProduct } from '@/types/IProduct';
import { CategoryProductItem } from './CategoryProductItem';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export const CategoryProductList = ({ products }: { products: IProduct[] }) => {
	return products?.map((product) => {
		return (
			<Grid xs={12} md={4} lg={4} key={product.code}>
				<CategoryProductItem product={product} />
			</Grid>
		);
	});
};
