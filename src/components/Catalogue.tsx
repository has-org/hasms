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
        {/* <Card elevation={0}  >
          <CardMedia sx={{ position: 'relative' }}>
            <Image
              src={catalogue?.image ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${catalogue.image}` : 'https://placehold.co/600x400'}
              width={200}
              height={catalogue?.primary ? 200 : 100}
              alt="Catalogue image"
            />
          </CardMedia>
        </Card > */}
        
        <CardMedia sx={{ position: 'relative' }}>
          <Image
            src={catalogue?.image ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${catalogue.image}` : 'https://placehold.co/600x400'}
            width={catalogue.primary ? 550 : 250}
            height={catalogue.primary ? 400 : 150}
            alt="Catalogue image"
            style={{ objectFit: 'cover' }}
          />
        </CardMedia>
      </Link>

    </Box >
  );
}


{/* <Box sx={{ position: 'relative', height: '100px', width: '150px', objectFit: 'cover' }}>
          <Image
            src={catalogue?.image ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${catalogue.image}` : 'https://placehold.co/600x400'}
            alt="green iguana"
            fill
          >

          </Image>
            </Box> */}
{/* <CardMedia
            component="img"
            src={catalogue?.image ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${catalogue.image}` : 'https://placehold.co/600x400'}
            alt="green iguana"
            sx={{
              border: 'none',
            }}
          /> */}

{/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent> */}

      //     <CardMedia sx={{ position: 'relative', width: '768px', height: catalogue.primary ? '500px' : '250px' }}>
      //     <Image
      //       src={catalogue?.image ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${catalogue.image}` : 'https://placehold.co/600x400'}
      //       fill
      //       alt="Catalogue image"
      //       style={{ objectFit: 'cover' }}
      //     />
      // </CardMedia>

    //   <CardMedia sx={{ position: 'relative' }}>
    //   <Image
    //     src={catalogue?.image ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${catalogue.image}` : 'https://placehold.co/600x400'}
    //     width={catalogue.primary ? 768 : 500}
    //     height={catalogue.primary ? 400 : 250}
    //     alt="Catalogue image"
    //     style={{ objectFit: 'cover' }}
    //   />
    // </CardMedia>