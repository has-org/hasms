import { Box, Button, Card, Container, Stack, Typography, Grid2 as Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default async function Shop() {

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign={"center"}>
          PRODAVNICA
        </Typography>
        <Grid container spacing={2} mt={5}>
          <Grid xs={12} md={6} height="520px">
            <Link href="/catalogues" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={"/catalogue_thumbnail.png"}
                  fill
                  alt="catalogue background"
                />
                <Typography
                  variant="h6"
                  sx={{
                    zIndex: "100",
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    color: "white",
                  }}
                >
                  Katalog
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid xs={12} md={6} height="520px">
            <Link href="/shop/category" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={"/category_thumbnail.png"}
                  fill
                  alt="catalogue background"
                />
                <Typography
                  variant="h6"
                  sx={{
                    zIndex: "100",
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    color: "white",
                  }}
                >
                  Proizvodi
                </Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
