
import CatalogueList from "@/components/sections/catalogue/catalogue-list/CatalogueList";
import { getCatalogueProducts, getCatalogues } from "@/services/apiService";

export default async function CataloguesPage({  }: any) {
  const catalogues = await getCatalogues();
  return (
    <>
    <section>
     <CatalogueList catalogues={catalogues} />
    </section>
    </>
  );
}
