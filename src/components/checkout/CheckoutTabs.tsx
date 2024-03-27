'use client';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import FormProvider from '../hook-form/FormProvider';
import { RHFRadioGroup, RHFSelect, RHFTextField } from '@/components/hook-form';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { number, object, string } from 'zod';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Button from '@mui/material/Button/Button';

type FormValuesProps = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  zip: string;
  address: string;
  notes: string;
  delivery: string;
  afterSubmit?: string;
};

const addToCartSchema = object({
  first_name: string().min(2, 'Ime mora imati najmanje 2 karaktera'),
  last_name: string().min(2, 'Prezime mora imati najmanje 2 karaktera'),
  email: string().email('Unesite validan email'),
  phone: string().min(6, 'Telefon mora imati najmanje 6 karaktera'),
  country: string().min(2, 'Drzava mora imati najmanje 2 karaktera'),
  city: string().min(2, 'Grad mora imati najmanje 2 karaktera'),
  zip: string().min(4, 'Zip mora imati najmanje 4 karaktera'),
  address: string().min(5, 'Adresa mora imati najmanje 5 karaktera'),
  notes: string().optional(),
  delivery: string().optional(),
});

const StyledTab = styled(Tab)(({ theme }) => ({
  justifyContent: 'start',
  paddingLeft: '24px',
  paddingTop: '22px',
  paddingBottom: '22px',
  marginRigth: '0px',
}));

