"use client";
import Iconify from "@/components/iconify";
import useResponsive from "@/hooks/useResponsive";
import { Box, Stack, Button, Paper, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { alpha } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/navigation";

const HomeWelcome = () => {
  const isDesktop = useResponsive("up", "lg");
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        height: "75vh",
        backgroundImage:
          "url(https://s3.villa-seaview.online/images/bg_frame.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: "-1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} md={6} sx={{}}>
            <Image
              src="/images/bikee.png"
              width={0}
              height={0}
              sizes="100vw, 50vw"
              style={{
                width: "100%",
                height: "auto",
              }} // optional
              alt="Motoshop 7"
            />
          </Grid>
          <Grid xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
            <Stack spacing={1}>
              <Typography variant="h4" fontWeight={400}>Provjereno najbolja</Typography>
              <Typography variant="h1" component="span" lineHeight={1}>
                {"MOTO OPREMA &"}
                <Typography
                  variant="h1"
                  component="span"
                  color="primary.main"
                  ml={1}
                >
                  {"DIJELOVI"}
                </Typography>
              </Typography>

              <Stack direction={"row"} spacing={1} pt={1}>
                <Button variant="contained" color="info" size="large" fullWidth onClick={() => router.push('/catalogues')}>
                  <Typography color={"common.white"}>{"PONUDA"}</Typography>
                </Button>
                <Button variant="outlined" size="large" fullWidth>
                  <Typography>SHOP</Typography>
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeWelcome;
