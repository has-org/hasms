'use client'
import { IProduct } from '@/types/IProduct';
import Link from 'next/link';
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
import QuickAddToCartButton from '@/components/cart/buttons/QuickAddToCart';
import Image from 'next/image';
import { useState } from 'react';

export const CategoryProductItem = ({ product }: { product: IProduct }) => {
	const {
		variants: [
			{
				variant_images: [{ images = [] }],
				product_prices: [{ price: productPrice = 0 }],
			},
		] = [],
	} = product;

	const defaultImage = images[0] ? `${images[0].name}.${images[0].extension}` : 'no-image.jpg'
	const [image, setImage] = useState(defaultImage);

	const handleSelectImage = (e: any) => {
		const {value} = e.target
		const {variants: [{variant_images = []}]} = product
		const image = variant_images.find((image) => image.color_id === value);
		if(image) {
			const imageUrl = image?.images?.length > 0 ? `${image.images[0]?.name}.${image.images[0]?.extension}` : '/no-image.jpg';
			setImage(imageUrl);
		}
	}

	return (
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
							src={image}
							fill
							alt='product image'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
					</Box>
				</Link>

				<Stack sx={{ px: '20px', pb: '20px' }} spacing={1}>
					<Stack
						spacing={1}
						sx={{
							display: 'flex',
							pt: 2,
						}}
					>
						<Typography variant='body1'>{product?.name}</Typography>
						<Typography variant='body1'>{product?.manufacturer}</Typography>
					</Stack>

					<Stack direction='row' spacing={1} alignItems='center'>
						<Typography fontSize={24} color='#00D0FD'>
							{productPrice} KM
						</Typography>
					</Stack>
					<Stack spacing={2}>
						<QuickAddToCartButton product={product} selectProductImage={handleSelectImage} />
					</Stack>
				</Stack>
			</Card>
	);
};
