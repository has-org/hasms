'use client'
import { useState } from "react"
import { Box, Button, Typography } from "@mui/material";

const AccountAddress = (data: any) => {
    return (<>
        <Box>
            <Typography variant="h6" gutterBottom>Adresa racuna</Typography>
            <Button>IZMJENI</Button>
            <Box>
                <Box sx={{display: 'flex', gap:'5px'}}>
                <Typography variant="body1" gutterBottom>Ime i prezime</Typography>
                <Typography variant="body1" gutterBottom>{`${data.firstName} ${data.lastName}`}</Typography>

                </Box>
                <Typography variant="body1" gutterBottom>Adresa</Typography>
                <Typography variant="body1" gutterBottom>Grad</Typography>
                <Typography variant="body1" gutterBottom>Drzava</Typography>
                <Typography variant="body1" gutterBottom>Postanski broj</Typography>
                <Typography variant="body1" gutterBottom>Broj telefona</Typography>
                <Typography variant="body1" gutterBottom>Email</Typography>
            </Box>

        </Box>
    </>)
}
const DeliveryAddress = () => { }

const DeliveryMethod = () => { }

const OrderTab = () => {



    return (
        <>
            <Box>
                <AccountAddress address={null} />
            </Box>
        </>
    )
}

export default OrderTab