

import { ColoredDot } from "@/components/ColoredDot";
import { Color as ColorType } from "@/types/Color";
import { Product as ProductType } from "@/types/Product";
import { Size as SizeType } from "@/types/Size";
import { Variant as VariantType } from "@/types/Variant";
import Image, { StaticImageData } from "next/image";



async function getProduct(id: number) {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/${id}`, {
      method: 'GET',
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
  const product = await getProduct(id);
  const productSizes: SizeType[] = product?.variants[0]?.sizes
  const productColors: ColorType[] = product?.variants[0]?.colors
  const productVariants: VariantType[] = product?.variants
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <main className="min-h-screen">


      {/* tags */}
      <div className="flex">
        <div className="thumbnail-list-container mr-2">
          <div className="thumbnail-list-img-wrap flex relative">
            {
              product?.variants[0]?.image ? <Image className="thumbnail-list-img p-0.5" src={product.variants[0].image} fill alt={'blabla'}></Image> : 'no image'
            }
          </div>

        </div>
        <div className="gallery-preview-container mr-2">
          <div className="gallery-preview-img-wrap flex relative">
            {product?.variants[0]?.image ? <Image className="gallery-preview-img" src={product.variants[0].image} fill alt={'blabla'}></Image> : 'no image'
            }          </div>

        </div>
        <div className="flex flex-col product-details">
          <h1 className="product-name">{product.name}</h1>
          <h2 className="product-code">{product.code}</h2>
          <div className="product-brand flex gap-x-2">
            <span className="product-brand-key">
              Brand
            </span>
            <span className="product-brand-value">
              {product.manufacturer}
            </span>
          </div>
          <div className="product-model">
            <span className="product-model-key">
              {product.model && 'Model'}
            </span>
            <span className="product-model-value">
              {product.model}
            </span>
          </div>
          <div className="product-price flex gap-x-2">

            <span className="product-price-key">
              {product.price && 'Cijena'}
            </span>
            <span className="product-price-value flex gap-x-1">
              {product.price}
              <span className="product-currency">
                {product.currency}
              </span>
            </span>
          </div>

          <div className="variants-wrap flex items-center gap-x-2">
            <span className="variants-colors-title flex gap-x-2">Colors </span>

            {productColors.map((color: ColorType, index: number) => {
              return (
                <span key={index} className="variant-color">
                  <ColoredDot color={color} />
                </span>
              )
            })}
          </div>

          <div className="product-size flex gap-x-2">
            <span className="variants-colors-title flex gap-x-2">Sizes </span>

            {
              productSizes?.map((size, index: number) => {
                return (
                  <span key={index} className="variant-sizes-wrap">
                    <span>
                      {size.name}
                    </span>
                  </span>
                )
              })
            }
          </div>
          <div>Opis: {product.description}</div>
          <div>Napomena: {product.note}</div>
          <button className="bg-red-200" type="submit">Naruci </button>


          <div>Izdvajamo iz ponude:
            {product.relatedProducts?.map((relatedProduct: ProductType, index: number) => {
              return (
                <div key={index}>
                  <p>{relatedProduct.name}</p>
                </div>
              )
            })
            }
          </div>
        </div>

      </div>

    </main>
  );
}