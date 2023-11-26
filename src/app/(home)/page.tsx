import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { Cooperator as CooperatorType } from "@/types/Cooperator";

import CooperatorsAnimation from "../../components/sliderAnimation/CooperatorsAnimation";
import { getBlogs, getCatalogues, getCooperators } from "@/services/apiService";
import HomeWelcome from "@/components/sections/home-welcome";
import HomeTrending from "@/components/sections/home-trending";
import UAParser from "ua-parser-js";
import { headers } from "next/dist/client/components/headers";

async function getUserAgent() {
  let userAgent;
  const headersList = headers();
  const userAgentHeader = headersList.get("user-agent");
  if (userAgentHeader) {
    userAgent = userAgentHeader;
  } else {
    userAgent = window.navigator.userAgent;
  }
  const parser = new UAParser();

  parser.setUA(userAgent);
  const result = parser.getResult();
  switch (result.device.type) {
    case "wearable":
    case "mobile":
      return "mobile";
    case "console":
    case "tablet":
    case "smarttv":
    case "embedded":
    case undefined:
    default:
      return "desktop";
  }
}

export async function generateMetadata({ params, searchParams }: { params: any, searchParams: any }) {
  return {
    title: "Pocetna",
    description: "My description",
    
  };
}

export default async function HomePage() {
  const userAgent = await getUserAgent();
  const catalogues: CatalogueType[] = await getCatalogues();
  const categories = catalogues?.filter(
    (catalogue) => catalogue.categories?.length! >= 1
  );
  const cooperators: CooperatorType[] = await getCooperators();
  const blogs = await getBlogs();

  return (
    <>
      <section>
        <HomeWelcome />
      </section>
      <section>
        <HomeTrending />
      </section>

      <section className="cooperation-section">
        {/* {cooperators && <CooperatorsAnimation cooperators={cooperators} />} */}
      </section>
    </>
  );
}
