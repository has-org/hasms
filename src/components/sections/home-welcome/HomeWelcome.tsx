"use client";
import Iconify from "@/components/iconify";
import useResponsive from "@/hooks/useResponsive";
import { Box, Grid, Stack, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { alpha } from "@mui/material/styles";

const HomeWelcome = () => {
  const isDesktop = useResponsive("up", "lg");

  return (
    <>
      <Stack direction="row">
        <Box
          sx={{
            width: "50%",
            backgroundColor: (theme) => theme.palette.primary.darker,
            padding: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box width={"400px"}>
            <Stack spacing={3} justifyContent="center">
              <Typography variant="h2" color={"text.secondary"}>
                Motoshop #7
              </Typography>
              <Typography color={"text.secondary"}>
                {`Dobrodošli u "Moto Shop 7" - vašu destinaciju za strast prema
                motorima još od 2010.`}
              </Typography>
              <Typography color={"text.secondary"}>
                {`                Nalazimo se na dve lokacije u Banjoj Luci i ponosno smo
                ovlašteni Yamaha serviser i distributer.`}
              </Typography>
              <Typography color={"text.secondary"}>
                {`                Naša strast prema motociklima odražava se u našem odabiru
                vrhunske opreme i dijelova.`}
              </Typography>
              <Typography color={"text.secondary"}>
                {` Pridružite se "Moto Shop 7" zajednici i ostvarite svoje moto
                snove!`}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 5,
                  backgroundColor: (theme: any) =>
                    alpha(theme.palette.common.fluo, 0.72),
                  "&:hover": {
                    backgroundColor: (theme: any) =>
                      alpha(theme.palette.common.fluo, 0.87),
                  },
                }}
              >
                O nama
              </Button>
            </Stack>
          </Box>
        </Box>
        <Image
          src="/images/motoshop7blog.webp"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto" }} // optional
          alt="Motoshop 7"
        />
      </Stack>
    </>
  );
};

export default HomeWelcome;
