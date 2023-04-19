

import { ProductDetails } from "@/components/ProductDetails";
import { ProductThumbnailsList } from "@/components/ProductThumbnailsList";
import Container from "@/components/UI/Container";
import { Product as ProductType } from "@/types/Product";


async function getProduct(id: number) {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/${id}`, {
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

export default async function Product({ params: { id } }: any) {
  const product: ProductType = await getProduct(id);

  const productVariants = product?.variants
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <main className="min-h-screen overflow-hidden">
      <Container firstSection={<ProductThumbnailsList variants={productVariants} />}>

        {product && <ProductDetails product={product} />}
        {/* {product.relatedProducts?.map((relatedProduct: ProductType, index: number) => {
          return (
            <div key={index}>
              {relatedProduct.name}
            </div>
          )
        }) */}

      </Container>

    </main>
  );
}