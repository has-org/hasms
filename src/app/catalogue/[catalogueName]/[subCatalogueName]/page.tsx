import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import Image from "next/image";
import NavigationCategorySection from "@/components/MUI/NavigationCategorySection";
import { Typography } from "@mui/material";
import { MainContainer } from "@/components/MUI/MainContainer";
import ProductGrid from "@/components/MUI/ProductGrid";
import { Product, Product as ProductType} from "@/types/Product";
import { getCatalogueProducts } from "@/services/apiService";




const NavigationBreadcrumbs = () => { }
const Filters = () => { }
const CategorySection = () => { }
export default async function ShopCatalogue111({ params: { catalogueName } }: any) {

  const catalogueProducts = await getCatalogueProducts(catalogueName);
  if (!catalogueProducts) return <div>catalogue products not found</div>;
  return (
    <main className="min-h-screen">
      {/* <NavigationBreadcrumbs /> */}
        {/* <MainContainer containerItem={catalogue} /> */}

        <ProductGrid products={catalogueProducts} />
        {/* {category.products.map((product, index) => {
          return (
            <ProductCard product={product} key={index} />
          )
        })
        } */}
    </main>
  );
}