const CheckoutTabs = () => {
  const [currentTab, setCurrentTab] = useState('2');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const methods = useForm<FormValuesProps>({
    resolver: zodResolver(addToCartSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      zip: '',
      address: '',
      notes: '',
      delivery: ''
    },
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<any> = async (
    values: any,
    e?: React.BaseSyntheticEvent,
  ) => {
    if (currentTab === '1') {
      setCurrentTab('2');
    }
    if (currentTab === '2') {
      setCurrentTab('3');
    }
    if (currentTab === '3') {
      console.log('submit');
    }
  };

  return (
    <TabContext value={currentTab}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Card
          sx={{
            boxShadow: 0,
          }}
        >
          <Box
            sx={{
              border: 1,
              borderColor: 'primary.neutral',
              backgroundColor: 'primary.neutral',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
            }}
          >
            <TabList aria-label='lab API tabs example' variant='fullWidth'>
              <StyledTab
                label={
                  <Stack sx={{ textAlign: 'left' }}>
                    <Typography
                      variant='body2'
                      fontSize='14px'
                      sx={{
                        color:
                          currentTab === '1'
                            ? 'primary.darker'
                            : 'primary.contarastText',
                      }}
                    >
                      Korak 1
                    </Typography>
                    <Typography
                      variant='body2'
                      fontSize='18px'
                      fontWeight='600'
                      sx={{
                        color:
                          currentTab === '1'
                            ? 'primary.darker'
                            : 'primary.contrastText',
                      }}
                    >
                      Licni podaci
                    </Typography>
                  </Stack>
                }
                value='1'
                sx={{
                  backgroundColor:
                    currentTab === '1' ? 'primary.main' : 'primary.neutral',
                }}
              />
              <StyledTab
                label={
                  <Stack sx={{ textAlign: 'left' }}>
                    <Typography
                      variant='body2'
                      fontSize='14px'
                      sx={{
                        color:
                          currentTab === '2'
                            ? 'primary.darker'
                            : 'primary.contrastText',
                      }}
                    >
                      Korak 2
                    </Typography>
                    <Typography
                      variant='body2'
                      fontSize='18px'
                      fontWeight='600'
                      sx={{
                        color:
                          currentTab === '2'
                            ? 'primary.darker'
                            : 'primary.contrastText',
                      }}
                    >
                      Nacin dostave
                    </Typography>
                  </Stack>
                }
                sx={{
                  backgroundColor:
                    currentTab === '2' ? 'primary.main' : 'primary.neutral',
                }}
                value='2'
              />
              <StyledTab
                label={
                  <Stack sx={{ textAlign: 'left' }}>
                    <Typography
                      variant='body2'
                      fontSize='14px'
                      sx={{
                        color:
                          currentTab === '3'
                            ? 'primary.darker'
                            : 'primary.contrastText',
                      }}
                    >
                      Korak 3
                    </Typography>
                    <Typography
                      variant='body2'
                      fontSize='18px'
                      fontWeight='600'
                      sx={{
                        color:
                          currentTab === '3'
                            ? 'primary.darker'
                            : 'primary.contrastText',
                      }}
                    >
                      Nacin placanja
                    </Typography>
                  </Stack>
                }
                sx={{
                  backgroundColor:
                    currentTab === '3' ? 'primary.main' : 'primary.neutral',
                }}
                value='3'
              />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <Stack spacing={2}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <Stack sx={{ width: '100%' }}>
                  <InputLabel htmlFor='first_name'>Ime</InputLabel>
                  <RHFTextField
                    id='first_name'
                    name='first_name'
                    variant='filled'
                    placeholder='Unesite ime'
                    fullWidth
                    size='small'
                    hiddenLabel
                  />
                </Stack>
                <Stack sx={{ width: '100%' }}>
                  <InputLabel htmlFor='last_name'>Prezime</InputLabel>
                  <RHFTextField
                    id='last_name'
                    name='last_name'
                    variant='filled'
                    placeholder='Unesite prezime'
                    size='small'
                    fullWidth
                    hiddenLabel
                  />
                </Stack>
              </Stack>
              <Stack sx={{ width: '100%' }}>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <RHFTextField
                  id='email'
                  name='email'
                  variant='filled'
                  placeholder='Unesite email'
                  size='small'
                  hiddenLabel
                />
              </Stack>
              <Stack sx={{ width: '100%' }}>
                <InputLabel htmlFor='phone'>Telefon</InputLabel>
                <RHFTextField
                  id='phone'
                  name='phone'
                  variant='filled'
                  placeholder='Unesite broj telefona'
                  size='small'
                  hiddenLabel
                />
              </Stack>
              <Stack sx={{ width: '100%' }}>
                <InputLabel htmlFor='country'>Drzava</InputLabel>
                <RHFTextField
                  name='country'
                  variant='filled'
                  placeholder='Unesite drzavu'
                  size='small'
                  hiddenLabel
                />
              </Stack>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <Stack sx={{ width: '100%' }}>
                  <InputLabel htmlFor='city'>Grad</InputLabel>
                  <RHFTextField
                    id='city'
                    name='city'
                    variant='filled'
                    placeholder='Unesite grad'
                    size='small'
                    hiddenLabel
                  />
                </Stack>
                <Stack sx={{ width: '100%' }}>
                  <InputLabel htmlFor='zip'>Postanski broj</InputLabel>
                  <RHFTextField
                    id='zip'
                    name='zip'
                    variant='filled'
                    placeholder='Unesite postanski broj'
                    size='small'
                    hiddenLabel
                  />
                </Stack>
              </Stack>
              <Stack sx={{ width: '100%' }}>
                <InputLabel htmlFor='address'>Adresa</InputLabel>
                <RHFTextField
                  id='address'
                  name='address'
                  variant='filled'
                  placeholder='Unesite ulicu i broj'
                  size='small'
                />
              </Stack>
              <Stack>
                <InputLabel htmlFor='notes'>Napomena</InputLabel>
                <RHFTextField
                  id='notes'
                  name='notes'
                  placeholder='Pomozite kuriru da vas lakse pronadje...'
                  variant='filled'
                  multiline
                  size='small'
                  rows={4}
                />
              </Stack>
              <Stack direction='row' justifyContent='end'>
                <Button variant='outlined' color='secondary' type='submit'>
                  Dalje
                </Button>
              </Stack>
            </Stack>
          </TabPanel>
          <TabPanel value='2'>
            <Stack>
              <RHFRadioGroup name="delivery" options={[
                {
                  label: 'Licno preuzimanje',
                  value: 'delivery',
                  price: 'Besplatno'
                },
                {
                  label: 'Posta (Poste Srpske)',
                  value: 'euroexpress',
                  disabled: true,
                  price: '0.00 KM'
                },
              ]} 
              />
            </Stack>
          </TabPanel>
          <TabPanel value='3'>Item Three</TabPanel>
        </Card>
      </FormProvider>
    </TabContext>
  );
};

export default CheckoutTabs;
