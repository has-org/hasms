import { ICartProduct } from '@/types/ICartProduct';
import { Divider, List } from '@mui/material';
import { CartSidebarProduct } from './CartSidebarProduct';

export const CartSidebarProductList = ({ products }: { products: ICartProduct[] | null }) => {
	if (!products) return 'No products';
	return (
		<List>
			<Divider color='black' />
			{products?.map((product) => {
				return <CartSidebarProduct key={product.cartItemId} product={product} />;
			})}
		</List>
	);
};
