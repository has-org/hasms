'use client';
import { ProductContext } from '@/context/ProductContext/ProductContext';
import { IImage } from '@/types/IImage';
import Image from 'next/image';
import { useContext } from 'react';

export const SelectedImage = ({ defaultImage }: { defaultImage?: IImage | null }) => {
	const { selectedImage } = useContext(ProductContext);

	const defaultImageString = defaultImage ? `${defaultImage.name}.${defaultImage.extension}` : '/no-image.jpg';

	const displayImage = !!selectedImage ? `${selectedImage.name}.${selectedImage.extension}` : defaultImageString;

	return (
		<Image
			src={displayImage}
			alt='product image'
			fill
			style={{ borderRadius: '16px' }}
			sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
		/>
	);
};
