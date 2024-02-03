import { getCatalogues } from "@/services/apiService";
import { Card, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import Link from "next/link";

export type ICatalogue = {
  main_image: string;
  id: string;
  name: string;
  image: string;
  type: string;
};

export default async function CataloguesPage({}: any) {
  const catalogues = await getCatalogues();
  return (
    <>
      <section>
        <Grid container spacing={5}>
          {catalogues &&
            catalogues?.map((catalogue: ICatalogue, index: number) => {
              return (
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  lg={4}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      padding: "12px",
                    }}
                  >
                    <Typography textAlign="center" variant="h6">
                      {catalogue.name}
                    </Typography>
                    <Link
                      href={`/catalogues/${catalogue.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <CardMedia sx={{ mt: 2, width: "100%", height: "100%" }}>
                        <Image
                          src={catalogue.main_image}
                          width={1024}
                          height={300}
                          style={{
                            width: "1024px",
                            height: "auto",
                            borderRadius: "12px",
                          }}
                          alt="a"
                        />
                      </CardMedia>
                    </Link>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </section>
    </>
  );
}
