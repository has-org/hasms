import { InquiryModal } from "@/components/modals/InquiryModal";
import { getCatalogues } from "@/services/apiService";
import { ICatalogue } from "@/types/Catalogue";
import {
  Card,
  CardMedia,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import Link from "next/link";
import InquiryButton from "./InquiryButton";

export default async function CataloguesPage({}: any) {
  const catalogues = await getCatalogues();
  return (
    <>
      <Container maxWidth="lg">
        <Typography textAlign={"center"} variant="h4">
          Dostupno odmah
        </Typography>
        <Grid container spacing={2}>
          {catalogues &&
            catalogues?.map((catalogue: ICatalogue, index: number) => {
              return (
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  key={`${catalogue.name}` + index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href={`/catalogues/${catalogue.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      sx={{
                        padding: "4px",
                      }}
                    >
                      <Typography textAlign="center" variant="h6">
                        {catalogue.name}
                      </Typography>

                      <CardMedia
                        sx={{
                          mt: 2,
                          display: "flex",
                          width: "100%",
                          height: "350px",
                        }}
                      >
                        <Image
                          src={
                            catalogue.catalogue_variants[0]
                              .catalogue_variant_images[0].main_image
                          }
                          width={1024}
                          height={1024}
                          quality={100}
                          style={{
                            width: "1024px",
                            height: "auto",
                            borderRadius: "12px",
                            objectFit: "cover",
                          }}
                          alt="a"
                        />
                      </CardMedia>
                    </Card>
                  </Link>
                </Grid>
              );
            })}
        </Grid>
        <Stack sx={{ alignItems: "center", mt: 2 }} gap={2}>
          <Typography sx={{ color: "white" }} variant="h4">
            Za ostale modele zatražite ponudu
          </Typography>
          <InquiryButton />
          <Stack
            direction={"row"}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Typography sx={{ color: "white" }} variant="h4">
              Ostale modele pogledajte na
            </Typography>
            <Link
              href="https://www.yamaha-motor.eu/ba/hr/home/"
              target="_blank"
              style={{
                textDecoration: "none",
                textDecorationColor: "white",
                color: "white",
              }}
            >
              <Button>
                <Typography variant="h4">Yamaha</Typography>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
