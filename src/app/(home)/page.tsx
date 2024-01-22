import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { Cooperator as CooperatorType } from "@/types/Cooperator";

import CooperatorsAnimation from "../../components/sliderAnimation/CooperatorsAnimation";
import { getBlogs, getCatalogues, getCooperators } from "@/services/apiService";
import HomeWelcome from "@/components/sections/home/home-welcome";
import HomeTrending from "@/components/sections/home/home-trending";
import HomeBlog from "@/components/sections/home/home-blog";
import HomeDiscount from "@/components/sections/home/home-discount";
import UAParser from "ua-parser-js";
import { headers } from "next/dist/client/components/headers";
import HomeCooperators from "@/components/sections/home/home-cooperators/HomeCooperators";
import Box from "@mui/material/Box/";

async function getUserAgent() {
  let userAgent;
  const headersList = headers();
  const userAgentHeader = headersList.get("user-agent");
  if (userAgentHeader) {
    userAgent = userAgentHeader;
  } else {
    userAgent = window?.navigator?.userAgent;
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

  const discount = {
    name: "kacige 20%",
    title: "20% Popusta Na Nove Modele Kaciga",
    image: "/images/discount1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  };

  return (
    <>

      <section>
        <HomeWelcome />
      </section>
      <section>
        <HomeTrending />
      </section>
      <section>
        <HomeBlog />
      </section>

      <section>
        <HomeDiscount discount={discount}/>
      </section>
      

      <section className="cooperation-section">
        <HomeCooperators cooperators={cooperators} />
      </section>
    </>
  );
}
