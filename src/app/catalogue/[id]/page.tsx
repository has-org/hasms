
import { getCatalogue } from "@/services/apiService";

export default async function CataloguePage({ params: { catalogueID } }: any) {

  const catalogue = getCatalogue(catalogueID);
  
  return (
    <>
    <section>
    {JSON.stringify(catalogue)}
    </section>
    </>
  );
}
