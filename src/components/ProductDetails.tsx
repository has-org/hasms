'use client';

import { ColoredDot } from '@/components/ColoredDot';
import { Color as ColorType } from '@/types/Color';
import {
  Box,
  Button,
  Stack,
  Typography,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { useContext, useState } from 'react';
import ReactSelect from 'react-select';
import Image from 'next/image';
import { CartContext } from '@/context/CartContext/CartContext';
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { IProduct } from '@/types/IProduct';
import { getProductVariants } from '@/services/apiService';

type ProductProps = {
  product: IProduct;
};

const Text = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === 'dark' ? '#1A2027' : 'theme.palette.text.primary',
  '@media (max-width:600px)': {
    fontSize: '2em',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  },
  '@media (max-width:1024px)': {
    fontSize: '3em',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  },
}));

export const ProductDetails = ({ product }: ProductProps) => {
  const productSizes = product?.variants[0]?.sizes;
  const productColors = product?.variants[0]?.colors;
  const [selectedProductSize, setSelectedProductSize] = useState(
    productSizes[0],
  );
  const { items, addToCart } = useContext(CartContext);
  const defaultSizePlaceholder = { value: 'XS', label: 'XS' };
  const { handleSubmit, control } = useForm<any>();
  const productImages: any = [];
  for (const variant of product.variants) {
    variant.images.map((image) => productImages.push(image));
  }
  const [count, setCount] = useState(1);

  function hadleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const onSubmitHandler: SubmitHandler<any> = (
    values: any,
    e?: React.BaseSyntheticEvent,
  ) => {
    const color =
      productColors.find((color: ColorType) => color.id === values.color.id) ||
      productColors[0];
    const size =
      productSizes.find((size: any) => size.id === values.size.id) ||
      productSizes[0];
    addToCart({ ...product, color, size });
  };

  if (!product) return <>No product</>;
  return (
    <Container maxWidth='lg'>
      <Stack direction='row' spacing={4}>
        <Stack>
          {productImages[0].url ? (
            <Image
              src={productImages[0].url}
              alt='product image'
              width={470}
              height={352}
              style={{ borderRadius: '16px' }}
            />
          ) : (
            <Image
              src={'/images/no-image.jpg'}
              alt='product image'
              width={470}
              height={352}
              style={{ borderRadius: '16px' }}
            />
          )}
        </Stack>

        <Stack spacing={2}>
          <Box>
            <Text fontSize='16px' color='#ACACAC'>
              {product.manufacturer}
            </Text>
            <Text fontSize='20px' fontWeight='bold' className='product-name'>
              {product.name}
            </Text>
          </Box>
          <Box>
            <Text
              className='product-price-value'
              fontSize='28px'
              fontWeight='bold'
              color='#00D0FD'
            >
              100 KM
            </Text>
          </Box>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Text
              className='product-colors-title'
              color='#ACACAC'
              fontSize='14px'
            >
              Izaberi boju:
            </Text>
            {productColors.map((color: ColorType, index: number) => {
              return (
                <span
                  key={index}
                  className='variant-color'
                  style={{ color: 'white', fontWeight: '500' }}
                >
                  {color.name}
                </span>
              );
            })}
          </Stack>

          <Stack direction='row'>
            {product.variants[0].images.map((miniPic) =>
              miniPic.url ? (
                <Image
                  src={miniPic.url}
                  alt='product image'
                  width={54}
                  height={50}
                  style={{ borderRadius: '16px' }}
                  key={`${product.id}_${product.variants[0].id}_${miniPic.id}`}
                />
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

          <Stack>
            <Box className='product-price flex gap-x-2 items-center'>
              <Text
                className='product-size-title'
                color='#ACACAC'
                fontSize='14px'
              >
                Veličina:
              </Text>
              <Box component='form' onSubmit={handleSubmit(onSubmitHandler)}>
                <Stack direction='row' spacing={1}>
                  <Button
                    variant='outlinedTransparent'
                    color='secondary'
                    style={{ width: '32px', height: '32px', minWidth: '32px' }}
                  >
                    S
                  </Button>
                  <Button
                    variant='outlinedTransparent'
                    color='secondary'
                    style={{ width: '32px', height: '32px', minWidth: '32px' }}
                  >
                    M
                  </Button>
                  <Button
                    variant='outlinedTransparent'
                    color='secondary'
                    style={{ width: '32px', height: '32px', minWidth: '32px' }}
                  >
                    L
                  </Button>
                  <Button
                    variant='outlinedTransparent'
                    color='secondary'
                    style={{ width: '32px', height: '32px', minWidth: '32px' }}
                  >
                    XL
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Stack>

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
          <Stack
            sx={{
              backgroundColor: '#262626',
              borderRadius: '16px',
              justifyContent: 'center',
              width: { xs: '100%', md: '660px' },
            }}
          >
            <Accordion>
              <AccordionSummary
                aria-controls='panel1-content'
                id='panel1-header'
                expandIcon={<ExpandMoreIcon />}
                sx={{ height: '61px' }}
              >
                <Typography fontWeight={600} fontSize='18px'>
                  Specifikacije
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={0.5}>
                  <Stack direction='row' justifyContent='space-between'>
                    <Typography variant='body2'>Proizvođač</Typography>
                    <Typography variant='body2'>
                      {product.manufacturer}
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction='row'
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='body2'>Model</Typography>
                    <Typography variant='body2'>{product.model}</Typography>
                  </Stack>
                  <Divider />

                  <Stack
                    direction='row'
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='body2'>Serijski br.</Typography>
                    <Typography variant='body2'>
                      Serijski br.Serijski br.
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction='row'
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='body2'>Boja</Typography>
                    {productColors.map((color: ColorType, index: number) => {
                      return (
                        <Typography key={index} className='variant-color'>
                          {color.name}
                        </Typography>
                      );
                    })}
                  </Stack>
                  <Divider />
                  <Stack
                    direction='row'
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='body2'>Veličina</Typography>
                    <Typography variant='body2'>VeličinaVeličina</Typography>
                  </Stack>
                  <Divider />
                  <Stack
                    direction='row'
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='body2'>Dostupnost</Typography>
                    <Typography variant='body2'>
                      DostupnostDostupnost
                    </Typography>
                  </Stack>
                  <Divider />
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Stack>

          <Stack
            sx={{
              backgroundColor: '#262626',
              borderRadius: '16px',
              justifyContent: 'center',
            }}
          >
            <Accordion>
              <AccordionSummary
                aria-controls='panel1-content'
                id='panel1-header'
                expandIcon={<ExpandMoreIcon />}
                sx={{ height: '61px' }}
              >
                <Typography fontWeight={600} fontSize='18px'>
                  Opis
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='h4' textAlign={'center'}>
                  sadasd
                </Typography>
                <Typography variant='body1' textAlign={'justify'}>
                  asdasdas
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
