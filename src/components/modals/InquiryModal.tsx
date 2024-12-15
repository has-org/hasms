'use client';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Typography,
  Divider,
  Button,
  InputLabel,
} from '@mui/material';
import { RHFTextField } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/FormProvider';
import { object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Iconify from '../iconify/Iconify';
import axios from '@/utils/axios';
import { ICatalogue } from '@/types/Catalogue';
import Scrollbar from '../scrollbar/Scrollbar';
import Box from '@mui/material/Box/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { toast } from 'react-toastify';

const orderInquirySchema = object({
  first_name: string()
    .min(1, 'Ime je obavezno polje')
    .max(20, 'Unijeli ste previse karaktera'),
  last_name: string()
    .min(1, 'Prezime je obavezno polje')
    .max(30, 'Unijeli ste previse karaktera'),
  country: string()
    .min(1, 'Drzava je obavezno polje')
    .max(50, 'Unijeli ste previse karaktera'),
  address: string()
    .min(1, 'Adresa je obavezno polje')
    .max(100, 'Unijeli ste previse karaktera'),
  city: string()
    .min(1, 'Grad je obavezno polje')
    .max(50, 'Unijeli ste previse karaktera'),
  phone_number: string()
    .min(1, 'Broj telefona je obavezno polje')
    .max(20, 'Unijeli ste previse karaktera'),
  email: string()
    .min(1, 'Email je obavezno polje')
    .max(100, 'Unijeli ste previse karaktera'),
  message: string()
    .min(1, 'Poruka je obavezno polje')
    .max(1000, 'Unijeli ste previse karaktera'),
});

export const InquiryModal = ({
  open,
  handleClose,
  catalogue,
}: {
  open: boolean;
  handleClose: VoidFunction;
  catalogue?: ICatalogue;
}) => {

  const methods = useForm<any>({
    resolver: zodResolver(orderInquirySchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      country: '',
      address: '',
      city: '',
      phone_number: '',
      email: '',
      message: '',
    },
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<any> = async (
    values: any,
    e?: React.BaseSyntheticEvent,
  ) => {
    if (catalogue) {
      const preparedObject = {
        ...values,
        code: catalogue.code,
        color: catalogue.color,
        model: catalogue.model,
      };
      const result = await axios.post('/sendInquiryProduct/', preparedObject);
      if (result.status === 200) {
        reset();
        handleClose();
        return toast.success('Upit poslan uspješno');
      }
      return toast.error('Upit nije poslan');
    }

    const result = await axios.post('/sendInquiry/', values);
    if (result.status === 200) {
      reset();
      handleClose();
      return toast.success('Upit poslan uspješno');
    }
    return toast.error('Upit nije poslan');
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='xl'
      sx={{ borderRadius: '24px' }}
    >
      <DialogTitle>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
            <Typography variant='h3'>Zatrazi ponudu</Typography>
          </Box>
          <Button onClick={() => handleClose()}>
            <Iconify icon='mdi:close' color='white' width={'30px'} />
          </Button>
        </Stack>
      </DialogTitle>
      <Divider />

      <Scrollbar sx={{ minWidth: { md: '1200px' }, minHeight: '60vh', py: 2 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <List sx={{ height: { md: '80vh' }, overflow: 'auto', paddingBottom: '24px' }}>
            <ListItem>
              <Stack
                spacing={2}
                direction={{ xs: 'column', md: 'row' }}
                sx={{ width: '100%' }}
              >
                <Stack sx={{ width: '100%' }}>
                  <InputLabel htmlFor='first_name' sx={{ paddingLeft: 1.5 }}>
                    Ime
                  </InputLabel>
                  <RHFTextField
                    id='first_name'
                    name='first_name'
                    type='text'
                    variant='filled'
                    placeholder='Ime'
                    size='small'
                    autoFocus
                    hiddenLabel
                    fullWidth
                  />
                </Stack>

                <Stack sx={{ width: '100%' }}>
                  <InputLabel htmlFor='last_name' sx={{ paddingLeft: 1.5 }}>
                    Prezime
                  </InputLabel>
                  <RHFTextField
                    id='last_name'
                    name='last_name'
                    hiddenLabel
                    fullWidth
                    size='small'
                    type='text'
                    placeholder='Prezime'
                    variant='filled'
                  />
                </Stack>
              </Stack>
            </ListItem>
            <ListItem>
              <Stack sx={{ width: '100%' }}>
                <InputLabel htmlFor='country' sx={{ paddingLeft: 1.5 }}>
                  Država
                </InputLabel>
                <RHFTextField
                  id='country'
                  name='country'
                  hiddenLabel
                  fullWidth
                  size='small'
                  type='text'
                  placeholder='Država'
                  variant='filled'
                />
              </Stack>
            </ListItem>

            <ListItem>
              <Stack sx={{ width: '100%' }}>
                <InputLabel htmlFor='address' sx={{ paddingLeft: 1.5 }}>
                  Adresa
                </InputLabel>
                <RHFTextField
                  id='address'
                  name='address'
                  hiddenLabel
                  fullWidth
                  size='small'
                  type='text'
                  placeholder='Adresa'
                  variant='filled'
                />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack sx={{ width: '100%' }}>
                <InputLabel htmlFor='city' sx={{ paddingLeft: 1.5 }}>
                  Grad
                </InputLabel>
                <RHFTextField
                  id='city'
                  name='city'
                  hiddenLabel
                  size='small'
                  type='text'
                  placeholder='Grad'
                  variant='filled'
                />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack sx={{ width: '100%' }}>
                <InputLabel htmlFor='phone_number' sx={{ paddingLeft: 1.5 }}>
                  Broj telefona
                </InputLabel>
                <RHFTextField
                  id='phone_number'
                  name='phone_number'
                  hiddenLabel
                  fullWidth
                  size='small'
                  type='text'
                  placeholder='Broj telefona'
                  variant='filled'
                />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack sx={{ width: '100%' }}>
                <InputLabel htmlFor='email' sx={{ paddingLeft: 1.5 }}>
                  Email
                </InputLabel>
                <RHFTextField
                  id='email'
                  name='email'
                  hiddenLabel
                  fullWidth
                  size='small'
                  type='text'
                  placeholder='Email adresa'
                  variant='filled'
                />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack sx={{ width: '100%' }}>
                <InputLabel htmlFor='message' sx={{ paddingLeft: 1.5 }}>
                  Pitanje
                </InputLabel>
                <RHFTextField
                  id='message'
                  name='message'
                  hiddenLabel
                  fullWidth
                  multiline
                  size='small'
                  type='text'
                  placeholder='Pitanje'
                  variant='filled'
                />
              </Stack>
            </ListItem>
            <ListItem>
              <Button
                variant='contained'
                color='secondary'
                fullWidth
                size='large'
                type='submit'
              >
                Zatraži ponudu
              </Button>
            </ListItem>
          </List>
        </FormProvider>
      </Scrollbar>
    </Dialog>
  );
};
