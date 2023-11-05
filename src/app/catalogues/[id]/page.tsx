import { getCatalogueProducts } from "@/services/apiService";

export default async function CataloguesIDPage({
  params: { catalogueID },
}: any) {
  const catalogueProducts = await getCatalogueProducts(catalogueID);
  return (
    <>
      <section>
        {JSON.stringify(catalogueProducts)}
      </section>
    </>
  );
}
