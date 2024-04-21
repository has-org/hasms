'use client';
import { IColor } from '@/types/IColor';
import { IImage } from '@/types/IImage';
import { ISize } from '@/types/ISize';
import { createContext } from 'react';

export const ProductContext = createContext<{
	selectedImage: IImage | null;
	selectedSize: ISize | null;
	selectedColor: IColor | null;
	selectImage: (image: IImage) => void;
	selectSize: (size: ISize) => void;
	selectColor: (color: IColor) => void;
}>({
	selectedImage: null,
	selectedSize: null,
	selectedColor: null,
	selectImage: (image: IImage) => {},
	selectSize: (size: ISize) => {},
	selectColor: (color: IColor) => {},
});
