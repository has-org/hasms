'use client'
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { ProductImagePreview } from "./ProductImagePreview";
import { useState } from "react";

const Thumbnail = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const ProductThumbnailsList = ({ variants }: any) => {
    const [selectedImage, setSelectedImage] = useState(variants.images[0])


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    {
                        variants.images.map((image: any, index: number) => {
                            return (
                                <Thumbnail key={index}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_API_IMG_HOST}${image.url}`}
                                        alt={image.alt}
                                        width={150}
                                        height={150}
                                    />
                                </Thumbnail>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <ProductImagePreview image={selectedImage} />
                </Grid>
            </Grid>

        </Box>
    )
}