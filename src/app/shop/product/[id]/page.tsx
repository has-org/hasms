import { ProductDetails } from "@/components/ProductDetails";
import { getProduct } from "@/services/apiService";
import { IProduct } from "@/types/IProduct";
import { Container } from "@mui/material";



export default async function Product({ params: { id } }: any) {
  const product: IProduct = await getProduct(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { variants } = product;

  return (
    <Container maxWidth="lg">
asdasd
    </Container>
  );
}
