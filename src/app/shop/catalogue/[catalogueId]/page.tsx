import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { ProductCard } from "@/components/ProductCard";


async function getData(catalogueId: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/catalogue/${catalogueId}`, {
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
      
    </main>
  );
}
