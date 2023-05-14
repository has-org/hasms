'use client'
import { Box, Typography } from "@mui/material"
import { CartContext } from '@/hooks/CartContext/CartContext';
import { useContext, useEffect } from 'react'

export const Cart = () => {
    const { items } = useContext(CartContext)

    return (
        <Box
            sx={{
                padding: '1em'
            }}>
            <Typography variant={"h2"}>Korpa</Typography>
            {items.length}
            <Box>
                {items.map((item: any) => { 
                    return (
                        <Box key={item.id} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant={"h3"}>{item.name}</Typography>
                            <Typography variant={"h3"}>{item.price}</Typography>
                        </Box>
                    )
                })
                }
            </Box>
        </Box>
    )
}