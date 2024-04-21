import { IProduct } from '@/types/IProduct';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Link from 'next/link';
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import QuickAddToCartButton from '@/components/cart/buttons/QuickAddToCart';

export const CategoryProductItem = ({ product }: { product: IProduct }) => {
	const {
		variants: [
			{
				variant_images: [{ images = [] }],
				product_prices: [{ price: productPrice = 0 }],
			},
		] = [],
	} = product;
	const image = images[0] ?? false;
	const defaultImage = image ? `${image.name}.${image.extension}` : '/no-image.jpg';

	return (
		<Grid xs={12} md={4} lg={4}>
			<Card sx={{ height: '376px', boxShadow: 0, borderRadius: '16px' }}>
				<Link href={`/shop/product/${product.id}`} style={{ textDecoration: 'none' }}>
					<Box
						sx={{
							height: '184px',
							position: 'relative',
							borderRadius: '16px',
						}}
					>
						<Image
							src={defaultImage}
							fill
							alt='product image'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
					</Box>
				</Link>

				<Stack sx={{ px: '20px', pb: '20px' }} spacing={3}>
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

					<QuickAddToCartButton product={product} />
				</Stack>
			</Card>
		</Grid>
	);
};
