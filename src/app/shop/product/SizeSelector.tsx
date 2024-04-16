'use client';

import { ISize } from '@/types/ISize';
import { Stack, Box, Typography, Button } from '@mui/material';
import { useState, } from 'react';

export default function SizeSelector({
  sizes,
  setSelectedSize,
  selectedSize,
}: {
  sizes: ISize[];
  setSelectedSize: (sizeName: string) => void;
  selectedSize: string;
}) {
  return (
    <Stack spacing={0.5}>
      <Box>
        <Typography
          className='product-size-title'
          color='#ACACAC'
          fontSize='14px'
        >
          Veličina: {selectedSize}
        </Typography>
        <Box component='form'>
          <Stack direction='row' spacing={1}>
            {sizes.map((size) =>
              size.quantity > 0 ? (
                <Button
                  key={size.id}
                  variant='outlinedTransparent'
                  color='secondary'
                  style={{ width: '32px', height: '32px', minWidth: '32px' }}
                  onClick={() => setSelectedSize(size.name)}
                  value={size.name}
                  sx={{
                    border:
                      selectedSize === size.name
                        ? '2px solid #00D0FD'
                        : '2px solid transparent',
                  }}
                >
                  {size.name}
                </Button>
              ) : (
                <Button
                  key={size.id}
                  variant='outlinedTransparent'
                  color='secondary'
                  style={{ width: '32px', height: '32px', minWidth: '32px' }}
                  disabled
                  sx={{ border: '2px solid #ACACAC' }}
                >
                  {size.name}
                </Button>
              ),
            )}
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
