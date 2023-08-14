'use client'
import { Box, Button, Typography } from "@mui/material"
import { CartContext } from '@/context/CartContext/CartContext';
import { useContext, useEffect, useMemo } from 'react'
import { ReactTable } from "../../react-table/ReactTable";
import Iconify from "../../iconify";
import Link from "next/link";

export const CartSidebar = () => {
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
            items?.map((item: any) => {
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
        <Box
            sx={{
                padding: '1em'
            }}>
            <Typography variant={"h2"}>Korpa</Typography>

            <Box sx={{ display: 'flex', flexGrow: '1', flexDirection: 'row', }}>

                <ReactTable columns={columns} data={data} />
            </Box>

            <Button >
                <Link href="/cart">
                    Go to cart
                </Link>
            </Button>
        </Box>
    )
}