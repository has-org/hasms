import { ProductCard } from "@/components/ProductCard";
import { Product as ProductType } from "@/types/Product";
import { StaticImageData } from "next/image";



async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products`, {
      method: 'GET',
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    return null
  }
}


async function getNavMenus() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/navigationMenus`, {
      method: 'GET',
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    return null
  }
}

export default async function Shop() {
  const products = await getData();
  const navigationMenu = await getNavMenus()

  if (!products) return <div>Products not found</div>;
  return (
    <main className="min-h-screen	 flex flex-col font-serif">

      <div className="flex pt-4">Katalog KACIGE INTEGRALNE</div>
      <div className="grid grid-cols-4 gap-4 mb-10">
        {products.map((product: ProductType, index: number) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </main>
  );
}
