'use client'
import { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import Box from "./MUI/Box";
import { Blog as BlogType } from '@/types/Blog';
import { Card, CardContent, Typography } from '@mui/material';


type BlogProps = {
  blog: BlogType;
};



export const BlogCard = ({ blog }: BlogProps) => {

  const blogUrl = blog.url ? blog.url : ''
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <Link href={`${encodeURIComponent(blogUrl)}`} >
        <Card>
          {
           <Image
              src={blog?.image ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${blog.image}` : 'https://placehold.co/600x400'}
              width={600}
              height={600}
              style={{
                width: '300px',
                height: '250px',
                objectFit: 'contain',
                borderRadius: '24px',
              }}
              alt="Catalogue image"
            />
          }
          {/* {
            !isMobile && <Image
              src={blog?.image ? `${process.env.NEXT_PUBLIC_API_IMG_HOST}${blog.image}` : 'https://placehold.co/600x400'}
              width={600}
              height={600}
              style={{
                width: '400px',
                height: '400px',
                objectFit: 'contain',
                borderRadius: '24px',
              }}
              alt="Catalogue image"
            />
          } */}

          <CardContent>
            <Typography sx={{ fontSize: '24px', fontFamily: 'sans-serif' }} color="text.primary" gutterBottom>
              {blog.title}
            </Typography>
            <Typography sx={{
              fontSize: '18px',
              fontFamily: 'sans-serif',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '4',
              WebkitBoxOrient: 'vertical',
            }}
              color="text.secondary"
              gutterBottom>
              {blog.content}
            </Typography>
          </CardContent>
        </Card>
      </Link>

    </Box >
  );
}
