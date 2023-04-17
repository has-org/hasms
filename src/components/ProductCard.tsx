import { Product } from "@/types/Product";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProductProps = {
  product: Product;
}


export const ProductCard = ({ product }: ProductProps) => {
  if (!product) return <>No product</>
  return (
    <Link href={`shop/product/${product.id}`}>
      <div className="product-card flex flex-col p-2 ">
        <div className="product-card-img-container flex relative mx-auto">
          {product.variants[0].images?.length > 0 ?
            <Image
              className="product-card-img"
              alt="Product image"
              src={`${process.env.NEXT_PUBLIC_API_IMG_HOST}${product.variants[0]?.images[0].url}`}
              fill
              style={{ objectFit: 'contain' }}
            /> : 'no image'}
        </div>

        <div className="flex flex-col items-center justify-center mt-5 gap-y-2">
          <h2 className="text-black-400 text-center text-xl font-serif font-bold">{product.name}</h2>
          <ul className="">
            {product.variants?.map((variant) => {
              return variant.colors?.map((color, index) => {
                return (
                  <div key={index}>
                    {color.name}
                  </div>
                )
              })

            })}
          </ul>
          <span className="font-strong text-[#e30613]">
            {product.price} {product.currency}
          </span>
        </div>
      </div>
    </Link>
  );
};
