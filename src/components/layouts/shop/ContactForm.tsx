import { FormProvider, useForm } from 'react-hook-form';
import { Avatar, Grid, List, ListItemAvatar, ListItem, ListItemText, Typography, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { useState } from "react";
import Box from "@/components/MUI/Box";


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
             
                    <Button type="submit">Posalji</Button>
                </Box>
            </FormProvider>

        </Grid>
    )
}