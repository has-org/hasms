import { InquiryModal } from "@/components/modals/InquiryModal";
import {getProducts } from "@/services/apiService";
import { ICatalogue } from "@/types/Catalogue";
import {
  Card,
  CardMedia,
  Typography,
  Container,
  Button,
  Stack,
  Grid2 as Grid
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import InquiryButton from "./InquiryButton";
import { IProduct } from "@/types/IProduct";

export default async function CataloguesPage({ }: any) {
  const products = await getProducts({count: 10, page: 0});
  return (
    <>
      <Container maxWidth="lg">
        <Typography textAlign={"center"} variant="h4">
          Dostupno odmah
        </Typography>
        <Grid container spacing={2}>
          {products &&
            products?.map((product: IProduct, index: number) => {
              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}

                  key={`${product.name}` + index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  
                  <Link
                    href={`/catalogues/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      sx={{
                        padding: "4px",
                      }}
                    >
                      <Typography textAlign="center" variant="h6">
                        {product.name}
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
                          src={product?.main_image}
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
