
import { ProductDetails } from "@/components/ProductDetails";
import { ProductThumbnailsList } from "@/components/ProductThumbnailsList";
import { Product as ProductType } from "@/types/Product";
import Image from "next/image";


async function getProduct(productID: number) {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/${productID}`, {
      method: 'GET',
      next: {
        revalidate: 1,
      }
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    console.log(e)
    return null
  }
}

export default async function Product({ params: { productID } }: any) {
  const product: ProductType = await getProduct(productID);

  const productVariants = product?.variants
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <main className="min-h-screen overflow-hidden">
      
        {product && <ProductDetails product={product} />}
    

    </main>
  );
}