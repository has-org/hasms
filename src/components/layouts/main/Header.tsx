import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Link, BoxProps } from '@mui/material';
// hooks
import useOffSetTop from '@/hooks/useOffSetTop';
import useResponsive from '@/hooks/useResponsive';
// utils
import { bgBlur } from '@/utils/cssStyles';
// config
import { HEADER } from '@/config-global';
// routes
// components
import Logo from '../../logo';
// import Label from '../../components/label';
//
import navConfig from './nav/config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';

// ----------------------------------------------------------------------

export default function Header() {
  const carouselRef = useRef(null);

  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <AppBar
      ref={carouselRef}
      sx={{ boxShadow: 0, backgroundColor: (theme) => theme.palette.background.default}}
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
        <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}
          {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
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
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows?.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
