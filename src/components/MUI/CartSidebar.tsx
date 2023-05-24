'use client'
import { Box, Button, Typography } from "@mui/material"
import { CartContext } from '@/hooks/CartContext/CartContext';
import { useContext, useEffect, useMemo } from 'react'
import { ReactTable } from "../UI/react-table/ReactTable";

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
          items.map((item: any) => {
           return {
                name: `${item.name}${}`,
                code: item.code,
                price: item.price,
                quantity: item.variants[0].quantity ,
                subtotal: item.variants[0].quantity * item.price
            }
          })
        ,
        [items]
      )
    

    return (
        <Box
            sx={{
                padding: '1em'
            }}>
            <Typography variant={"h2"}>Korpa</Typography>

            <Box>
                {items.map((item: any) => {
                    return (
                        <Box key={item.id} sx={{ display: 'flex', flexGrow:'1', flexDirection: 'row', }}>

                            <ReactTable columns={columns} data={data}/>
                        </Box>
                    )
                })
                }
            </Box>

            <Button >
                Go to cart
            </Button>
        </Box>
    )
}