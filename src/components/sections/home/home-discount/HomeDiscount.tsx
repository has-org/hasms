"use client";

import useResponsive from "@/hooks/useResponsive";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";

const HomeDiscount = ({ discount }: any) => {
  const isDesktop = useResponsive("up", "lg");

  return (
    <Box
      sx={{
        position: "relative",
        pt: 2,
      }}
    >
      <Container maxWidth="xl" sx={{ pt: 2 }}>
        <Grid container>
          <Grid xs={12} md={6} display="flex">
            <Image
              src={discount.image}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              alt="Motoshop 7"
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            display="flex"
            alignItems="center"
            sx={{ backgroundColor: "background.paper", px: 3 }}
          >
            <Stack>
              <Typography variant="h2">{discount.title}</Typography>

              <Typography variant="body1" fontWeight={300}>
                {discount.description}
              </Typography>

              <Button variant="contained" color="info">
                PONUDA
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeDiscount;
