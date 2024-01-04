import CategoryList from "@/components/sections/category/CategoryList";
import { Product as ProductType } from "@/types/Product";
import { StaticImageData } from "next/image";

async function getCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/categories`, {
      method: "GET",
    });
    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    return null;
  }
}

export default async function Shop() {
  const categories = await getCategories();
  if (!categories) return <div>Categories not found</div>;
  return <>
    <CategoryList categories={categories} />
  </>;
}
