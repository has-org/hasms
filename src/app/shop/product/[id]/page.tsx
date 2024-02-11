import { ProductDetails } from "@/components/ProductDetails";
import { IProduct } from "@/types/Product";

async function getProduct(id: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/product/${id}`,
      {
        method: "GET",
        next: {
          revalidate: 1,
        },
      }
    );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default async function Product({ params: { id } }: any) {
  const product: IProduct = await getProduct(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { variants } = product;

  return <main>{product && <ProductDetails product={product} />}</main>;
}
