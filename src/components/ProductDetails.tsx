'use client'
import { Product } from "@/types/Product";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ColoredDot } from "@/components/ColoredDot";
import { Color as ColorType } from "@/types/Color";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";
import { Form } from "./Form";
import ReactSelect from "react-select";
import { CartContext } from "@/context/CartContext/CartContext";
import { Controller, SubmitHandler, useForm, useFormContext } from "react-hook-form";

type ProductProps = {
    product: Product;
}

const Text = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#1A2027' : 'theme.palette.text.primary',
    '@media (max-width:600px)': {
        fontSize: '2em',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'center',
    },
    '@media (max-width:1024px)': {
        fontSize: '3em',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'center',
    },
}))



export const ProductDetails = ({ product }: ProductProps) => {
    const productSizes = product?.variants[0]?.sizes
    const productColors = product?.variants[0]?.colors
    const [selectedProductSize, setSelectedProductSize] = useState(productSizes[0])
    const { items, addToCart } = useContext(CartContext)
    const defaultSizePlaceholder = { value: 'XS', label: 'XS' }
    const { handleSubmit, control } = useForm<any>();

    const onSubmitHandler: SubmitHandler<any> = (values: any, e?: React.BaseSyntheticEvent
    ) => {
        const color = productColors.find((color: ColorType) => color.id === values.color.id) || productColors[0]
        const size = productSizes.find((size: any) => size.id === values.size.id) || productSizes[0]
        addToCart({ ...product, color, size })
    };

    if (!product) return <>No product</>
    return (
        <Box>
            <Text variant="h2" className="product-name" >
                {product.name}
            </Text>
            <Box className="product-code flex gap-x-2">
                <Text className="product-code-key">
                    Šifra:
                </Text>

                <Text className="product-code-value">
                    {product.code}
                </Text>
            </Box>
            <Box className="product-brand flex gap-x-2">
                <Text className="product-brand-key">
                    Brend:
                </Text>

                <Text className="product-brand-value">
                    {product.manufacturer}
                </Text>
            </Box>
            <Box className="product-price flex gap-x-2">
                <Text className="product-price-key">
                    Cijena
                </Text>

                <Text className="product-price-value">
                    {product.price}
                </Text>
                <Text className="product-currency">
                    {product.currency}
                </Text>
            </Box>

            <Box className="variants-wrap flex items-center gap-x-2">
                <Text className="product-colors-title">
                    Boja:
                </Text>
                {productColors.map((color: ColorType, index: number) => {
                    return (
                        <span key={index} className="variant-color">
                            <ColoredDot color={color} />
                        </span>
                    )
                })}
            </Box>
            <Box className="product-price flex gap-x-2 items-center">
                <Text className="product-size-title">
                    Veličina:
                </Text>
                <Box
                    component='form'
                    onSubmit={handleSubmit(onSubmitHandler)}
                >
                    <Controller
                        name="size"
                        control={control}
                        rules={{ required: 'Size is required' }}
                        render={({ field }) => (
                            <ReactSelect
                                isClearable
                                {...field}
                                placeholder="Select size"
                                options={productSizes.map(item => { return { id: item.id, label: item.name, value: item.name } })}
                            />
                        )}
                    />

                    <Controller
                        name="color"
                        control={control}
                        rules={{ required: 'Color is required' }}
                        render={({ field }) => (
                            <ReactSelect
                                isClearable
                                {...field}
                                placeholder="Select color"
                                options={productColors.map(item => { return { id: item.id, label: item.name, value: item.name } })}
                            />
                        )}
                    />

                    <Button className="" type="submit">
                        <Text className="product-description">
                            Dodaj u korpu
                        </Text>
                    </Button>
                </Box>
            </Box>
            <Box className="product-price flex gap-x-2">
                <Text className="product-description">
                    {product.description}
                </Text>

            </Box>

            <Text className="product-description-title">
                Opis:
            </Text>
        </Box>
    );
};
