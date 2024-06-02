import { Dispatch, SetStateAction } from 'react';
import TabPanel from '@mui/lab/TabPanel';
import { useFormContext } from 'react-hook-form';
import { CheckoutSchema } from './CheckoutSchema';
import { RHFRadioGroup, RHFTextField } from '@/components/hook-form';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button/Button';

const DELIVERY_METHOD_OPTIONS = [
	{
		label: 'Licno preuzimanje',
		value: 'licno preuzimanje',
		price: 'Besplatno',
	},
	{
		label: 'Posta (Poste Srpske)',
		value: 'posta',
		disabled: true,
		price: '0.00 KM',
	},
];

export const CheckoutTabTwo = ({ setCurrentTab }: { setCurrentTab: Dispatch<SetStateAction<string>> }) => {
	const { trigger } = useFormContext<CheckoutSchema>();

	const onNext = async () => {
		const isValid = await trigger('stepTwo');
		const isValidStepOne = await trigger('stepOne');
		if (isValid && isValidStepOne) {
			setCurrentTab('3');
		}
		if (!isValidStepOne) {
			setCurrentTab('2');
		}
	};

	const onPrev = async () => {
		setCurrentTab('1');
	};

	return (
		<>
			<TabPanel value={'2'}>
				<Stack>
					<RHFRadioGroup name='stepTwo.deliveryMethod' options={DELIVERY_METHOD_OPTIONS} />
					<RHFTextField
						id='stepTwo.deliveryAddress'
						name='stepTwo.deliveryAddress'
						variant='filled'
						placeholder='Unesite adresu za dostavu'
						fullWidth
						size='small'
						hiddenLabel
					/>
				</Stack>
			</TabPanel>
			<Stack direction='row' justifyContent='space-between' paddingX={3}>
				<Button variant='outlined' color='secondary' onClick={onPrev}>
					Nazad
				</Button>
				<Button variant='outlined' color='secondary' onClick={onNext}>
					Dalje
				</Button>
			</Stack>
		</>
	);
};
