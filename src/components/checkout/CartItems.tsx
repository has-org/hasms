'use client';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Button from '@mui/material/Button/Button';
import { CartContext } from '@/context/CartContext/CartContext';
import { useContext } from 'react';

const CartItems = () => {
  const { items, totalAmount, removeFromCart } = useContext(CartContext);

  return (
    <Box
      sx={{
        padding: 1,
      }}
    >
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant={'h6'}>Korpa</Typography>
      </Stack>
      <Stack>
        <List>
          <Divider color='black' />
          {items?.map((item: any) => {
            return (
              <Box
                key={`${item.product_code}-${item.color?.name}-${item.size?.name}`}
              >
                <ListItem sx={{ p: 0, m: 0 }}>
                  <Stack
                    sx={{
                      width: '100%',
                      justifyContent: 'space-between',
                    }}
                    direction='row'
                    alignItems='center'
                    spacing={1}
                  >
                    <Stack direction='row' alignItems='center' spacing={1}>
                      {item.product_image ? (
                        <Image
                          src={item.product_image}
                          width={48}
                          height={48}
                          alt='asd'
                          style={{ borderRadius: '8px' }}
                        />
                      ) : (
                        <Image
                          src={'/images/no-image.jpg'}
                          width={48}
                          height={48}
                          alt='asd'
                          style={{ borderRadius: '8px' }}
                        />
                      )}
                      <Stack>
                        <Typography variant='body2' fontSize={12}>
                          {item.product_manufacturer}
                        </Typography>
                        <Stack
                          direction='row'
                          alignItems='center'
                          spacing={1}
                        ></Stack>

                        <Typography variant='body2'>
                          {item.product_price} KM
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </ListItem>
                <Divider color='black' />
              </Box>
            );
          })}
        </List>
      </Stack>

      <Stack direction='row' justifyContent={'space-between'}>
        <Typography>Ukupno:</Typography>
        <Typography pr={1} color='primary.main' sx={{ fontSize: '18px' }}>
          {totalAmount} KM
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'flex',
          gap: 3,
          width: '100%',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
        }}
      >
        <Link
          href='/checkout'
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <Button variant='outlined' color='secondary' fullWidth>
            <Typography>Placanje</Typography>
          </Button>
        </Link>
        <Link href='/cart' style={{ textDecoration: 'none', width: '100%' }}>
          <Button variant='outlinedTransparent' color='secondary' fullWidth>
            <Typography>Pregled</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CartItems;
