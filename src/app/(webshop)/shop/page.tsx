import Image from "next/image";
import {PRODUCTS} from "@/mockData/products"
export default function Shop() {


  return (
    <main className="min-h-screen	 flex flex-col">
      <div className="flex pt-4">Katalog KACIGE STA GOD</div>
      <h1 className="pt-4">Ime kategorije</h1>

      <div className="grid grid-cols-4 gap-4">
        {PRODUCTS.map((product, index) => (
          <div
            className="product-card border rounded-md border-slate-200 flex flex-col p-2"
            key={index}
          >
            <Image
              className="rounded mx-auto"
              alt="Mountains"
              src={product.image}
              width={100}
              height={64}
              style={{
                width: "100px",
                height: "64px",
              }}
            />
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-red-400 self-center text-2xl">
                {product.name}
              </h2>
              <ul className="">
                {product.colors.map((color, index) => (
                  <li key={index}>{color.name}</li>
                ))}
              </ul>
              <span className="">{product.price} {product.currency}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
