// @mui
import { Box, Grid, Link, Stack, Divider, Container, Typography, IconButton } from '@mui/material';
// routes
// _mock
// components
import Iconify from '@/components/iconify';
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import ContactForm from './ContactForm';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Maloprodaja',
    children: [
      { name: 'Njegoševa 34a' },
      { name: '78000 Banja Luka' },
      { name: '+387 51 305 077' },
      { name: 'motoshop7bl@gmail.com' },
    ],

  },
  {
    headline: 'Veleprodaja',
    children: [
      {name:  'Jesenjinova 14'},
      {name:  '78000 Banja Luka'},
      {name:  '+387 65 514 807', href:'#'},
      {name:  '+387 66 173 700', href:'#'},
      {name:  'motoshop7bl@gmail.com', href:'#'},
      
    ],
  },
];


const _socials = [
  {
    value: 'facebook',
    name: 'FaceBook',
    icon: 'eva:facebook-fill',
    color: '#1877F2',
    path: 'https://www.facebook.com/caitlyn.kerluke',
  },
  {
    value: 'instagram',
    name: 'Instagram',
    icon: 'ant-design:instagram-filled',
    color: '#E02D69',
    path: 'https://www.instagram.com/caitlyn.kerluke',
  },
  {
    value: 'linkedin',
    name: 'Linkedin',
    icon: 'eva:linkedin-fill',
    color: '#007EBB',
    path: 'https://www.linkedin.com/caitlyn.kerluke',
  },
  {
    value: 'twitter',
    name: 'Twitter',
    icon: 'eva:twitter-fill',
    color: '#00AAEC',
    path: 'https://www.twitter.com/caitlyn.kerluke',
  },
];


// ----------------------------------------------------------------------

export default function Footer() {
  const pathname = usePathname();

  const isHome = pathname === '/';

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.primary',
      }}
    >
      <Divider />

      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'flex-start',
          }}
          sx={{
            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >


          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Motoshop 7 Banja Luka
            </Typography>

            <Stack
              spacing={1}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 5,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social) => (
                <IconButton key={social.name} sx={{color: 'text.primary'}}>
                  <Iconify icon={social.icon}/>
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={9}>
            <Stack
              spacing={5}
              justifyContent="space-between"
              direction={{ xs: 'column', md: 'row' }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      component="a"
                      key={link.name}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}

                </Stack>
              ))}
                  <ContactForm />

            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="caption"
          component="div"
          sx={{
            mt: 10,
            pb: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2023. HAS  All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  return mainFooter;
}
