import CatalogueItem from "@/components/sections/catalogue/catalogue-item/CatalogueItem";
import { getCatalogue } from "@/services/apiService";

export default async function CataloguePage({ params: { id } }: any) {

  const catalogue = await getCatalogue({catalogueID: id});

  return (
    <>
    <CatalogueItem catalogue={catalogue}/>
    </>
  );
}
