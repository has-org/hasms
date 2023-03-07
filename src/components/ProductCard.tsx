import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Color = {
  id: number;
  name: string;
  value: string;
};

type Subcategory = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  name: string;
  subcategory: Subcategory;
};

type Product = {
  id: number;
  name: string;
  colors: Color[];
  price: number;
  currency: string;
  image: string | StaticImageData;
  manufacturer: string;
  category: Category;
  variants?: Array<Variant>;
};

type ProductProp = {
  product: Product;
};

type Variant = {
  id: number;
  name: string;
  image: string | StaticImageData;
  colors: Color[]
}

export const ProductCard: React.FC<ProductProp> = ({ product }) => {
  return (
    <Link href={`product/${product.id}`}>
      <div className="product-card flex flex-col p-2 ">
        <div className="product-card-img-container flex relative mx-auto">
          <Image
            className="product-card-img"
            alt="Mountains"
            src={product.image}
            fill
            style={{objectFit: 'contain'}}
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-5 gap-y-2">
          <h2 className="text-black-400 text-center text-xl font-serif font-bold">{product.name}</h2>
          <ul className="">
            {product.variants?.map((variant, index) => {
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
