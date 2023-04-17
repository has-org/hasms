'use client'
import { styled } from '@mui/material/styles';
import { Avatar, Grid, List, ListItemAvatar, ListItem, ListItemText, Typography, Button } from "@mui/material";
import Box from "./MUI/Box";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import { Form, Input, TextArea } from "./Form";
import { useState } from "react";
import theme from "./MUI/theme";


const TextInput = styled(Input)(({ theme }) => ({
  width: '100%',
  height: '4em',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '0.3em',
  marginTop: '1em',
  color: theme.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary,
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{
        backgroundColor: 'black', padding: '2em',
        '@media (max-width:600px)': {
          padding: '0.7em',
        },
      }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Typography variant="h4" component="h2" className="text-center text-3xl font-bold text-gray-800 mt-10 mb-5">
              Maloprodaja
            </Typography>
            <ListItem >
              <ListItemAvatar >
                <Avatar sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }} >
                  <PlaceIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Njegoševa 34a" secondary="78000 Banja Luka" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }} >
                  <LocalPhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Kontakt:" secondary="+387 51 305 077" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }} >
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Email:" secondary="motoshop7bl@gmail.com" />
            </ListItem>
          </List>


        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Typography variant="h4" component="h2" className="text-center text-3xl font-bold text-gray-800 mt-10 mb-5">
              Servis i veleprodaja
            </Typography>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }} >
                  <PlaceIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Jesenjinova 14" secondary="78000 Banja Luka" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }} >
                  <LocalPhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Kontakt:" secondary="+387 51 305 077" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }} >
                  <LocalPhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Kontakt:" secondary="+387 66 173 700" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }} >
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Email:" secondary="motoshop7bl@gmail.com" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Typography variant="h4" component="h2" className="text-center text-3xl font-bold text-gray-800 mt-10 mb-5">
              Kontakt
            </Typography>
            <ListItem>
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

{
  /* <ul className="">
<li>Pocetna</li>
<li>O nama</li>
<li>Novosti</li>
<li>Homologacije</li>
<li>Kontakt</li>
<li>Zastita privatnosti</li>
<li>Opsti uslovi</li>
<li>Uslovi poslovanja</li>
</ul> */
}



{/* <div className="flex flex-col">
<h2>Maloprodaja</h2>
<ul className="">
  <li>Njegoševa 34a,</li>
  <li>78000 Banja Luka</li>
  <li>Kontakt: +387 51 305 077</li>
  <li>Email: motoshop7bl@gmail.com</li>
  <li>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.8891209695134!2d17.190244415808795!3d44.7830657790988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e0300fed7a243%3A0x45d7f41b6986df22!2sNjego%C5%A1eva%2034%2C%20Banja%20Luka%2078000!5e0!3m2!1sen!2sba!4v1675361811814!5m2!1sen!2sba"
      width="250"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </li>
</ul>
</div>
<div className="flex flex-col ">
<h2>Servis i veleprodaja</h2>
<ul className="">
  <li>Jesenjinova 14</li>
  <li>78000 Banja Luka</li>
  <li>Kontakt: +387 65 514 807</li>
  <li>Kontakt: +387 66 173 700</li>
  <li>Email: servis@motoshop7.ba</li>
  <li>Email: info@motoshop7.ba</li>
  <li>Email: yamaha@motoshop7.ba</li>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.3779260384463!2d17.163718415807967!3d44.75270667909902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e02d4ef6ed02b%3A0xebdf7ceaa2cf1fbf!2sJesenjinova%2014%2C%20Banja%20Luka%2078000!5e0!3m2!1sen!2sba!4v1675361911066!5m2!1sen!2sba"
    width="250"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
  ></iframe>
</ul>
</div>
<div className="flex flex-col gap-y-4">
<h2>Kontaktirajte nas</h2>
{/* <select name="emails" id="emails" value={""}>
  <option value="">servis@motoshop7.ba</option>
  <option value="">info@motoshop7.ba</option>
  <option value="">yamaha@motoshop7.ba</option>
</select>
<input type="text" id="fname" name="fname" />
<input type="text" id="fname" name="fname" />
<input type="text" id="fname" name="fname" />
<input type="text" id="fname" name="fname" />
Blabnlablabla
<input type="submit" value="Submit" /> */}
