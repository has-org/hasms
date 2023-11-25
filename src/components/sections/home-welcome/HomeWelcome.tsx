"use client";
import Iconify from "@/components/iconify";
import useResponsive from "@/hooks/useResponsive";
import { Box, Grid, Stack, Button, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { alpha } from "@mui/material/styles";


const HomeWelcome = () => {
  const isDesktop = useResponsive("up", "lg");

  return (
    <>
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
        <Stack>
          <Box sx={{ width: "460px" }}>
            <Stack>
              <Typography variant="h4">Provjereno najbolja</Typography>
              <Typography variant="h2" component="span">
                {"MOTO OPREMA &"}
                <Typography variant="h2" component="span" color="primary.main" ml={3}>
                  {"DIJELOVI"}
                </Typography>
              </Typography>
            </Stack>
          </Box>
          <Stack direction={"row"} spacing={3}>
            <Button variant="contained" color="info">
              <Typography color={"common.white"}>{"PONUDA"}</Typography>
            </Button>
            <Button variant="outlined">
              <Typography>SHOP</Typography>
            </Button>
          </Stack>
        </Stack>
        <Box
          sx={{
            width: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/bike.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }} // optional
            alt="Motoshop 7"
          />
        </Box>
      </Box>
    </>
  );
};

export default HomeWelcome;
