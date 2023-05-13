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
  const isMobile = windowWidth < 900
  let urlString = `/shop/${catalogue?.type}`

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <Link href={`${urlString}/${encodeURIComponent(catalogue.id)}`} >
        {
          isMobile && <Image
            src={catalogue?.image?.length > 1 ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${catalogue.image}` : 'https://placehold.co/600x400'}
            width={500}
            height={500}
            style={{
              width: '300px',
              height: '300px',
              objectFit: 'contain',
              borderRadius: '24px',
            }}
            alt="Catalogue image"
          />
        }
        {
          !isMobile && <Image
            src={catalogue?.image?.length > 1 ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${catalogue.image}` : 'https://placehold.co/600x400'}
            width={catalogue.primary ? 600 : 300}
            height={catalogue.primary ? 600 : 300}
            style={{
              width: catalogue.primary ? '800px' : '300px',
              height: catalogue.primary ? '550px' : '250px',
              objectFit: 'contain',
              borderRadius: '24px',
            }}
            alt="Catalogue image"
          />
        }



      </Link>

    </Box >
  );
}
