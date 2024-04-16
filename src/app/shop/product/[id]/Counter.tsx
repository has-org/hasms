'use client';

import { Stack, Button, Typography } from '@mui/material';
import { useState, useContext } from 'react';
import { CartContext } from '@/context/CartContext/CartContext';

export default function Counter({
  count,
  setCount,
  handleDecrease,
  hadleIncrease,
}: {
  count: number;
  setCount: (selectedCount: number) => void;
  handleDecrease: () => void;
  hadleIncrease: () => void;
}) {
  return (
    <Stack direction='row' spacing={2}>
      <Button
        variant='text'
        color='secondary'
        onClick={handleDecrease}
        style={{ width: '32px', height: '43px', minWidth: '32px' }}
      >
        -
      </Button>
      <Button
        variant='contained'
        disabled
        style={{
          width: '43px',
          height: '43px',
          minWidth: '43px',
          color: 'white',
        }}
      >
        {count}
      </Button>
      <Button
        variant='text'
        color='secondary'
        onClick={hadleIncrease}
        style={{ width: '32px', height: '43px', minWidth: '32px' }}
      >
        +
      </Button>

      
    </Stack>
  );
}
