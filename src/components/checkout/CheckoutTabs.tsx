'use client';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import FormProvider from '../hook-form/FormProvider';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValuesProps, checkoutSchema } from './CheckoutSchema';
import { CheckoutTabOne } from './CheckoutTabOne';
import { CheckoutTabTwo } from './CheckoutTabTwo';
import { CheckoutTabThree } from './CheckoutTabThree';
import { CartContext } from '@/context/CartContext/CartContext';
import { useContext } from 'react';
import axios from '@/utils/axios';
import { toast } from 'react-toastify';

const StyledTab = styled(Tab)(({ theme }) => ({
	justifyContent: 'start',
	paddingLeft: '24px',
	paddingTop: '22px',
	paddingBottom: '22px',
	marginRigth: '0px',
}));

const TABS = [
	{
		id: '1',
		label: 'Korak 1',
		title: 'Licni podaci',
	},
	{ id: '2', label: 'Korak 2', title: 'Nacin dostave' },
	{ id: '3', label: 'Korak 3', title: 'Nacin placanja' },
];

const CheckoutTabs = () => {
	const { products } = useContext(CartContext);
	const [currentTab, setCurrentTab] = useState('1');

	const methods = useForm<FormValuesProps>({
		resolver: zodResolver(checkoutSchema),
		shouldUnregister: false,
		mode: 'onChange',
		defaultValues: {
			stepOne: {
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				country: '',
				city: '',
				zip: '',
				address: '',
				note: '',
			},
			stepTwo: {
				deliveryMethod: '',
				deliveryAddress: '',
			},
			stepThree: {
				paymentMethod: '',
			},
		},
	});

	const {
		reset,
		handleSubmit,
		formState: { dirtyFields },
	} = methods;

	const onSubmit: SubmitHandler<any> = async (values: any, e?: React.BaseSyntheticEvent) => {
		const preparedObject = {
			orderUserDetails: values.stepOne,
			orderProducts: products,
			orderPaymentDetails: {
				type: values.stepTwo.deliveryMethod,
			},
			orderDeliveryDetails: {
				type: values.stepThree.paymentMethod,
				address: values.stepTwo.deliveryAddress,
			},
		};
		const result = await axios.post('/order/create', preparedObject);
		if (result.status === 200) {
			reset();
			return toast.success('Narudžba kreirana');
		} else {
			return toast.error('Narudžba nije kreirana');
		}
	};

	return (
		<TabContext value={currentTab}>
			<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
				<Card
					sx={{
						boxShadow: 0,
						paddingBottom: 3,
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
						<TabList aria-label='API tabs' variant='fullWidth'>
							{TABS.map((tab, index) => {
								return (
									<StyledTab
										key={`${tab.label} ${index}`}
										label={
											<Stack sx={{ textAlign: 'left' }}>
												<Typography
													variant='body2'
													fontSize='14px'
													sx={{
														color: currentTab === tab.id ? 'primary.darker' : 'primary.contarastText',
													}}
												>
													{tab.label}
												</Typography>
												<Typography
													variant='body2'
													fontSize='18px'
													fontWeight='600'
													sx={{
														color: currentTab === tab.id ? 'primary.darker' : 'primary.contrastText',
													}}
												>
													{tab.title}
												</Typography>
											</Stack>
										}
										value={tab.id}
										sx={{
											backgroundColor: currentTab === tab.id ? 'primary.main' : 'primary.neutral',
										}}
									/>
								);
							})}
						</TabList>
					</Box>
					{currentTab === '1' && <CheckoutTabOne setCurrentTab={setCurrentTab} />}
					{currentTab === '2' && <CheckoutTabTwo setCurrentTab={setCurrentTab} />}
					{currentTab === '3' && <CheckoutTabThree setCurrentTab={setCurrentTab} />}
				</Card>
			</FormProvider>
		</TabContext>
	);
};

export default CheckoutTabs;
