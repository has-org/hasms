import { ProductDetails } from "@/components/ProductDetails";
import { getProduct } from "@/services/apiService";
import { IProduct } from "@/types/IProduct";



export default async function Product({ params: { id } }: any) {
  const product: IProduct = await getProduct(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { variants } = product;

  return <main>{product && <ProductDetails product={product} />}</main>;
}
