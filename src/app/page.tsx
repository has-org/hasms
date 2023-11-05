import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { Cooperator as CooperatorType } from "@/types/Cooperator";

import HomeNavigation from "@/components/sections/home-navigation";
import CooperatorsAnimation from "../components/sliderAnimation/CooperatorsAnimation";
import { getBlogs, getCatalogues, getCooperators } from "@/services/apiService";
import AboutUsSection from "@/components/sections/about-us/AboutUsSection";

export default async function HomePage() {
  const catalogues: CatalogueType[] = await getCatalogues();
  const categories = catalogues?.filter(
    (catalogue) => catalogue.categories?.length! >= 1
  );
  const cooperators: CooperatorType[] = await getCooperators();
  const blogs = await getBlogs();

  return (
    <>
      <section className="navigation-section">
        <HomeNavigation />
      </section>
      <section>

      </section>
      <section className="about-us-section">
        <AboutUsSection />
      </section>
      <section className="cooperation-section">
        {cooperators && <CooperatorsAnimation cooperators={cooperators} />}
      </section>
    </>
  );
}
