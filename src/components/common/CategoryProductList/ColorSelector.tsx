'use client'
import { useColorSelector } from '@/hooks/useColorSelector';
import { IColor } from '@/types/IColor';
import { IImage } from '@/types/IImage';
import { IVariantImage } from '@/types/IVariantImage';
import { Box, Stack } from '@mui/material';

export const ColorSelector = ({ variantImages, colors }: { variantImages: IVariantImage[]; colors: IColor[] }) => {
	const { selectedColor, handleSelectColor } = useColorSelector({ variantImages, colors });

	return (
		<Stack direction='row' spacing={1}>
			{colors?.map((color) => {
				return (
					<Box
						key={color.value}
						sx={{
							backgroundColor: color.value,
							height: '22px',
							width: '22px',
							borderRadius: '4px',
							scale: selectedColor?.name === color.name ? '1.3': '1',
							'&:hover': {
								cursor: 'pointer',
							},
						}}
						onClick={() => handleSelectColor(color)}
					></Box>
				);
			})}
		</Stack>
	);
};
