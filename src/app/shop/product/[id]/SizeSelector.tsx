'use client';

import { ProductContext } from '@/context/ProductContext/ProductContext';
import { ISize } from '@/types/ISize';
import { Stack, Box, Typography, Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';

export default function SizeSelector({ sizes }: { sizes: ISize[] }) {
	const { selectedSize, selectSize } = useContext(ProductContext);

	useEffect(() => {
		if (sizes.length > 0) {
			selectSize(sizes[0]);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Stack spacing={1}>
			<Stack direction='row' spacing={1}>
				<Typography className='product-size-title' color='#ACACAC'>
					Veličina:
				</Typography>
				<Typography color='primary' component='span'>
					{selectedSize?.name}
				</Typography>
			</Stack>
			<Stack direction='row' spacing={1}>
				{sizes.map((size) => (
					<Button
						key={size.id}
						variant='outlinedTransparent'
						color='secondary'
						onClick={() => selectSize(size)}
						sx={{
							border: selectedSize?.name === size.name ? '1px solid #00D0FD' : '1px solid #ACACAC',
							color: selectedSize?.name === size.name ? '#00D0FD' : '#ACACAC',
							width: '32px',
							height: '32px',
							minWidth: '32px',
						}}
					>
						{size.name}
					</Button>
				))}
			</Stack>
		</Stack>
	);
}
