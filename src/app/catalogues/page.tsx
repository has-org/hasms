
import { getCatalogueProducts } from "@/services/apiService";

export default async function CataloguePage({ params: { catalogueName } }: any) {

  const catalogueProducts = await getCatalogueProducts(catalogueName);
  return (
    <>
    <section>
      asds
    </section>
    </>
  );
}
