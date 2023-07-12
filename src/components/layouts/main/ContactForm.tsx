import { FormProvider, useForm } from 'react-hook-form';
import { Avatar, Grid, List, ListItemAvatar, ListItem, ListItemText, Typography, Button } from "@mui/material";
import { Input, TextArea } from '@/app/cart/delivery-form/Delivery';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { useState } from "react";
import Box from "@/components/MUI/Box";

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
const TextBox = styled(TextArea)(({ theme }) => ({
    width: '100%',
    height: '4em',
    marginTop: '1em',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '0.3em',
    color: theme.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary,
}))


export default function ContactForm() {
    const methods = useForm();
    const theme = useTheme();


    const [emailInfo, setEmailInfo] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        message: ''
    })

    const onSubmit = (data: any) => {
        setEmailInfo(data)
    }


    return (
        <Grid item xs={12} sm={12} md={4} lg={4}>
            <FormProvider {...methods} >
                <Box component="form" >
                    <Typography component="div" variant="overline">
                        Kontakt
                    </Typography>
                    <TextInput name="name" type="text" placeholder="Ime" />
                    <TextInput name="phoneNumber" type="text" placeholder="Broj telefona" />
                    <TextInput name="email" type="text" placeholder="Email *" />
                    <TextBox name="message" type="text" placeholder="Poruka" />
                    <Button type="submit">Posalji</Button>
                </Box>
            </FormProvider>

        </Grid>
    )
}