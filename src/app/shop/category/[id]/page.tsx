import CheckboxCollapsible from '@/components/collapsible/CheckboxCollapsible';
import ColorCollapsible from '@/components/collapsible/ColorCollapsible';
import PriceCollapsible from '@/components/collapsible/PriceCollapsible';
import { CategoryProductList } from '@/components/common/CategoryProductList';
import {
	getCategory,
} from '@/services/apiService';
import { ICategory } from '@/types/ICategory';
import { IProduct } from '@/types/IProduct';
import { Box, Button, Card, Container, Grid2 as Grid, Pagination, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default async function ShopCategory({ params: { id, page, count, query } }: any) {


	const currentPage = page || 0
	const searchQuery = query || ''
	const currentPageCount = count || 10


	const category: ICategory = await getCategory({ id: id });
	if (!category) return <div>Category not found</div>;

	// const products: IProduct[] = await getCategoryProducts({
	// 	id,
	// 	page: 0,
	// 	count: 10,
	// });



	return (
		<Container maxWidth='lg'>
			<Grid container>
				<Grid size={{ xs: 12 }}>
					<Box
						sx={{
							display: 'flex',
							position: 'relative',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '300px',
							borderRadius: '16px',
						}}
					>
						<Image src={category?.main_image} fill alt='proizvodi backgroud' />
						<Typography variant='h1' sx={{ zIndex: '100' }}>
							{category?.name}
						</Typography>
					</Box>
				</Grid>
				<Grid size={{ xs: 12, md: 3 }} sx={{ marginTop: 10 }}>
					<Stack spacing={0.5}>
						<Typography variant='body2'>Prodavnica - kacige</Typography>
						{/* <CheckboxCollapsible title='Vrsta' selectFields={categoryTypes} />
						<CheckboxCollapsible title='Brend' selectFields={manufacturerTypes} />
						<CheckboxCollapsible title='Veličina' selectFields={categoryProductsSizes} />
						<ColorCollapsible title='Boja' colors={categoryProductsColors} />
						<PriceCollapsible title='Cijena' min={0} max={70000} /> */}
					</Stack>
				</Grid>
				<Grid size={{ xs: 12, md: 9 }}>
					<Grid container columnSpacing={4} rowSpacing={4}>
						<Grid size={{ xs: 12 }} sx={{ display: 'flex' }}>
							<Typography variant='body2'>filteri</Typography>
						</Grid>
						<CategoryProductList products={products} />
					</Grid>
				</Grid>

			</Grid>
		</Container >
	);
}
