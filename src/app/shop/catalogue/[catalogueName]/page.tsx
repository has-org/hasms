import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import Container from "@/components/UI/Container";
import Image from "next/image";
import NavigationCategorySection from "@/components/MUI/NavigationCategorySection";
import { Typography } from "@mui/material";
import { MainContainer } from "@/components/MUI/MainContainer";
import ProductGrid from "@/components/MUI/ProductGrid";


async function getData(catalogueName: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/catalogue/${catalogueName}`, {
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


const NavigationBreadcrumbs = () => { }
const Filters = () => { }
const CategorySection = () => { }
export default async function ShopCatalogue({ params: { catalogueName } }: any) {

  const [catalogue]: [catalogue: CatalogueType] = await getData(catalogueName);
  if (!catalogue) return <div>catalogue not found</div>;
  return (
    <main className="min-h-screen">
      {/* <NavigationBreadcrumbs /> */}
      <Container firstSection={<NavigationCategorySection />}>
        <MainContainer containerItem={catalogue} />

        <ProductGrid products={catalogue.categories[0]?.products!!} />
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
