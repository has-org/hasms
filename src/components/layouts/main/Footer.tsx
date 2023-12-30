// @mui
"use client";
import {
  Box,
  Link,
  Stack,
  Divider,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
// routes
// _mock
// components
import Iconify from "@/components/iconify";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ContactForm from "./ContactForm";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// ----------------------------------------------------------------------

const _socials = [
  {
    value: "facebook",
    name: "FaceBook",
    icon: "eva:facebook-fill",
    color: "#1877F2",
    path: "https://www.facebook.com/MotoShop7bl/",
  },
  {
    value: "instagram",
    name: "Instagram",
    icon: "ant-design:instagram-filled",
    color: "#E02D69",
    path: "https://www.instagram.com/motoshop7bl",
  },
];

const LINKS = [
  {
    headline: "Maloprodaja",
    children: [
      {
        name: "Njegoševa 34a, 78000 Banja Luka",
        href: "#",
        icon: "vaadin:office",
      },
      { name: "+387 51 305 077", href: "#", icon: "ic:baseline-phone" },
      {
        name: "motoshop7bl@gmail.com",
        href: "#",
        icon: "material-symbols:mail-outline",
      },

      {
        name: "PON-PET: 09:00 - 17:00h",
        href: "#",
        icon: "mingcute:time-line",
      },
      {
        name: "SUB: 09:00 - 15:00h",
        href: "#",
        icon: "mingcute:time-line",
      },
    ],
  },
  {
    headline: "Veleprodaja",
    children: [
      {
        name: "Jesenjinova 14, 78000 Banja Luka",
        href: "#",
        icon: "vaadin:office",
      },

      { name: "+387 65 514 807", href: "#", icon: "ic:baseline-phone" },
      { name: "+387 66 173 700", href: "#", icon: "ic:baseline-phone" },

      {
        name: "PON-PET: 09:00 - 17:00h",
        href: "#",
        icon: "mingcute:time-line",
      },
      {
        name: "SUB: 09:00 - 15:00h",
        href: "#",
        icon: "mingcute:time-line",
      },
    ],
  },
  {
    headline: "Servis",
    children: [
      { name: "+387 66 173 700", href: "#", icon: "ic:baseline-phone" },
      {
        name: "servis@motoshop7.com",
        href: "#",
        icon: "material-symbols:mail-outline",
      },
    ],
  },
  {
    headline: "Prodaja dijelova i opreme",
    children: [
      { name: "+387 66 173 700", href: "#", icon: "ic:baseline-phone" },
      {
        name: "yamaha@motoshop7.ba",
        href: "#",
        icon: "material-symbols:mail-outline",
      },
      {
        name: "info@motoshop7.ba",
        href: "#",
        icon: "material-symbols:mail-outline",
      },
    ],
  },

  {
    headline: "Brzi linkovi",
    children: [
      {
        name: "Moj Nalog",
        href: "#",
        icon: "",
      },

      { name: "Moja korpa", href: "#", icon: "" },
      { name: "Tvoja stara", href: "#", icon: "" },
      { name: "Narudzbine", href: "#", icon: "" },
      { name: "Adrese", href: "#", icon: "" },
      { name: "Blog", href: "#", icon: "" },
    ],
  },
  {
    headline: "Brzi linkovi",
    children: [
      { name: "Reklamacije", href: "#", icon: "" },
      { name: "Uslovi kupovine", href: "#", icon: "" },
      { name: "Politika privatnosti", href: "#", icon: "" },
      { name: "Obrazac za reklamaciju", href: "#", icon: "" },
      { name: "Zaposlenje", href: "#", icon: "" },
      { name: "O nama", href: "#", icon: "" },
    ],
  },
  {
    headline: "Podaci o firmi",
    children: [
      { name: "Adresa: ", href: "#", icon: "" },
      { name: "JIB: ", href: "#", icon: "" },
      { name: "Naziv: 'Motoshop7' ", href: "#", icon: "" },
    ],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  return (
    <>
      <Box sx={{ backgroundColor: "background.paper", width: "100%" }}>
        <Container maxWidth="xl" sx={{display: 'flex', justifyItems: 'center', alignContent: 'center'}}>
          <Grid container>
            {LINKS.map((list, index) => (
              <Grid xs={12} md={4}  key={index}>
                <Stack spacing={3} sx={{ my: 5 }}>
                  <Typography variant="h6" sx={{ color: "text.primary" }}>
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.secondary",
                      }}
                    >
                      <Box
                        component={Iconify}
                        icon={link.icon}
                        sx={{
                          mr: 1,
                          color: "primary.main",
                        }}
                      />
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
            <Grid xs={12} md={4} >
              <Stack spacing={1} sx={{ my: 5 }}>
                <Typography variant="h6" sx={{ color: "text.primary" }}>
                  {"Drustvene mreze"}
                </Typography>
                <Stack spacing={1} sx={{ my: 5 }} direction="row">
                  {_socials.map((social) => (
                    <IconButton
                      key={social.name}
                      sx={{ backgroundColor: "primary.main" }}
                      size="large"
                      onClick={() => router.push(social.path)}
                    >
                      <Iconify icon={social.icon} color="white" />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
