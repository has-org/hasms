
import { getCatalogue } from "@/services/apiService";

export default async function CataloguePage({ params: { id } }: any) {

  const catalogue = getCatalogue(id);
  
  return (
    <>
    <section>
    {JSON.stringify(catalogue)}
    </section>
    </>
  );
}
