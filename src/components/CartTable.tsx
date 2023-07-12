'use client'
import { useContext, useEffect, useMemo } from 'react'
import { CartContext } from '@/hooks/CartContext/CartContext';
import Box from '@/components/MUI/Box';
import { ReactTable } from "@/components/react-table/ReactTable";
import Iconify from "@/components/iconify";
const CartTable = () => {
    const { items, updateCartItemQuantity } = useContext(CartContext)
    const columns = useMemo(
        () => [
            {
                Header: 'Naziv',
                accessor: 'name', // accessor is the "key" in the data
            },
            {
                Header: 'Sifra',
                accessor: 'code',
            },
            {
                Header: 'Velicina',
                accessor: 'size',
            },
            {
                Header: 'Boja',
                accessor: 'color',
            },
            {
                Header: 'Cijena',
                accessor: 'price',
            },
            {
                Header: 'Kom.',
                accessor: 'quantity',
            },
            {
                Header: 'Total',
                accessor: 'subtotal',
            },
        ],
        []
    )

    const data = useMemo(
        () =>
            items?.map((item: any,) => {
                return {
                    name: `${item.product_name} (${item.product_code})`,
                    code: item.product_code,
                    price: item.product_price,
                    size: item.size?.name,
                    color: item.color?.name,
                    quantity: <>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }}>
                            <Box onClick={() => updateCartItemQuantity(item, 'decrease')}>
                                <Iconify icon="iconamoon:sign-minus-circle" />
                            </Box>
                            {item.quantity}
                            <Box onClick={() => updateCartItemQuantity(item, 'increase')}>
                                <Iconify icon="iconamoon:sign-plus-circle" />
                            </Box>
                        </Box>
                    </>,
                    subtotal: item.product_price * item.quantity
                }
            }),

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [items]
    )

    return (
        <>
            <ReactTable columns={columns} data={data} />
        </>
    );
}

export default CartTable;