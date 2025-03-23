import CatalogueItem from "@/components/sections/catalogue/catalogue-item/CatalogueItem";
import { getProduct } from "@/services/apiService";
// import { getCatalogue } from "@/services/apiService";

export default async function CataloguePage({ params }: any) {
  const { id } = await params
  const catalogue = await getProduct({ id: id });
  // const catalogue = await getCatalogue({catalogueID: id});
  if (!catalogue) return "No data"
  return (
    <>
      <CatalogueItem catalogue={catalogue} />
    </>
  );
}
