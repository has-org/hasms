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
import { ProductContext } from '@/context/ProductContext/ProductContext';

type FormValuesProps = {
	productColor: number | string;
	productSize: number | string;
	quantity: string | number;
	afterSubmit?: string;
};

const addToCartSchema = object({
	// productColor: number().or(string()),
	productSize: number().or(string().min(1, 'Izaberite velicinu')),
	quantity: string().min(1, ''),
});

const QuickAddToCartButton = ({ product }: { product: IProduct }) => {
	const { addToCart } = useContext(CartContext);
	const {selectedColor, selectedImage} = useContext(ProductContext)

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
		const { productSize, quantity } = values;
		const selectedSize = sizes.find((size) => size.id === productSize);

		const {variants: [{product_prices = []}]} = product

		if (!selectedSize || !selectedColor) return;

		const imageFallback = selectedImage ? `${selectedImage.name}.${selectedImage.extension}` : '/no-image.jpg'; 

		const cartProduct = {
			id: product.id,
			cartItemId: '',
			name: product.name,
			code: product.code,
			description: product.description,
			manufacturer: product.manufacturer,
			category_id: product.category_id,
			workspace_id: product.workspace_id,
			price: product_prices[0].price,
			currency: product_prices[0].currency,
			taxAmount: product_prices[0].tax_amount,
			priceWithoutTax: product_prices[0].price_without_tax,
			quantity: Number(quantity),
			color: selectedColor,
			size: selectedSize,
			image: imageFallback,
		};


		addToCart(cartProduct);
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
