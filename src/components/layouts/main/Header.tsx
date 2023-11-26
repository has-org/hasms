import { useRef } from "react";
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
  Stack
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

// ----------------------------------------------------------------------

export default function Header() {
  const carouselRef = useRef(null);

  const theme = useTheme();

  const isDesktop = useResponsive("up", "md");

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <AppBar
      ref={carouselRef}
      sx={{
        boxShadow: 0,
        backgroundColor: (theme) => theme.palette.background.default,
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
          <Logo />
          <Stack
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 0.5, sm: 1.5 }}
          >
            {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}
            {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
          </Stack>
          <Stack>
            <Stack direction={"row"} justifyContent="end" spacing={5}>
              <Iconify
                icon="mdi:account"
                height={"45px"}
                width="45px"
                color="common.white"
              />
              <Iconify
                icon="mdi:cart"
                height={"45px"}
                width="45px"
                color="common.white"
              />
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
      {isOffset && <Shadow />}
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
        boxShadow: (theme) => theme.customShadows?.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
