import { ProductCard } from "@/components/ProductCard/ProductCard";
import { StaticImageData } from "next/image";
import { Category as CategoryType } from "@/types/Category";
import Container from "@/components/Container";
import Image from "next/image";
import NavigationCategorySection from "@/components/MUI/NavigationCategorySection";
import { Typography } from "@mui/material";
import { MainContainer } from "@/components/MUI/MainContainer";
import ProductGrid from "@/components/MUI/ProductGrid";


async function getData(categoryName: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/category/${categoryName}/`, {
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
export default async function ShopSubCategory({ params: { subCategoryName } }: any) {

  const category: CategoryType = await getData(subCategoryName);
  if (!category) return <div>catalogue not found</div>;
  const products = category.sub_categories[0].products
  return (
    <main className="min-h-screen">
      {/* <NavigationBreadcrumbs /> */}
      <Container firstSection={<NavigationCategorySection />}>
        <MainContainer containerItem={category} />

      {products ?  <ProductGrid products={products} /> : 'no products'}
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
