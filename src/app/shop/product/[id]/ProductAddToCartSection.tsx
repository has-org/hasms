'use client';

import React, { useState, useContext } from 'react';
import SizeSelector from '../SizeSelector';
import Counter from './Counter';
import { CartContext } from '@/context/CartContext/CartContext';
import { IProduct } from '@/types/IProduct';
import { Typography, Button, Stack } from '@mui/material';

export default function ProductAddToCartSection({ product }: { product: IProduct }) {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('M');
  const [count, setCount] = useState(1);
  function hadleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    }
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      const selectedItem = {
        ...product,
        size: selectedSize,
        quantity: count,
        selectedColor: {
          id: 1,
          created_at: '2024-04-02T15:34:17.095Z',
          updated_at: '2024-04-02T15:34:17.095Z',
          name: 'CRNA',
          value: '#000000',
        },
      };
      addToCart(selectedItem);
      setSelectedSize('M');
      setCount(1);
    } else {
      alert('Please select size before adding to cart.');
    }
  };

  return (
    <Stack spacing={2}>
      
      <SizeSelector
        sizes={product.variants[0].sizes}
        setSelectedSize={setSelectedSize}
        selectedSize={selectedSize}
      />
      <Stack direction="row" spacing={0.5}>
      <Counter
        count={count}
        setCount={setCount}
        hadleIncrease={hadleIncrease}
        handleDecrease={handleDecrease}
      />
      <Button
        variant='outlined'
        color='secondary'
        size='large'
        onClick={handleAddToCart}
      >
        <Typography fontSize='14px' fontWeight='bold'>
          + Dodaj u korpu
        </Typography>
      </Button>{' '}
      </Stack>
    </Stack>
  );
}
