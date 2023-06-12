


'use client'
import { useRef } from 'react';
import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { Category as CategoryType } from "@/types/Category";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Box from "./Box";


type ContainerProps = {
    containerItem: CatalogueType | CategoryType;

};



export const MainContainer = ({ containerItem }: ContainerProps) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const windowWidth = windowSize.current[0]
    const windowHeight = windowSize.current[1]
    // let urlString = item?.type === 'blog' ? `/${item?.type}` : `/shop/${item?.type}`

    return (
        <Box sx={{

        }}
        >
            <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                {containerItem.name}
            </Typography>

        </Box >
    );
}
