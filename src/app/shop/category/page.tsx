import { getCategories } from "@/services/apiService";
import { ICategory } from "@/types/ICategory";
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default async function Shop() {
  const categories: ICategory[] = await getCategories({page: 0, count: 10});
  if (!categories) return <div>Categories not found</div>;

  return (
    <>
      <Container maxWidth="lg">
        <Grid container rowSpacing={5} columnSpacing={3}>
          <Grid xs={12}>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "300px",
                borderRadius: '16px'
              }}
            >
              <Image
                src="/images/proizvodi_main.png"
                fill
                alt="proizodi background"
              />
              <Typography variant="h1" sx={{ zIndex: "100" }}>
                PROIZVODI
              </Typography>
            </Box>
          </Grid>

          {categories?.map((category) => {
            return (
              <>
                <Grid xs={12} md={4} key={category.id}>
                  <Link
                    href={`/shop/category/${category.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        justifyContent: "end",
                        width: "100%",
                        height: "300px",
                        paddingBottom: "25px",
                        paddingLeft: "20px",
                        borderRadius: "16px",
                      }}
                    >
                      <Image
                        src={category.thumbnail}
                        fill
                        alt="proizvodi backgroud"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <Typography
                        variant="h6"
                        sx={{ zIndex: "100" }}
                        color="white"
                      >
                        {category.name}
                      </Typography>
                    </Box>
                  </Link>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
