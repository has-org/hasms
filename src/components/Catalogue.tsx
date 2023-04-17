'use client'
import { useRef } from 'react';
import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Box from "./MUI/Box";


type CatalogueProp = {
  catalogue: CatalogueType;
  primary?: boolean
};



export const Catalogue = ({ catalogue }: CatalogueProp) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const windowWidth = windowSize.current[0]
  const windowHeight = windowSize.current[1]
  let urlString = catalogue?.type === 'blog' ? `/${catalogue?.type}` : `/shop/${catalogue?.type}`

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <Link href={`${urlString}/${encodeURIComponent(catalogue.id)}`} >
        <CardMedia sx={{ position: 'relative' }}>
          <Image
            src={catalogue?.image ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${catalogue.image}` : 'https://placehold.co/600x400'}
            width={catalogue.primary ? 450 : 200}
            height={catalogue.primary ? 400 : 150}
            style={{
              width: catalogue.primary ? 450 : 200,
              height: catalogue.primary ? 450 : 200,
              objectFit: 'cover',
              borderRadius: '10px',
            }}
            alt="Catalogue image"
          />
        </CardMedia>
      </Link>

    </Box >
  );
}
