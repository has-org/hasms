import { ICartProduct } from '@/types/ICartProduct';
import { Box, Button, Typography, Stack, IconButton, styled, Divider, ListItem, List } from '@mui/material';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext/CartContext';

const CartTypography = styled(Typography)(({ theme }) => ({
	fontSize: '12px',
	fontWeight: '600',
}));

export const CartSidebarProduct = ({ product }: { product: ICartProduct }) => {
	const { removeFromCart } = useContext(CartContext);

	return (
		<Box>
			<ListItem sx={{ p: 0, m: 0 }}>
				<Stack sx={{ width: '100%', justifyContent: 'space-between' }} direction='row' alignItems='center' spacing={1}>
					<Stack direction='row' alignItems='center' spacing={1}>
						<Image src={product.image} width={48} height={48} alt='asd' style={{ borderRadius: '8px' }} />

						<Stack>
							<Typography variant='body2' fontSize={12}>
								{product.manufacturer}
							</Typography>
							<Stack direction='row' alignItems='center' spacing={1}>
								<CartTypography variant='body2'>{product.name}</CartTypography>
								<CartTypography variant='body2'>{product.color?.name}</CartTypography>
								<CartTypography variant='body2'>{product.size?.name}</CartTypography>
								<CartTypography variant='body2'>x{product.quantity}</CartTypography>
							</Stack>

							<Typography variant='body2'>{product.price} KM</Typography>
						</Stack>
					</Stack>

					<IconButton
						sx={{
							color: 'white',
							'&:hover': {
								backgroundColor: (theme) => theme.palette.secondary.dark,
							},
						}}
						onClick={() => removeFromCart(product.cartItemId)}
					>
						<DeleteIcon />
					</IconButton>
				</Stack>
			</ListItem>
			<Divider color='black' />
		</Box>
	);
};
