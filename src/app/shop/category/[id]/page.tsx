import { ProductCard } from "@/components/ProductCard/ProductCard";
import { StaticImageData } from "next/image";
import { Category as CategoryType } from "@/types/Category";
import { Product as ProductType } from "@/types/Product";
import Toolbar from "@/components/sections/shop/toolbar/Toolbar";
import Banner from "@/components/sections/shop/banner/Banner";
import ItemList from "@/components/sections/shop/item-list/ItemList";

import styles from "./styles.module.css";

async function getCategory(id: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/category/${id}`,
      {
        method: "GET",
        next: {
          revalidate: 1,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function getCategoryProducts(id: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/category/${id}/products`,
      {
        method: "GET",
        next: {
          revalidate: 1,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default async function ShopCategory({ params: { id } }: any) {
  const category: CategoryType = await getCategory(id);
  const products: ProductType[] = await getCategoryProducts(id);
  if (!category) return <div>catalogue not found</div>;

  console.log(category);

  const brandNames = ["brand1", "brand2", "brand3", "brand4", "brand5"];
  const items = [
    {
      title: "Item 1",
      subtitle: "Subtitle 1",
      price: "10",
      originalPrice: "20",
    },
    {
      title: "Item 2",
      subtitle: "Subtitle 2",
      price: "20",
      originalPrice: "30",
    },
    {
      title: "Item 3",
      subtitle: "Subtitle 3",
      price: "30",
      originalPrice: "40",
    },
    {
      title: "Item 4",
      subtitle: "Subtitle 4",
      price: "40",
      originalPrice: "50",
    },
  ];

  // return <>{JSON.stringify(products)}</>;

  return (
    <div className={styles.wrapper}>
      <div>
        <Banner />
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.ToolbarWrapper}>
          <Toolbar brands={brandNames} />
        </div>
        <div className={styles.ItemListWrapper}>
          <ItemList items={items} />
        </div>
      </div>
    </div>
  );
}
