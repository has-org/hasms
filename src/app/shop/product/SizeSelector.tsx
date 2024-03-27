'use client'

import { Stack, Box, Typography, Button } from '@mui/material';
import { useState } from 'react';

export default function SizeSelector() {

const[sizeSelection, setSizeSelection]=useState("M")

function selectSize(e: any){
    const selectedSize=e.target.value;
    setSizeSelection(selectedSize);
}
  return (
    <Stack>
      <Box className='product-price flex gap-x-2 items-center'>
        <Typography
          className='product-size-title'
          color='#ACACAC'
          fontSize='14px'
        >
          Veličina: {sizeSelection}
        </Typography>
        <Box component='form'>
          <Stack direction='row' spacing={1}>
            <Button
              variant='outlinedTransparent'
              color='secondary'
              style={{ width: '32px', height: '32px', minWidth: '32px' }}
              onClick={selectSize}
              value='S'
              sx={{
                border:
                  sizeSelection === 'S'
                    ? '2px solid #00D0FD'
                    : '2px solid transparent',
              }}
            >
              S
            </Button>
            <Button
              variant='outlinedTransparent'
              color='secondary'
              style={{ width: '32px', height: '32px', minWidth: '32px' }}
              onClick={selectSize}
              value='M'
              sx={{
                border:
                  sizeSelection === 'M'
                    ? '2px solid #00D0FD'
                    : '2px solid transparent',
              }}
            >
              M
            </Button>
            <Button
              variant='outlinedTransparent'
              color='secondary'
              style={{ width: '32px', height: '32px', minWidth: '32px' }}
              onClick={selectSize}
              value='L'
              sx={{
                border:
                  sizeSelection === 'L'
                    ? '2px solid #00D0FD'
                    : '2px solid transparent',
              }}
            >
              L
            </Button>
            <Button
              variant='outlinedTransparent'
              color='secondary'
              style={{ width: '32px', height: '32px', minWidth: '32px' }}
              onClick={selectSize}
              value='XL'
              sx={{
                border:
                  sizeSelection === 'XL'
                    ? '2px solid #00D0FD'
                    : '2px solid transparent',
              }}
            >
              XL
            </Button>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}