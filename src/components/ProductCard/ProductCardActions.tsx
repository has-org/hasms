'use client'


import { Product } from "@/types/Product";
import { Box, Stack } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { CartContext } from "@/context/CartContext/CartContext";
import { Color } from "@/types/Color";
import { Size } from "@/types/Size";

type ProductProps = {
    product: Product;
    selectedColor: Color;
    selectedSize: Size;
}

export const ProductCardActions = ({ product, selectedColor, selectedSize }: ProductProps) => {
    const { items, addToCart } = useContext(CartContext)

    const handleOnClick = () => {
        addToCart({ ...product, color: selectedColor, size: selectedSize })
    }

    return (
        <Box className="product-card-actions flex">

            <Stack>
                <Box onClick={() => handleOnClick()}>
                    <AddShoppingCartIcon />
                </Box>
            </Stack>

        </Box >
    );
};
