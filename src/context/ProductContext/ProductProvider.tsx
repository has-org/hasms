'use client';
import { useCallback, useEffect, useMemo, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';
// import axiosInstance from "@/utils/axios";
import { IProduct } from '@/types/IProduct';
import { ProductReducer } from './ProductReducer';
import { ProductContext } from './ProductContext';
import { IImage } from '@/types/IImage';
export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(ProductReducer, {
		selectedImage: null,
		selectedSize: null,
		selectedColor: null,
	});

	const selectImage = useCallback((image: IImage) => {
		dispatch({ type: 'SELECT_IMAGE', payload: { image } });
	}, []);

	const selectSize = useCallback((size: any) => {
		dispatch({ type: 'SELECT_SIZE', payload: { size } });
	}, []);

	const selectColor = useCallback((color: any) => {
		dispatch({ type: 'SELECT_COLOR', payload: { color } });
	}, []);

	const memoizedValue = useMemo(
		() => ({
			selectedImage: state.selectedImage,
			selectedSize: state.selectedSize,
			selectedColor: state.selectedColor,
			selectImage,
			selectSize,
			selectColor,
		}),
		[state.selectedImage, state.selectedSize, state.selectedColor, selectImage, selectSize, selectColor],
	);

	return <ProductContext.Provider value={memoizedValue}>{children}</ProductContext.Provider>;
};
