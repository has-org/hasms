import CheckboxCollapsible from "@/components/collapsible/CheckboxCollapsible";
import ColorCollapsible from "@/components/collapsible/ColorCollapsible";
import PriceCollapsible from "@/components/collapsible/PriceCollapsible";
import Scrollbar from "@/components/scrollbar/Scrollbar";
import {
  getCategory,
  getCategoryProducts,
  getCategoryProductsColors,
  getCategoryProductsSizes,
} from "@/services/apiService";
import { ICategory } from "@/types/ICategory";
import { IProduct } from "@/types/IProduct";
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import Link from "next/link";

export default async function ShopCategory({ params: { id } }: any) {
  const category: ICategory = await getCategory({ id: id });
  const { subcategories } = category;
  const categoryTypes = [
    ...new Set(subcategories?.map((subcategory) => subcategory.name)),
  ];
  const products: IProduct[] = await getCategoryProducts({
    id,
    page: 0,
    count: 10,
  });
  const categoryProductsSizes = await getCategoryProductsSizes({ id: id });
  const categoryProductsColors = await getCategoryProductsColors({ id: id });
  const manufacturerTypes = [
    ...new Set(products?.map((product) => product.manufacturer)),
  ];
  if (!category) return <div>catalogue not found</div>;

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid xs={12}>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "300px",
              borderRadius: "16px",
            }}
          >
            <Image src={category?.main_image} fill alt="proizvodi backgroud" />
            <Typography variant="h1" sx={{ zIndex: "100" }}>
              {category?.name}
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={3}>
          <Typography variant="body2">Prodavnica - kacige</Typography>
          <CheckboxCollapsible title="Vrsta" selectFields={categoryTypes} />
          <CheckboxCollapsible title="Brend" selectFields={manufacturerTypes} />
          <CheckboxCollapsible
            title="Veličina"
            selectFields={categoryProductsSizes}
          />
          <ColorCollapsible title="Boja" colors={categoryProductsColors} />
          <PriceCollapsible title="Cijena" min={0} max={70000} />
        </Grid>
        <Grid container xs={12} md={9}>
          <Grid container columnSpacing={4} rowSpacing={4}>
            <Grid xs={12} sx={{display: 'flex'}}>
              <Typography variant="body2">
              filteri
              </Typography>
            </Grid>
            {products?.map((product) => {
              return (
                <Grid xs={12} md={4} lg={4} key={product?.id}>
                  <Card sx={{ height: "376px", boxShadow: 0, borderRadius: '16px' }}>
                    <Link
                      href={`/shop/product/${product.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Box sx={{ height: "184px", position: "relative", borderRadius: '16px' }}>
                        {product.image && (
                          <Image src={product.image} fill alt="product image" />
                        )}
                      </Box>
                    </Link>

                    <Stack sx={{ px: "20px", pb: "20px" }} spacing={3}>
                      <Stack
                        direction={"row"}
                        spacing={1}
                        sx={{
                          display: "flex",
                          pt: 2,
                        }}
                      >
                        <Typography variant="body1">{product?.name}</Typography>
                        <Typography variant="body1">
                          {product?.manufacturer}
                        </Typography>
                      </Stack>

                      <Typography fontSize={28} color="#00D0FD">
                        {product?.price} KM
                      </Typography>

                      <Button variant="outlined">+ Dodaj u korpu</Button>
                    </Stack>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
