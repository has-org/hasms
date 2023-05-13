import { ProductCard } from "@/components/ProductCard/ProductCard";
import { StaticImageData } from "next/image";
import { Category as CategoryType } from "@/types/Category";
import Container from "@/components/UI/Container";
import Image from "next/image";
import NavigationCategorySection from "@/components/MUI/NavigationCategorySection";
import { Typography } from "@mui/material";
import { MainContainer } from "@/components/MUI/MainContainer";
import ProductGrid from "@/components/MUI/ProductGrid";


async function getData(categoryId: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/category/${categoryId}`, {
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

const NavigationBreadcrumbs = () => { }
const Filters = () => { }
const CategorySection = () => { }
export default async function ShopCategory({ params: { categoryId } }: any) {

  const category: CategoryType = await getData(categoryId);
  if (!category) return <div>catalogue not found</div>;
  return (
    <main className="min-h-screen">
      {/* <NavigationBreadcrumbs /> */}
      <Container firstSection={<NavigationCategorySection />}>
        <MainContainer containerItem={category} />

        <ProductGrid products={category.products} />
        {/* {category.products.map((product, index) => {
          return (
            <ProductCard product={product} key={index} />
          )
        })
        } */}
      </Container>
    </main>
  );
}
