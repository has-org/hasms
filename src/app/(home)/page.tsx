import { Cooperator as CooperatorType } from "@/types/Cooperator";

import { getCatalogues, getCooperators, getPosts } from "@/services/apiService";
import HomeTrending from "@/components/sections/home/home-trending";
import HomeBlog from "@/components/sections/home/home-blog";
import UAParser from "ua-parser-js";
import { headers } from "next/dist/client/components/headers";
import HomeCooperators from "@/components/sections/home/home-cooperators/HomeCooperators";
import { Button, Container, Stack, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import Link from "next/link";
import { ICatalogue } from "@/types/Catalogue";

async function getUserAgent() {
  let userAgent;
  const headersList = headers();
  const userAgentHeader = headersList.get("user-agent");
  if (userAgentHeader) {
    userAgent = userAgentHeader;
  } else {
    userAgent = window?.navigator?.userAgent;
  }
  const parser = new UAParser();

  parser.setUA(userAgent);
  const result = parser.getResult();
  switch (result.device.type) {
    case "wearable":
    case "mobile":
      return "mobile";
    case "console":
    case "tablet":
    case "smarttv":
    case "embedded":
    case undefined:
    default:
      return "desktop";
  }
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  return {
    title: "Pocetna",
    description: "My description",
  };
}

export default async function HomePage() {
  const userAgent = await getUserAgent();
  const catalogues: ICatalogue[] = await getCatalogues();
  const cooperators: CooperatorType[] = await getCooperators();
  const posts = await getPosts();

  const discount = {
    name: "kacige 20%",
    title: "20% Popusta Na Nove Modele Kaciga",
    image: "/images/discount1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  };

  return (
    <>
      <section>
        <Box
          sx={{
            width: "100%",
            height: "75vh",
            backgroundImage:
              "url(https://api.villa-seaview.online/images/?url=https://s3.villa-seaview.online/images/bg_frame.png&w=1024&q=100)",
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
              <Grid
                xs={12}
                md={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  priority
                  src="/images/bikee.png"
                  width={600}
                  height={600}
                  style={{ width: "auto", height: "auto" }}
                  alt="Motoshop 7"
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack spacing={1}>
                  <Typography variant="h4" fontWeight={400}>
                    Provjereno najbolja
                  </Typography>
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
                    <Link
                      href={"/catalogues"}
                      style={{ textDecoration: "none", width: "100%" }}
                    >
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        fullWidth
                      >
                        <Typography variant="h6">Ponuda</Typography>
                      </Button>
                    </Link>
                    <Link
                      href={"/shop"}
                      style={{ textDecoration: "none", width: "100%" }}
                    >
                      <Button variant="outlinedTransparent" size="large" fullWidth>
                        <Typography variant="h6">Shop</Typography>
                      </Button>
                    </Link>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            pt: 2,
          }}
        >
          <Container maxWidth="xl" sx={{ pt: 2 }}>
            <HomeTrending />
          </Container>
        </Box>
      </section>

      <section>
        <Box
          sx={{
            position: "relative",
            pt: 2,
          }}
        >
          <Typography textAlign={"center"} variant="h2">
            Najnovije sa bloga
          </Typography>
          <Container maxWidth="xl" sx={{ pt: 2 }}>
            <HomeBlog posts={posts} />
          </Container>
        </Box>
      </section>

      <section>
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
      </section>

      <section>
        <Stack display="flex" justifyContent={"center"}>
          <Typography textAlign={"center"} variant="h2">
            Cjenovnici
          </Typography>
          <Button>
            <Link
              href={"/priceCatalogue"}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Typography variant="h6" color={"white"}>
                Pogledajte kompletnu ponudu cijena
              </Typography>
            </Link>
          </Button>
        </Stack>
      </section>

      <section>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="xl">
            <HomeCooperators cooperators={cooperators} />
          </Container>
        </Box>
      </section>
    </>
  );
}
