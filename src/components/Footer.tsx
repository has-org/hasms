'use client'
import { styled } from '@mui/material/styles';
import { Avatar, Grid, List, ListItemAvatar, ListItem, ListItemText, Typography, Button } from "@mui/material";
import Box from "./MUI/Box";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import { Form, Input, TextArea } from "./Form";
import { useState } from "react";
import { darkTheme, lightTheme } from "./MUI/Theme";

let mode = 'light';
const theme = mode == 'dark' ? darkTheme : lightTheme

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
const StyledForm = styled(Form)(({ theme }) => ({

}))

const FooterListItems = [
  { id: 1, primary: 'Njegoševa 34a', secondary: '78000 Banja Luka', icon: <PlaceIcon /> },
  { id: 2, primary: 'Kontakt', secondary: '+387 51 305 077', icon: <LocalPhoneIcon /> },
  { id: 3, primary: 'Email', secondary: 'motoshop7bl@gmail.com', icon: <EmailIcon /> },
]
const FooterListItems1 = [
  { id: 1, primary: 'Jesenjinova 14', secondary: '78000 Banja Luka', icon: <PlaceIcon /> },
  { id: 2, primary: 'Kontakt', secondary: '+387 51 305 077', icon: <LocalPhoneIcon /> },
  { id: 3, primary: 'Kontakt', secondary: '+387 66 173 700', icon: <LocalPhoneIcon /> },
  { id: 4, primary: 'Email', secondary: 'motoshop7bl@gmail.com', icon: <EmailIcon /> },
]

export default function Footer() {


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
    <Box sx={{ flexGrow: 1, minWidth: '100%', }}>
      <Grid container spacing={2} sx={{
        backgroundColor: 'gray',
        paddingX: '4em',
        paddingY: '2em',

        '@media (max-width:600px)': {
          padding: '0.7em',
        },
      }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <List sx={{ width: '100%', maxWidth: 360, }}>
            <Typography variant="h4" component="h2" sx={{
              paddingBottom: '0.5em',
            }}>
              Maloprodaja
            </Typography>
            {FooterListItems.map((item, index) => {
              return (
                <ListItem key={index} sx={{ paddingX: 0, paddingY: '0.3em' }}>
                  <ListItemAvatar >
                    <Avatar sx={{
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                      },
                    }} >
                      {item.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.primary} secondary={item.secondary}
                    primaryTypographyProps={{
                      color: theme.palette.text.primary,
                      fontSize: '1.5em',
                      fontWeight: '500',
                    }}
                    secondaryTypographyProps={{
                      color: theme.palette.text.secondary,
                      fontSize: '1em',
                      fontWeight: '500',
                    }}
                  />
                </ListItem>
              )
            })}
          </List>


        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <List sx={{ width: '100%', maxWidth: 360, }}>
            <Typography variant="h4" component="h2" sx={{
              paddingBottom: '0.5em',
            }}>
              Servis i veleprodaja
            </Typography>
            {FooterListItems1.map((item, index) => {
              return (
                <ListItem key={index} sx={{ paddingX: 0, paddingY: '0.3em' }}>
                  <ListItemAvatar >
                    <Avatar sx={{
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                      },
                    }} >
                      {item.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.primary} secondary={item.secondary}
                    primaryTypographyProps={{
                      color: theme.palette.text.primary,
                      fontSize: '1.5em',
                      fontWeight: '500',
                    }}
                    secondaryTypographyProps={{
                      color: theme.palette.text.secondary,
                      fontSize: '1em',
                      fontWeight: '500',
                    }}
                  />                </ListItem>
              )
            })}
          </List>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <List sx={{ width: '100%', }}>
            <Typography variant="h4" component="h2" sx={{
              paddingBottom: '0.5em',
            }}>
              Kontakt
            </Typography>
            <ListItem sx={{ paddingX: 0, paddingY: '0.3em' }}>
              <StyledForm defaultValues={emailInfo} onSubmit={onSubmit} >
                <TextInput name="name" type="text" placeholder="Ime" />
                <TextInput name="phoneNumber" type="text" placeholder="Broj telefona" />
                <TextInput name="email" type="text" placeholder="Email *" />
                <TextBox name="message" type="text" placeholder="Poruka" />
                <Button type="submit">Posalji</Button>
              </StyledForm>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box >
  );
}
