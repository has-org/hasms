'use client'
import { useState } from "react"
import { Box, Button, Card,  FormControlLabel, Typography, Radio, RadioGroup } from "@mui/material";
import { Controller} from "react-hook-form";
import { TABS } from "./index";

const AccountAddress = ({ orderDetails }: any) => {
    return (<>
        <Box>
            <Card sx={{ width: '600px', padding: '12px' }} elevation={6}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Typography variant="h4" gutterBottom>Adresa racuna</Typography>
                    <Button>IZMJENI</Button>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <Typography variant="body1" gutterBottom>Ime i prezime</Typography>
                        <Typography variant="body1" gutterBottom>{`${orderDetails.firstName} ${orderDetails.lastName}`}</Typography>

                    </Box>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <Typography variant="body1" gutterBottom>Adresa</Typography>
                        <Typography variant="body1" gutterBottom>{`${orderDetails.address}`}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <Typography variant="body1" gutterBottom>Grad</Typography>
                        <Typography variant="body1" gutterBottom>{`${orderDetails.city}`}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <Typography variant="body1" gutterBottom>Drzava</Typography>
                        <Typography variant="body1" gutterBottom>{`${orderDetails.country}`}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <Typography variant="body1" gutterBottom>Postanski broj</Typography>
                        <Typography variant="body1" gutterBottom>{`${orderDetails.postalCode}`}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <Typography variant="body1" gutterBottom>Broj telefona</Typography>
                        <Typography variant="body1" gutterBottom>{`${orderDetails.phoneNumber}`}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '5px' }}>
                        <Typography variant="body1" gutterBottom>Email</Typography>
                        <Typography variant="body1" gutterBottom>{`${orderDetails.email}`}</Typography>
                    </Box>


                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {orderDetails.companyName && <Box sx={{ display: 'flex', gap: '5px' }}>

                            <Typography variant="body1" gutterBottom>Firma</Typography>
                            <Typography variant="body1" gutterBottom>{`${orderDetails.companyName}`}</Typography>
                        </Box>
                        }
                        {orderDetails.companyRegistrationNumber && <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography variant="body1" gutterBottom>JIB</Typography>
                            <Typography variant="body1" gutterBottom>{`${orderDetails.companyRegistrationNumber}`}</Typography>
                        </Box>}
                        {orderDetails.companyTaxNumber && <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Typography variant="body1" gutterBottom>PDV</Typography>
                            <Typography variant="body1" gutterBottom>{`${orderDetails.companyTaxNumber}`}</Typography>
                        </Box>}
                    </Box>

                </Box>
            </Card>
        </Box >
    </>)
}
const DeliveryAddress = ({ orderDetails }: any) => {
    if (orderDetails.withDeliveryAddress === false) {
        return (
            <>
                <Card>
                    <Typography>Ista kao adresa od racuna</Typography>
                </Card>
            </>
        )
    }
    return (<>
        <Box>
            <Card sx={{ width: '600px', padding: '12px' }} elevation={6}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>Adresa za dostavu</Typography>
                    <Button>IZMJENI</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    <Typography variant="body1" gutterBottom>Ime i prezime</Typography>
                    <Typography variant="body1" gutterBottom>{`${orderDetails.deliveryFirstName} ${orderDetails.deliveryLastName}`}</Typography>

                </Box>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    <Typography variant="body1" gutterBottom>Adresa</Typography>
                    <Typography variant="body1" gutterBottom>{`${orderDetails.deliveryAddress}`}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    <Typography variant="body1" gutterBottom>Grad</Typography>
                    <Typography variant="body1" gutterBottom>{`${orderDetails.deliveryCity}`}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    <Typography variant="body1" gutterBottom>Drzava</Typography>
                    <Typography variant="body1" gutterBottom>{`${orderDetails.deliveryState}`}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    <Typography variant="body1" gutterBottom>Postanski broj</Typography>
                    <Typography variant="body1" gutterBottom>{`${orderDetails.deliveryPostalCode}`}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    <Typography variant="body1" gutterBottom>Broj telefona</Typography>
                    <Typography variant="body1" gutterBottom>{`${orderDetails.deliveryPhoneNumber}`}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    <Typography variant="body1" gutterBottom>Email</Typography>
                    <Typography variant="body1" gutterBottom>{`${orderDetails.deliveryEmail}`}</Typography>
                </Box>

            </Card>

        </Box>
    </>)
}

const DeliveryMethod = ({ orderDetails, control }: any) => {
    return (
        <Box>
            <Controller
                control={control}
                name='deliveryMethod'
                defaultValue={'personalPickup'}

                render={({ field }) => (
                    <RadioGroup {...field}>
                        <FormControlLabel
                            value="personalPickup"
                            control={<Radio />}
                            label="Licno preuzimanje"
                        />
                        <FormControlLabel
                            value="homeDelivery"
                            control={<Radio />}
                            label="Kucna dostava"
                        />

                    </RadioGroup>
                )}
            />
        </Box>)
}

const OrderTab = ({ orderDetails, setActiveTab }: any) => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <AccountAddress orderDetails={orderDetails} />

                <DeliveryAddress orderDetails={orderDetails} />

                <DeliveryMethod orderDetails={orderDetails} />

                <Button onClick={() => setActiveTab(TABS[2])}>Na placanje!</Button>
            </Box>
        </>
    )
}

export default OrderTab