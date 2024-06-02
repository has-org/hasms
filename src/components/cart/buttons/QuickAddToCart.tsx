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
	productColor: number().or(string().min(1, 'Izaberite boju')),
	productSize: number().or(string().min(1, 'Izaberite velicinu')),
	quantity: string().min(1, ''),
});

const QuickAddToCartButton = ({ product, selectProductImage }: { product: IProduct; selectProductImage: any }) => {
	const { addToCart } = useContext(CartContext);

	const {
		variants: [{ sizes, colors, variant_images }],
	} = product;

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
		const { productSize, productColor, quantity } = values;
		const selectedSize = sizes.find((size) => size.id === productSize);
		const selectedColor = colors.find((color) => color.id === productColor);
		const selectedImage = variant_images.find((image) => image.color_id === productColor);
		const {
			variants: [{ product_prices = [] }],
		} = product;

		if (!selectedSize || !selectedColor) return;
		const image =
			selectedImage?.images && selectedImage?.images?.length > 0
				? `${selectedImage?.images[0]?.name}.${selectedImage?.images[0]?.extension}`
				: '/no-image.jpg';

		const cartProduct = {
			id: product.id,
			cartItemId: '',
			name: product.name,
			code: product.code,
			description: product.description,
			manufacturer: product.manufacturer,
			workspace_id: product.workspace_id,
			price: parseFloat(product_prices[0].price),
			currency: product_prices[0].currency,
			taxAmount: parseFloat(product_prices[0].tax_amount),
			priceWithoutTax: parseFloat(product_prices[0].price_without_tax),
			taxPercentage: product_prices[0].tax_percentage,
			quantity: Number(quantity),
			color: selectedColor?.name ?? 'N/A',
			size: selectedSize?.name ?? 'N/A',
			image: image,
			model: product.model,
			category: product.category.name,
			category_id: product.category.id,
			subcategory: product.subcategory.name,
			subcategory_id: product.subcategory.id,
			tags: product.tags.map((tag) => tag.name),
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
							{colors.length > 0 && (
								<RHFSelect
									name='productColor'
									label='Boja'
									variant='outlined'
									defaultValue={0}
									fullWidth
									handleChange={selectProductImage}
								>
									{colors.map((color) => {
										return (
											<MenuItem key={`${color.name}-${color.id}`} value={color.id}>
												{color.name}
											</MenuItem>
										);
									})}
								</RHFSelect>
							)}
							{sizes?.length > 0 && (
								<RHFSelect name='productSize' label='Velicina' variant='outlined' defaultValue={''} fullWidth>
									{sizes?.map((size) => {
										return (
											<MenuItem key={`${size.name}-${size.id}`} value={size.id}>
												{size.name}
											</MenuItem>
										);
									})}
								</RHFSelect>
							)}
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
