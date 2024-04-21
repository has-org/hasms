'use client';

import { Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { IProduct } from '@/types/IProduct';
import { ProductContext } from '@/context/ProductContext/ProductContext';
import { IImage } from '@/types/IImage';
import { IColor } from '@/types/IColor';

export default function ColorSelector({ images, colors }: { images: IImage[]; colors: IColor[] }) {
	const { selectedColor, selectImage, selectColor } = useContext(ProductContext);

	const handleSelectImage = (image: IImage) => {
		selectImage(image);
		const color = colors?.find((color) => color.id === image.color_id);
		if (color) {
			selectColor(color);
		}
	};

	useEffect(() => {
		if (colors.length > 0) {
			selectColor(colors[0]);
		}
		if (images.length > 0) {
			selectImage(images[0]);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Stack spacing={1}>
			<Stack direction='row' spacing={1} alignItems='center'>
				<Typography className='product-colors-title' color='#ACACAC' fontSize='14px'>
					Izaberi boju:
				</Typography>
				<Typography className='variant-color' sx={{ color: 'white', fontWeight: '500' }}>
					{selectedColor?.name}
				</Typography>
			</Stack>
			<Stack direction='row' spacing={0.5} alignItems='center'>
				{images?.map((miniPic) => {
					const defaultMiniImage = miniPic ? `${miniPic.name}.${miniPic.extension}` : '/no-image.jpg';

					return (
						<Button key={`${miniPic.name}`} onClick={() => handleSelectImage(miniPic)}>
							<Image
								src={defaultMiniImage}
								alt='product image'
								width={64}
								height={64}
								style={{ borderRadius: '16px' }}
							/>
						</Button>
					);
				})}
			</Stack>
		</Stack>
	);
}
