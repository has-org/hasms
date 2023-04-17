import { ProductCard } from "@/components/ProductCard";
import { StaticImageData } from "next/image";


async function getData(categoryId: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/category/${categoryId}`, {
      method: 'GET',
      next: {
        revalidate: 10,
      }
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
  const category = await getData(parseInt(categoryId));
  if (!category) return <div>Category not found</div>;
  return (
    <main className="min-h-screen	 flex">
      {
        category.products?.map((product: any, index: number) => (
          <ProductCard product={product} key={index} />
        ))
      }

    </main>
  );
}
