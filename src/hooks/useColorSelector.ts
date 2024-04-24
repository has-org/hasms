import { useContext, useEffect, useState } from 'react';
import { IProduct } from '@/types/IProduct';
import { ProductContext } from '@/context/ProductContext/ProductContext';
import { IImage } from '@/types/IImage';
import { IColor } from '@/types/IColor';
import { IVariantImage } from '@/types/IVariantImage';

export function useColorSelector({
	images,
	colors,
	variantImages,
}: {
	images?: IImage[];
	variantImages?: IVariantImage[];
	colors: IColor[];
}) {
	const { selectedColor, selectedImage, selectImage, selectColor } = useContext(ProductContext);
	function handleSelectColor(color: IColor) {
		selectColor(color);

		const image = variantImages?.find((variantImage) => variantImage.color_id === color.id);
		if (image) {
			selectImage(image.images[0]);
		} 
	}

	function handleSelectImage(image: IImage) {
		selectImage(image);
		const color = colors?.find((color) => color.id === image.id);
		if (color) {
			selectColor(color);
		}
	}

	useEffect(() => {
		if (colors.length > 0) {
			selectColor(colors[0]);
		}
		if (images && images.length > 0) {
			selectImage(images[0]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { selectedColor, selectedImage, handleSelectImage, handleSelectColor };
}
