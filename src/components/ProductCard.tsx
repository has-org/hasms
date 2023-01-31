import Image, { StaticImageData } from "next/image";

type Color = {
    id: number,
    name: string,
    value: string
}

type Subcategory = {
        id: number,
        name: string,
}

type Category = {
        id: number,
        name: string,
        subcategory: Subcategory
}

type Product = {
    name: string,
    colors: Array<Color>,
    price: number,
    currency: string,
    image: string | StaticImageData,
    manufacturer: string,
    category: Category
}

export default function ProductCard(props: { product: Product }) {
    const {product } = props
  return (
    <div
      className="product-card border rounded-md border-slate-200 flex flex-col p-2"
    >
      <Image
        className="rounded mx-auto object-container"
        alt="Mountains"
        src={product.image}
        width={200}
        height={200}
        style={{
          width: "200px",
          height: "200px",
        }}
      />
      <div className="flex flex-col items-center justify-center mt-5 gap-y-2">
        <h2 className="text-black-400 text-center text-xl">{product.name}</h2>
        <ul className="">
          {product.colors.map((color, index) => (
            <li key={index}>{color.name}</li>
          ))}
        </ul>
        <span className="">
          {product.price} {product.currency}
        </span>
      </div>
    </div>
  );
}
