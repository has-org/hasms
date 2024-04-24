import { IProduct } from '@/types/IProduct';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Link from 'next/link';
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
import QuickAddToCartButton from '@/components/cart/buttons/QuickAddToCart';
import { ColorSelector } from './ColorSelector';
import { SelectedImage } from '../ProductCard/SelectedImage';
import { ProductProvider } from '@/context/ProductContext/ProductProvider';

export const CategoryProductItem = ({ product }: { product: IProduct }) => {
	const {
		variants: [
			{
				variant_images: [{ images = [] }],
				product_prices: [{ price: productPrice = 0 }],
				colors,
			},
		] = [],
	} = product;
	const image = images[0] ?? false;

	return (
		<ProductProvider>
			<Card sx={{ height: '376px', boxShadow: 0, borderRadius: '16px' }}>
				<Link href={`/shop/product/${product.id}`} style={{ textDecoration: 'none' }}>
					<Box
						sx={{
							height: '184px',
							position: 'relative',
							borderRadius: '16px',
						}}
					>
						<SelectedImage defaultImage={image} />
					</Box>
				</Link>

				<Stack sx={{ px: '20px', pb: '20px' }} spacing={1}>
					<Stack
						direction={'row'}
						spacing={1}
						sx={{
							display: 'flex',
							pt: 2,
						}}
					>
						<Typography variant='body1'>{product?.name}</Typography>
						<Typography variant='body1'>{product?.manufacturer}</Typography>
					</Stack>

					<Typography fontSize={28} color='#00D0FD'>
						{productPrice} KM
					</Typography>

					<Stack spacing={2}>
						<ColorSelector colors={colors} variantImages={product.variants[0].variant_images} />
						<QuickAddToCartButton product={product} />
					</Stack>
				</Stack>
			</Card>
		</ProductProvider>
	);
};
