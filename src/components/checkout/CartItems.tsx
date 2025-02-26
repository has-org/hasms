'use client';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button/Button';
import { CartContext } from '@/context/CartContext/CartContext';
import { useContext } from 'react';
import { Card } from '@mui/material';

const CartItems = () => {
	const { products, totalAmount, removeFromCart } = useContext(CartContext);

	return (
		<Card
			sx={{
				padding: 1,
        maxHeight: '600px',
        overflowY: 'auto'
			}}
		>
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<Typography variant={'h6'}>Korpa</Typography>
			</Stack>
			<Stack>
				<List>
					<Divider color='black' />
					{products?.map((product: any) => {
						return (
							<Box key={`${product.cartItemId}`}>
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
											{product.image ? (
												<Image src={product.image} width={48} height={48} alt='asd' style={{ borderRadius: '8px' }} />
											) : (
												<Image src={'/no-image.jpg'} width={48} height={48} alt='asd' style={{ borderRadius: '8px' }} />
											)}
											<Stack>
												<Typography variant='body2' fontSize={12}>
													{product.manufacturer}
												</Typography>
												<Stack direction='row' alignItems='center' spacing={1}>
													<Typography variant='body2' fontSize={12}>
														{product.name}
													</Typography>
												</Stack>
												<Stack direction='row' alignItems='center' spacing={1}>
													<Typography variant='body2' fontSize={12}>
														{product.color.name}
													</Typography>
													<Typography variant='body2' fontSize={12}>
														{product.size.name}
													</Typography>
												</Stack>
											</Stack>
										</Stack>
										<Stack direction={'row'} justifyContent={'space-between'} width="20%">
											<Typography variant='body2'>x{product.quantity}</Typography>
											<Typography variant='body2'>{product.price} KM</Typography>
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
					width: '100%',
				}}
			>
				{/* <Link href='/checkout' style={{ textDecoration: 'none', width: '100%' }}>
					<Button variant='outlined' color='secondary' fullWidth disabled>
						<Typography>Naruci</Typography>
					</Button>
				</Link> */}
			</Box>
		</Card>
	);
};

export default CartItems;
