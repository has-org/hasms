import { Dispatch, SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckoutSchema } from './CheckoutSchema';
import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';
import { RHFRadioGroup } from '@/components/hook-form';
import Button from '@mui/material/Button/Button';

const PAYMENT_METHOD_OPTIONS = [
	{
		label: 'Licno preuzimanje',
		value: 'licno preuzimanje',
	},
	{
		label: 'Pouzecem',
		value: 'posta',
		disabled: true,
	},
];

export const CheckoutTabThree = ({ setCurrentTab }: { setCurrentTab: Dispatch<SetStateAction<string>> }) => {
	const { trigger } = useFormContext<CheckoutSchema>();
	const onNext = async () => {
		const isValid = await trigger('stepThree');
		const isValidStepOne = await trigger('stepOne');
		if(isValid) {

		}
		if (!isValidStepOne) {
			setCurrentTab('1');
		}
	};

	const onPrev = async () => {
		setCurrentTab('2');
	};

	return (
		<>
			<TabPanel value='3'>
				<Stack>
					<RHFRadioGroup name='stepThree.paymentMethod' options={PAYMENT_METHOD_OPTIONS} />
				</Stack>
			</TabPanel>
			<Stack direction='row' justifyContent='space-between' paddingX={3}>
				<Button variant='outlined' color='secondary' onClick={onPrev}>
					Nazad
				</Button>
				<Button variant='outlined' color='secondary' onClick={onNext} type='submit'>
					Naruci
				</Button>
			</Stack>
		</>
	);
};
