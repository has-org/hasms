/* eslint-disable react/display-name */
import { forwardRef } from "react";
// import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          height: 40,
          ...sx,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        {...other}
      >
        <Image
          src={'/images/logomw.png'}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            objectFit: "fill",
          }} // optional
          alt="Motoshop 7"
        />
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      // <Link component={RouterLink} to="/" sx={{ display: "contents" }}>
      <Link
        href={'/'}
        style={{
          minHeight: "inherit",
        }}
      >
        {logo}
        
      </Link>
    );
  }
);

export default Logo;
