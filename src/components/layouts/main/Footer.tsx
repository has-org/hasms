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
  Grid2 as Grid,
} from "@mui/material";
// routes
// _mock
// components
import Iconify from "@/components/iconify";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

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
        href: "https://maps.app.goo.gl/b2JLwiRgeLDk3oRF6",
        icon: "vaadin:office",
      },
      {
        name: "+387 51 305 077",
        href: "tel:+387 51 305 077",
        icon: "ic:baseline-phone",
      },
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
        href: "https://maps.app.goo.gl/erqUqb4TNfgvoS1r9",
        icon: "vaadin:office",
      },

      {
        name: "+387 65 514 807",
        href: "tel:+387 65 514 807",
        icon: "ic:baseline-phone",
      },
      {
        name: "+387 66 173 700",
        href: "tel:+387 66 173 700",
        icon: "ic:baseline-phone",
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
    headline: "Servis",
    children: [
      {
        name: "+387 66 173 700",
        href: "tel:+387 66 173 700",
        icon: "ic:baseline-phone",
      },
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
      {
        name: "+387 66 173 700",
        href: "tel:+387 66 173 700",
        icon: "ic:baseline-phone",
      },
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
      { name: "Narudzbine", href: "#", icon: "" },
      { name: "Adrese", href: "#", icon: "" },
      { name: "Blog", href: "/blog", icon: "" },
    ],
  },
  {
    headline: "Brzi linkovi",
    children: [
      { name: "Reklamacije", href: "/complaints", icon: "" },
      { name: "Uslovi kupovine", href: "/shopping-process", icon: "" },
      { name: "Načini plaćanja", href: "/payment-methods", icon: "" },
      { name: "O nama", href: "/about-us", icon: "" },
      { name: "Cjenovnici", href: "/price-list", icon: "" },
    ],
  },
  {
    headline: "Podaci o firmi",
    children: [
      { name: "Naziv: 'MOTO SHOP 7 D.O.O' ", href: "#", icon: "" },
      { name: "JIB: 4402922760000", href: "#", icon: "" },
      { name: "PDV: 402922760000", href: "#", icon: "" },
      { name: "Adresa: Jesenjinova 14, 78000 Banja Luka", href: "#", icon: "" },
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
        <Container maxWidth="lg">
          <Grid container columnSpacing={2}>
            {LINKS.map((list, index) => (
              <Grid xs={12} md={3} key={index}>
                <Stack spacing={3} sx={{ my: 5 }}>
                  <Typography variant="h6" sx={{ color: "text.primary" }}>
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      variant="body1"
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
                      <Typography variant="body2">{link.name}</Typography>
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
            <Grid xs={12} md={3}>
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
