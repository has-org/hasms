'use client';

import { Color as ColorType } from '@/types/Color';
import { Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { IProduct } from '@/types/IProduct';

export default function ColorSelector({
  colors,
  product,
}: {
  colors: ColorType[];
  product: IProduct;
}) {
  const [colorSelection, setColorSelection] = useState('');

  return (
    <Stack spacing={1}>
      <Stack direction='row' spacing={1} alignItems='center'>
        <Typography
          className='product-colors-title'
          color='#ACACAC'
          fontSize='14px'
        >
          Izaberi boju:
        </Typography>
        {colors.map((color: ColorType, index: number) => (
          <span
            key={index}
            className='variant-color'
            style={{ color: 'white', fontWeight: '500' }}
          >
            {color.name}
          </span>
        ))}
      </Stack>
      <Stack direction='row' spacing={0.5} alignItems='center'>
        {product.variants[0].images.map((miniPic) =>
          miniPic.url ? (
            <Button>
              <Image
                src={miniPic.url}
                alt='product image'
                width={54}
                height={50}
                style={{ borderRadius: '16px' }}
                key={`${product.id}_${product.variants[0].id}_${miniPic.id}`}
              />
            </Button>
          ) : (
            <Image
              src={'/images/no-image.jpg'}
              alt='product image'
              width={54}
              height={50}
              style={{ borderRadius: '16px' }}
              key={`${product.id}_${product.variants[0].id}_${miniPic.id}`}
            />
          ),
        )}
      </Stack>
    </Stack>
  );
}
