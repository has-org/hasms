import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckoutSchema } from './CheckoutSchema';
import { RHFTextField } from '@/components/hook-form';
import TabPanel from '@mui/lab/TabPanel';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button/Button';

export const CheckoutTabOne = ({ setCurrentTab }: { setCurrentTab: Dispatch<SetStateAction<string>> }) => {
	const { trigger } = useFormContext<CheckoutSchema>();

	const onNext = async () => {
		const isValid = await trigger('stepOne');
		if (isValid) {
			setCurrentTab('2');
		}
	};

	return (
		<>
			<TabPanel value={'1'}>
				<Stack spacing={2}>
					<Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
						<Stack sx={{ width: '100%' }}>
							<InputLabel htmlFor='stepOne.first_name'>Ime</InputLabel>
							<RHFTextField
								id='stepOne.first_name'
								name='stepOne.first_name'
								variant='filled'
								placeholder='Unesite ime'
								fullWidth
								size='small'
								hiddenLabel
							/>
						</Stack>
						<Stack sx={{ width: '100%' }}>
							<InputLabel htmlFor='stepOne.last_name'>Prezime</InputLabel>
							<RHFTextField
								id='stepOne.last_name'
								name='stepOne.last_name'
								variant='filled'
								placeholder='Unesite prezime'
								size='small'
								fullWidth
								hiddenLabel
							/>
						</Stack>
					</Stack>
					<Stack sx={{ width: '100%' }}>
						<InputLabel htmlFor='stepOne.email'>Email</InputLabel>
						<RHFTextField
							id='stepOne.email'
							name='stepOne.email'
							variant='filled'
							placeholder='Unesite email'
							size='small'
							hiddenLabel
						/>
					</Stack>
					<Stack sx={{ width: '100%' }}>
						<InputLabel htmlFor='stepOne.phone'>Telefon</InputLabel>
						<RHFTextField
							id='stepOne.phone'
							name='stepOne.phone'
							variant='filled'
							placeholder='Unesite broj telefona'
							size='small'
							hiddenLabel
						/>
					</Stack>
					<Stack sx={{ width: '100%' }}>
						<InputLabel htmlFor='stepOne.country'>Drzava</InputLabel>
						<RHFTextField
							id='stepOne.country'
							name='stepOne.country'
							variant='filled'
							placeholder='Unesite drzavu'
							size='small'
							hiddenLabel
						/>
					</Stack>
					<Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
						<Stack sx={{ width: '100%' }}>
							<InputLabel htmlFor='stepOne.city'>Grad</InputLabel>
							<RHFTextField
								id='stepOne.city'
								name='stepOne.city'
								variant='filled'
								placeholder='Unesite grad'
								size='small'
								hiddenLabel
							/>
						</Stack>
						<Stack sx={{ width: '100%' }}>
							<InputLabel htmlFor='stepOne.zip'>Postanski broj</InputLabel>
							<RHFTextField
								id='stepOne.zip'
								name='stepOne.zip'
								variant='filled'
								placeholder='Unesite postanski broj'
								size='small'
								hiddenLabel
							/>
						</Stack>
					</Stack>
					<Stack sx={{ width: '100%' }}>
						<InputLabel htmlFor='stepOne.address'>Adresa</InputLabel>
						<RHFTextField
							id='stepOne.address'
							name='stepOne.address'
							variant='filled'
							placeholder='Unesite ulicu i broj'
							size='small'
						/>
					</Stack>
					<Stack>
						<InputLabel htmlFor='stepOne.notes'>Napomena</InputLabel>
						<RHFTextField
							id='stepOne.notes'
							name='stepOne.notes'
							placeholder='Pomozite kuriru da vas lakse pronadje...'
							variant='filled'
							multiline
							size='small'
							rows={4}
						/>
					</Stack>
				</Stack>
			</TabPanel>
			<Stack direction='row' justifyContent='space-between' paddingX={3}>
				<Button variant='outlined' color='secondary' disabled>
					Nazad
				</Button>
				<Button variant='outlined' color='secondary' onClick={onNext}>
					Dalje
				</Button>
			</Stack>
		</>
	);
};
