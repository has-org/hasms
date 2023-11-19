// @mui
import { Box, BoxProps } from "@mui/material";
// hooks
import useResponsive from "@/hooks/useResponsive";
// config
import { HEADER, NAV } from "@/config-global";
// components

// ----------------------------------------------------------------------

const SPACING = 0;

export default function Main({ children, sx, ...other }: BoxProps) {

  const isDesktop = useResponsive("up", "lg");

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(isDesktop && {
          py: `${HEADER.H_DASHBOARD_DESKTOP + SPACING}px`,
          // width: `calc(100% - ${NAV.W_DASHBOARD}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
