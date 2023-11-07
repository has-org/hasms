import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { Cooperator as CooperatorType } from "@/types/Cooperator";

import CooperatorsAnimation from "../../components/sliderAnimation/CooperatorsAnimation";
import { getBlogs, getCatalogues, getCooperators } from "@/services/apiService";

export default async function HomePage() {
  const catalogues: CatalogueType[] = await getCatalogues();
  const categories = catalogues?.filter(
    (catalogue) => catalogue.categories?.length! >= 1
  );
  const cooperators: CooperatorType[] = await getCooperators();
  const blogs = await getBlogs();

  return (
    <>
      <section>

      </section>

      <section className="cooperation-section">
        {cooperators && <CooperatorsAnimation cooperators={cooperators} />}
      </section>
    </>
  );
}
