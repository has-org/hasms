import { ProductCard } from "@/components/ProductCard";
import { StaticImageData } from "next/image";

type Product = {
  id: number;
  name: string;
  colors: {
    id: number;
    name: string;
    value: string;
  }[];
  price: number; currency: string; image: string | StaticImageData;
  manufacturer: string;
  category: {
    id: number;
    name: string;
    subcategory: {
      id: number;
      name: string;
    };
  };
}

async function getData() {
  const res = await fetch('http://localhost:8000/products', {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export default async function Shop() {

  const products = await getData();
  return (
    <main className="min-h-screen	 flex flex-col font-serif">

      <div className="flex pt-4">Katalog KACIGE INTEGRALNE</div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product: Product, index: number) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </main>
  );
}
