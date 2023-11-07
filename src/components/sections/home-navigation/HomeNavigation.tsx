"use client";
import Iconify from "@/components/iconify";
import useResponsive from "@/hooks/useResponsive";
import { Box, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

const HomeNavigation = () => {
  const isDesktop = useResponsive("up", "lg");

  return (
    <Box>
      <Stack direction={"row"}>
        <Box>
          <Typography></Typography>
          <Typography></Typography>
        </Box>
        <Box>
          <Image
            className="logo-img"
            alt="Cooperator Logo"
            src={
             
                 `${process.env.NEXT_PUBLIC_API_IMG_HOST}/`
            
            }
            width={500}
            height={300}
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default HomeNavigation;
