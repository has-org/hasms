import { IProduct } from '@/types/IProduct';
import { CategoryProductItem } from './CategoryProductItem';
import { Grid2 as Grid } from '@mui/material';

export const CategoryProductList = ({ products }: { products: IProduct[] }) => {
	return products?.map((product) => {
		return (
			<Grid size={{ xs: 12, md: 4, lg: 4 }} key={product.code}>
				<CategoryProductItem product={product} />
			</Grid>
		);
	});
};
