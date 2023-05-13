'use client'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Product as ProductType } from '@/types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { CartProvider } from '@/hooks/CartContext/CartProvider';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const ProductGrid = ({ products }: { products: ProductType[], }) => {

    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
            <Grid container >
                <CartProvider>

                    {products.map((product, index: number) => {
                        return (
                            <Grid item xs={6} sm={6} md={3} lg={3} key={index}>
                                <Item elevation={0}>
                                    <ProductCard product={product} key={index} />
                                </Item>
                            </Grid>)
                    })
                    }
                </CartProvider>

            </Grid>
        </Box>
    );
}
export default ProductGrid