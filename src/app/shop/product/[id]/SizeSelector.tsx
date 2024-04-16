'use client'

import { ISize } from '@/types/ISize';
import { Stack, Box, Typography, Button } from '@mui/material';
import { useState } from 'react';

export default function SizeSelector({sizes}:{sizes:ISize[]}) {

const[sizeSelection, setSizeSelection]=useState("M")


function selectSize(selectedSize: string) {
  setSizeSelection(selectedSize);
}
  return (
    <Stack>
      <Box>
        <Typography
          className='product-size-title'
          color='#ACACAC'
          fontSize='14px'
        >
          Veličina: {sizeSelection}
        </Typography>
        <Box component='form'>
          <Stack direction='row' spacing={1}>
            {sizes.map((size) => (
              <Button
                key={size.id}
                variant='outlinedTransparent'
                color='secondary'
                style={{ width: '32px', height: '32px', minWidth: '32px' }}
                onClick={() => selectSize(size.name)}
                value={size.name}
                sx={{
                  border:
                    sizeSelection === size.name
                      ? '2px solid #00D0FD'
                      : '2px solid transparent',
                }}
              >
                {size.name}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}