import { ProductCard } from "@/components/ProductCard";
import { StaticImageData } from "next/image";

type Product = {
  id: number;
  name: string;
  price: number; currency: string; 
  image: string | StaticImageData;
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
  try {
    const res = await fetch('http://localhost:8000/products', {
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    console.log(e)
    return null
  }
}
export default async function ShopCategory({ params: { categoryId } }: any) {
  const products = await getData();
  if (!products) return <div>Products not found</div>;
  return (
    <main className="min-h-screen	 flex flex-col">

      <div className="flex pt-4">aaa{categoryId}</div>
    
    </main>
  );
}
