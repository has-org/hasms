import CheckboxCollapsible from "@/components/collapsible/CheckboxCollapsible";
import ColorCollapsible from "@/components/collapsible/ColorCollapsible";
import PriceCollapsible from "@/components/collapsible/PriceCollapsible";
import { getCategory, getCategoryProducts } from "@/services/apiService";
import { ICategory } from "@/types/ICategory";
import { IProduct } from "@/types/IProduct";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";

export default async function ShopCategory({ params: { id } }: any) {
  const category: ICategory = await getCategory(id);
  const {subcategories} = category
  const categoryTypes = [...new Set(subcategories.map(subcategory => subcategory.name))]
  const products: IProduct[] = await getCategoryProducts(id);
 
  const manufacturerTypes = [...new Set(products.map(product => product.manufacturer))]
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
            <Image src={category.main_image} fill alt="proizvodi backgroud" />
            <Typography variant="h1" sx={{ zIndex: "100" }}>
              {category.name}
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={3}>
          <Stack>
            <Typography variant="body2">Prodavnica - kacige</Typography>
            <CheckboxCollapsible title="Vrsta" selectFields={categoryTypes} />
            <CheckboxCollapsible
              title="Brend"
              selectFields={manufacturerTypes}
            />
            {/* <CheckboxCollapsible
              title="Veličina"
              selectFields={[

              ]}
            /> */}
            <ColorCollapsible
              title="Boja"
              colors={[{ name: "crvena", value: "#F12212" }]}
            />
            <PriceCollapsible title="Cijena" min={0} max={70000} />
          </Stack>
        </Grid>
        <Grid xs={12} md={8}></Grid>
      </Grid>
    </Container>
  );
}
