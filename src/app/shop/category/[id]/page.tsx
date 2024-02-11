import { Category as CategoryType } from "@/types/Category";
import Toolbar from "@/components/sections/shop/toolbar/Toolbar";
import Banner from "@/components/sections/shop/banner/Banner";
import ItemList from "@/components/sections/shop/item-list/ItemList";

import styles from "./styles.module.css";
import { IProduct } from "@/types/Product";

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
  const products: IProduct[] = await getCategoryProducts(id);
  if (!category) return <div>catalogue not found</div>;



  const brandNames = ["brand1", "brand2", "brand3", "brand4", "brand5"];


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
          <ItemList items={products} />
        </div>
      </div>
    </div>
  );
}
