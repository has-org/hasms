

import { Product as ProductType } from "@/types/Product";
import Image from "next/image";


async function getProduct(productName: string) {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/${productName}`, {
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

export default async function Product({ params: { productName } }: any) {
  const product: ProductType = await getProduct(productName);

  const productVariants = product?.variants
  if (!product) {
    return <div>Product not found</div>;
  }
  return (

  );
}