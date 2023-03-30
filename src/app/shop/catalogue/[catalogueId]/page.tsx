import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { ProductCard } from "@/components/ProductCard";
import { StaticImageData } from "next/image";


async function getData(catalogueId: number) {
  try {
    const res = await fetch(`http://localhost:8000/catalogue/${catalogueId}`, {
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
export default async function ShopCatalogue({ params: { catalogueId } }: any) {
  const [catalogue]: [catalogue: CatalogueType] = await getData(catalogueId);
  if (!catalogue) return <div>catalogue not found</div>;
  return (
    <main className="min-h-screen	 flex flex-col">
      <div className="flex flex-col gap-2 pt-4">
        <span>
          ID: {catalogue.id}
        </span>
        <span>
          Name: {catalogue.name}
        </span>
        <span>
          Type: {catalogue.type}
        </span>
        <span>
          Is primary: {JSON.stringify(catalogue.primary)}
        </span>

        {
          catalogue?.products ? catalogue.products.map((product, i) => {
            return <ProductCard product={product} key={i} />
          }) : null

        }


      </div>

    </main>
  );
}
