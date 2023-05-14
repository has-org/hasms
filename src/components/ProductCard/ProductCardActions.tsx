'use client'


import { Product } from "@/types/Product";
import { Box, Stack } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { CartContext } from "@/hooks/CartContext/CartContext";

type ProductProps = {
    product: Product;
}

export const ProductCardActions = ({ product }: ProductProps) => {
    const { items, addToCart } = useContext(CartContext)

    return (
        <Box className="product-card-actions flex">
              
            <Stack>
                <Box onClick={() => addToCart(product)}>
                    <AddShoppingCartIcon />
                </Box>
            </Stack>

        </Box >
    );
};
