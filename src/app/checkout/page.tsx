'use client';
import CartItems from '@/components/checkout/CartItems';
import CheckoutTabs from '@/components/checkout/CheckoutTabs';
import Iconify from '@/components/iconify/Iconify';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export default function CheckoutPage() {
  return (
    <Container maxWidth='lg'>
      <Stack spacing={1}>
        <Typography variant='h1' textAlign='center'>
          PLACANJE
        </Typography>
        <Stack
          direction='row'
          sx={{ alignItems: 'center', justifyContent: 'center' }}
          spacing={1}
        >
          <Iconify icon='mdi:clock-outline'></Iconify>
          <Typography variant='body2'>
            Prosjecno vreme za popunjavanje formulara je 5 minuta
          </Typography>
        </Stack>
      </Stack>
      <Grid container>
        <Grid xs={12} md={7}>
          <CheckoutTabs />
        </Grid>
        <Grid xs={12} md={5}>
          <CartItems />
        </Grid>
      </Grid>
    </Container>
  );
}
