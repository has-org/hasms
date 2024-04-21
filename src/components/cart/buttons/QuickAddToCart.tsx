'use client';

import { RHFSelect, RHFTextField } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/FormProvider';
import { IProduct } from '@/types/IProduct';
import { Button, Popover, Box, Stack, Typography, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useState, useContext } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { CartContext } from '@/context/CartContext/CartContext';
import { number, object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type FormValuesProps = {
	productColor: number | string;
	productSize: number | string;
	quantity: string | number;
	afterSubmit?: string;
};

const addToCartSchema = object({
	// productColor: number().or(string()),
	productSize: number().or(string()),
	quantity: string().min(1, ''),
});

const QuickAddToCartButton = ({ product }: { product: IProduct }) => {
	const { addToCart } = useContext(CartContext);

	const {variants: [{ sizes, variant_images}]} = product;
	
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
		reset();
	};

	const open = Boolean(anchorEl);
	const id = open ? 'cart-button-popover' : undefined;

	const methods = useForm<FormValuesProps>({
		resolver: zodResolver(addToCartSchema),
		defaultValues: {
			productSize: '',
			productColor: '',
			quantity: '1',
		},
	});
	const { reset, handleSubmit } = methods;

	const onSubmit: SubmitHandler<any> = async (values: any, e?: React.BaseSyntheticEvent) => {
		const { productColor, productSize, quantity } = values;
		// const selectedColor = colors.find((color) => color.id === productColor);
		const selectedSize = sizes.find((size) => size.id === productSize);
		// const selectedImage = variant_images?.find((variantImage) => variantImage.color_id === selectedColor?.id )
		// const firstVariantImage = selectedImage && selectedImage.images[0]


		// const defaultImage = !firstVariantImage ? '/no-image.jpg' : `${firstVariantImage.name}.${firstVariantImage.extension}`;

		if (!selectedSize) return;
		// addToCart({ ...product, color: selectedColor, size: selectedSize, quantity, image: defaultImage});
		handleClose();
	};

	return (
		<>
			<Button
				aria-describedby={id}
				variant='outlinedTransparent'
				sx={{ textTransform: 'none' }}
				color='secondary'
				onClick={handleClick}
			>
				<Stack direction='row' alignItems='center' spacing={1}>
					<Typography>+</Typography>
					<Typography>Dodaj u korpu</Typography>
				</Stack>
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<Box sx={{ p: 2 }}>
					<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
						<Stack sx={{ width: '200px' }} spacing={1}>
							<Stack direction='row' alignItems='center' justifyContent='space-between'>
								<Typography>Izaberi</Typography>

								<IconButton onClick={handleClose} color='secondary' size='small'>
									<CloseIcon />
								</IconButton>
							</Stack>
							{/* <RHFSelect name='productColor' label='Boja' variant='outlined' defaultValue={0} fullWidth>
								{colors.map((color) => {
									return (
										<MenuItem key={`${color.name}-${color.id}`} value={color.id}>
											{color.name}
										</MenuItem>
									);
								})}
							</RHFSelect> */}
							<RHFSelect name='productSize' label='Velicina' variant='outlined' defaultValue={''} fullWidth>
								{sizes.map((size) => {
									return (
										<MenuItem key={`${size.name}-${size.id}`} value={size.id}>
											{size.name}
										</MenuItem>
									);
								})}
							</RHFSelect>
							<RHFTextField name='quantity' type='number' label='Količina' />

							<Button variant='outlined' color='secondary' type='submit'>
								Dodaj
							</Button>
						</Stack>
					</FormProvider>
				</Box>
			</Popover>
		</>
	);
};

export default QuickAddToCartButton;
