'use client';

import { useColorSelector } from '@/hooks/useColorSelector';
import { IColor } from '@/types/IColor';
import { IImage } from '@/types/IImage';
import { Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function ImageColorSelector({ images, colors }: { images: IImage[]; colors: IColor[] }) {
	const { selectedColor, handleSelectImage } = useColorSelector({ images, colors });

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
