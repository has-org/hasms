// @mui
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
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import ContactForm from "./ContactForm";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

// ----------------------------------------------------------------------

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
        name: "PON-SUB: 09:00 - 17:00h",
        href: "#",
        icon: "mingcute:time-line",
      },
      {
        name: "NED: 09:00 - 15:00h",
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
        name: "motoshop7bl@gmail.com",
        href: "#",
        icon: "material-symbols:mail-outline",
      },
      {
        name: "PON-SUB: 09:00 - 17:00h",
        href: "#",
        icon: "mingcute:time-line",
      },
      {
        name: "NED: 09:00 - 15:00h",
        href: "#",
        icon: "mingcute:time-line",
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
];

// ----------------------------------------------------------------------

export default function Footer() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          {LINKS.map((list, index) => (
            <Grid xs={6} md={3} key={index}>
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
                        width: 20,
                        height: 20,
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
        </Grid>
      </Container>
    </>
  );
}
