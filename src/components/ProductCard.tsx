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
  colors: Array<Color>;
  price: number;
  currency: string;
  image: string | StaticImageData;
  manufacturer: string;
  category: Category;
};

type ProductProp = {
  product: Product;
};

export const ProductCard: React.FC<ProductProp> = ({ product }) => {
  return (
    <Link href={`product/${product.id}`}>
      <div className="product-card flex flex-col p-2">
        <Image
          className="rounded mx-auto"
          alt="Mountains"
          src={product.image}
          width={200}
          height={200}
          style={{
            width: "200px",
            height: "200px",
            objectFit: 'contain'
          }}
        />
        <div className="flex flex-col items-center justify-center mt-5 gap-y-2">
          <h2 className="text-black-400 text-center text-xl font-serif font-bold">{product.name}</h2>
          <ul className="">
            {/* {product.colors.map((color, index) => (
              <li key={index}>{color.name}</li>
            ))} */}
          </ul>
          <span className="font-strong text-[#e30613]">
            {product.price} {product.currency}
          </span>
        </div>
      </div>
    </Link>
  );
};
