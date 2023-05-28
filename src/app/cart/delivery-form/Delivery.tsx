'use client'
import { darkTheme, lightTheme } from "@/components/MUI/Theme";
import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

let mode = 'light';
const theme = mode == 'dark' ? darkTheme : lightTheme

export const Input = ({ name, label, ...rest }: any) => {
    const { register } = useFormContext(); // retrieve all hook methods
    return <input {...register(name)} {...rest} />;
}


export const TextArea = ({ name, ...rest }: any) => {
    const { register } = useFormContext(); // retrieve all hook methods
    return <textarea {...register(name)} {...rest} />;
}

const TextInput = styled(Input)(({ theme }) => ({
    width: '100%',
    height: '4em',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '0.3em',
    marginTop: '1em',
    color: theme.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary,
    backgroundColor: theme.mode === 'dark' ? 'background.dark' : 'background.dark',
}))



const DeliveryForm = ({ onSubmit, control, }: any) => {
    const [companyDetails, setCompanyDetails] = useState(false)
    const [deliveryAddress, setDeliveryAddress] = useState(false)

    return (
        <>
            <Box component="form" onSubmit={onSubmit}>
                <TextInput name="firstName" type="text" placeholder="Ime" label="asd" />
                <TextInput name="lastName" type="text" placeholder="Prezime" />
                <TextInput name="address" type="text" placeholder="Adresa" />
                <TextInput name="postalCode" type="text" placeholder="Poštanski broj" />
                <TextInput name="city" type="text" placeholder="Grad" />
                <TextInput name="country" type="text" placeholder="Država" />
                <TextInput name="phoneNumber" type="text" placeholder="Broj telefona" />
                <TextInput name="email" type="text" placeholder="Email *" />

                {/* <FormControlLabel control={<Checkbox />} label="Podaci o firmi" />
                <FormControlLabel control={<Checkbox />} label="Adresa za isporuku" /> */}
                <Controller
                    control={control}
                    name='withCompanyDetails'
                    defaultValue={false}

                    render={({ field: { onChange, value } }) => (
                        <FormControlLabel
                            label="Podaci o firmi"
                            control={
                                <Checkbox checked={value} onChange={(e) => {
                                    onChange(e)
                                    setCompanyDetails(e.target.checked)
                                }}
                                />
                            }
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='withDeliveryAddress'
                    defaultValue={false}

                    render={({ field: { onChange, value } }) => (
                        <FormControlLabel
                            label="Adresa za isporuku"
                            control={
                                <Checkbox checked={value} onChange={(e) => {
                                    onChange(e)
                                    setDeliveryAddress(e.target.checked)
                                }}
                                />
                            }
                        />
                    )}
                />
                {companyDetails && <TextInput name="companyName" type="text" placeholder="Naziv firme" />}
                {companyDetails && <TextInput name="companyRegistrationNumber" type="text" placeholder="JIB" />}
                {companyDetails && <TextInput name="companyTaxNumber" type="text" placeholder="PDV" />}





                {deliveryAddress && <TextInput name="deliveryFirstName" type="text" placeholder="Ime" />}
                {deliveryAddress && <TextInput name="deliveryLastName" type="text" placeholder="Prezime" />}
                {deliveryAddress && <TextInput name="deliveryAddress" type="text" placeholder="Adresa" />}
                {deliveryAddress && <TextInput name="deliveryPostalCode" type="text" placeholder="Poštanski broj" />}
                {deliveryAddress && <TextInput name="deliveryCity" type="text" placeholder="Grad" />}
                {deliveryAddress && <TextInput name="deliveryState" type="text" placeholder="Država" />}
                {deliveryAddress && <TextInput name="deliveryPhoneNumber" type="text" placeholder="Broj telefona" />}
                {deliveryAddress && <TextInput name="deliveryEmail" type="text" placeholder="Email" />}
                <Button type="submit" >Nastavi</Button>
            </Box>
        </>
    )
}

export default DeliveryForm