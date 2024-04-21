import { Box, Button, Typography, Stack, IconButton, styled, Divider, ListItem, List } from '@mui/material';
import { CartContext } from '@/context/CartContext/CartContext';
import { useContext, } from 'react';
import Link from 'next/link';
import { CloseIcon } from '@/theme/overrides/CustomIcons';
import { CartSidebarProductList } from '@/components/common/CartSidebarProductList';


export const CartSidebar = ({ onClose }: { onClose: any }) => {
	const { products, totalAmount } = useContext(CartContext);

	return (
		<Box
			sx={{
				padding: 1,
			}}
		>
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<Typography variant={'h6'}>Korpa</Typography>
				<IconButton
					color='secondary'
					size='small'
					onClick={onClose}
					sx={{ '&:hover': { backgroundColor: 'secondary.dark' } }}
				>
					<CloseIcon />
				</IconButton>
			</Stack>
			<Stack>
				<CartSidebarProductList products={products}/>
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
				<Link href='/checkout' style={{ textDecoration: 'none', width: '100%' }}>
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
