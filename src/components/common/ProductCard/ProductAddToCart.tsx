'use client';

import { Stack, Button, Typography } from '@mui/material';
import { useState, useContext } from 'react';
import FormProvider from '@/components/hook-form/FormProvider';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { number, object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RHFTextField } from '@/components/hook-form';
import { ProductContext } from '@/context/ProductContext/ProductContext';
import { CartContext } from '@/context/CartContext/CartContext';
import { IProduct } from '@/types/IProduct';
import { IProductPrice } from '@/types/IProductPrice';

type FormValuesProps = {
	quantity: string | number;
	afterSubmit?: string;
};

const addToCartSchema = object({
	quantity: number().or(string()),
});

export default function ProductAddToCart({ product, prices }: { product: IProduct; prices: IProductPrice[] }) {
	const { selectedColor, selectedSize, selectedImage } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);

	const methods = useForm<FormValuesProps>({
		resolver: zodResolver(addToCartSchema),
		defaultValues: {
			quantity: 1,
		},
	});
	const { reset, handleSubmit, setValue, getValues } = methods;

	const handleDecrease = () => {
		const quantity = Number(getValues('quantity'));
		if (quantity > 1) {
			setValue('quantity', quantity - 1);
		}
	};

	const hadleIncrease = () => {
		const quantity = Number(getValues('quantity'));
		setValue('quantity', quantity + 1);
	};

	const onSubmit: SubmitHandler<any> = async (values: any, e?: React.BaseSyntheticEvent) => {
		const { quantity } = values;

		//add snackbar errror

		const defaultImage = selectedImage ? `${selectedImage.name}.${selectedImage.extension}` : '/no-image.jpg';

		const cartProduct = {
			id: product.id,
			cartItemId: '',
			name: product.name,
			code: product.code,
			model: product.model,
			description: product.description,
			manufacturer: product.manufacturer,
			category: product.category.name,
			category_id: product.category_id,
			subcategory: product.subcategory.name,
			subcategory_id: product.subcategory.id,
			workspace_id: product.workspace_id,
			price: prices[0].price,
			currency:  prices[0].currency,
			taxPercentage: prices[0].tax_percentage,
			taxAmount: prices[0].tax_amount,
			priceWithoutTax: prices[0].price_without_tax,
			quantity: Number(quantity),
			color: selectedColor?.name ?? 'N/A',
			size: selectedSize?.name ?? 'N/A',
			image: defaultImage,
			tags: product.tags.map(tag => tag.name)
		};

		addToCart(cartProduct);
	};

	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack direction='row' alignItems={'center'} spacing={1}>
				<Button variant='text' color='secondary' onClick={handleDecrease} style={{ width: '32px', height: '43px' }}>
					<Typography fontSize={'24px'}>-</Typography>
				</Button>
				<RHFTextField name='quantity' type='number' label='Količina' sx={{ width: '78px' }} />
				<Button variant='text' color='secondary' onClick={hadleIncrease} style={{ width: '32px', height: '43px' }}>
					<Typography fontSize={'24px'}>+</Typography>
				</Button>

				<Button variant='contained' color='secondary' type='submit'>
					+ Dodaj u korpu
				</Button>
			</Stack>
		</FormProvider>
	);
}
