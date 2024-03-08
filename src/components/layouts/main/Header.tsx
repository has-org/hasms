"use client";
import { useRef, useState } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Container,
  Link,
  BoxProps,
  Stack,
  Typography,
  Drawer,
  alpha,
} from "@mui/material";
// hooks
import useOffSetTop from "@/hooks/useOffSetTop";
import useResponsive from "@/hooks/useResponsive";
// utils
import { bgBlur } from "@/utils/cssStyles";
// config
import { HEADER } from "@/config-global";
// routes
// components
import Logo from "../../logo";
// import Label from '../../components/label';
//
import navConfig from "./nav/config-navigation";
import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
import Iconify from "@/components/iconify";
import { CartSidebar } from "@/components/cart/sidebar/CartSidebar";

// ----------------------------------------------------------------------

export default function Header() {
  const [cartDrawerOpen, togglecartDrawerOpen] = useState(false);

  const carouselRef = useRef(null);

  const theme = useTheme();

  const isDesktop = useResponsive("up", "md");

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  const toggleCartDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      togglecartDrawerOpen(!cartDrawerOpen);
    };

  return (
    <AppBar
      ref={carouselRef}
      sx={{
        boxShadow: 0,
        backgroundColor: "background.default",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.paper }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{ height: 1, display: "flex", alignItems: "center" }}
          maxWidth="xl"
        >
          {isDesktop && <Logo />}
          <Stack
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent={{ xs: "space-between", lg: "center" }}
            spacing={{ xs: 0.5, sm: 1.5 }}
          >
            {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}
            {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
          </Stack>
          <Stack>
            <Stack direction={"row"} justifyContent="end" spacing={1}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => togglecartDrawerOpen(!cartDrawerOpen)}
              >
                <Stack direction={"row"} spacing={0.5} alignItems="center">
                  <Iconify icon="tdesign:cart" />
                  {isDesktop && (
                    <Typography variant="body1" fontWeight={500}>
                      KORPA
                    </Typography>
                  )}
                </Stack>
              </Button>
              <Button variant="outlined" color="secondary">
                <Stack direction={"row"} spacing={0.5} alignItems="center">
                  <Iconify
                    icon="iconamoon:profile-circle"
                  />
                </Stack>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
      {isOffset && <Shadow />}
      <Drawer
        open={cartDrawerOpen}
        onClose={toggleCartDrawer(false)}
        anchor="right"
        PaperProps={{
          sx: {
            width: "30%",
            backgroundColor: alpha("#FFFFFF", 0.47),
            backdropFilter: "blur(50px)",
          },
        }}
      >
        <CartSidebar />
      </Drawer>
    </AppBar>
  );
}

// ----------------------------------------------------------------------

function Shadow({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: "auto",
        borderRadius: "50%",
        position: "absolute",
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows?.z1,
        ...sx,
      }}
      {...other}
    />
  );
}
