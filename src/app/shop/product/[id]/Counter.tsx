'use client';

import { Stack, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(1);
  function hadleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
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

      <Button variant='outlined' color='secondary' size='large'>
        <Typography fontSize='14px' fontWeight='bold'>
          + Dodaj u korpu
        </Typography>
      </Button>
    </Stack>
  );
}
