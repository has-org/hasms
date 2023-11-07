import { ProductCard } from "@/components/ProductCard/ProductCard";
import { StaticImageData } from "next/image";
import { Category as CategoryType } from "@/types/Category";
import { Product as ProductType } from '@/types/Product'



async function getCategory(id: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/category/${id}`, {
      method: 'GET',
      next: {
        revalidate: 1,
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

async function getCategoryProducts(id: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/category/${id}/products`, {
      method: 'GET',
      next: {
        revalidate: 1,
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


export default async function ShopCategory({ params: { id } }: any) {

  const category: CategoryType = await getCategory(id);
  const products: ProductType[] = await getCategoryProducts(id)
  if (!category) return <div>catalogue not found</div>;
  return (
    <>
    </>
  );
}
