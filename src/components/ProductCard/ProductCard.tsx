
'use client'
import { Color as ColorType } from "@/types/Color";
import { Size as SizeType } from "@/types/Size";
import { Product } from "@/types/Product";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ColoredDot } from "../ColoredDot";
import { ProductCardActions } from "./ProductCardActions";

type ProductProps = {
  product: Product;
}


export const ProductCard = ({ product }: ProductProps) => {
  const defaultVariant = product.variants[0]
  const defaultColor = defaultVariant?.colors?.find(color => color.name === 'CRNA') || defaultVariant?.colors[0]
  const defaultSize = defaultVariant?.sizes?.find(size => size.name === 'S') || defaultVariant?.sizes[0]
  const [selectedColor, setSelectedColor] = useState<ColorType>(defaultColor)
  const [selectedSize, setSelectedSize] = useState<SizeType>(defaultSize)

  if (!product) return <>No product</>
  return (


    <div className="product-card flex flex-col p-2 ">
      <div className="product-card-img-container flex relative mx-auto">
        <Link href={`shop/product/${product.id}`}>
          {product.variants[0].images?.length > 0 ?
            <Image
              className="product-card-img"
              alt="Product image"
              src={`${process.env.NEXT_PUBLIC_API_IMG_HOST}${product.variants[0]?.images[0].url}`}
              width={200}
              height={200}
              style={{ objectFit: 'cover' }}
            /> : 'no image'}
        </Link>
      </div>

      {
        //ICON SECTION
      }
      <div className="">
        <ProductCardActions product={product} selectedColor={selectedColor} selectedSize={selectedSize} />
      </div>
      <div className="flex flex-col items-center justify-center mt-5 gap-y-2">
        <h2 className="text-black-400 text-center text-xl font-serif font-bold">{product.name}</h2>
        <ul className="">
          {product.variants?.map((variant) => {
            return variant.colors.length > 1 ?
             variant.colors?.map((color, index) => {
              return (
                <span key={index} className="variant-color" onClick={() => setSelectedColor(color)}>
                  <ColoredDot color={color} />
                </span>
              )
            })
            : ''
          })}

          <div>
            {selectedColor && <ColoredDot color={selectedColor} />}
          </div>
        </ul>
        <span className="font-strong text-[#e30613]">
          {product.price} {product.currency}
        </span>
      </div>
    </div >
  );
};
