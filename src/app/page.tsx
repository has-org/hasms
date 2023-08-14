
import { Inter } from "next/font/google";
import "./base.css";
import { Catalogue } from "@/components/Catalogue";
import { NavMenu } from "@/components/NavMenu";
import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { Cooperator as CooperatorType } from "@/types/Cooperator";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import GridCatalogueSection from "@/components/MUI/GridCatalogueSection";
import GridBlogSection from "@/components/MUI/GridBlogSection";
import Iconify from "@/components/iconify";
import HomeNavigation from "@/components/sections/home-navigation";
import { CooperatorsAnimation } from "../components/sliderAnimation/CooperatorsAnimation";
import { getBlogs, getCatalogues, getCooperators, getNavMenus } from "@/services/apiService";


export default async function HomePage() {
  const catalogues: CatalogueType[] = await getCatalogues()
  const categories = catalogues?.filter(catalogue => catalogue.categories?.length! >= 1)
  const cooperators: CooperatorType[] = await getCooperators()
  const navigationMenu = await getNavMenus()
  const blogs = await getBlogs()

  return (
    <>
      <section className='navigation-section'>
        <HomeNavigation />
      </section>

      <GridCatalogueSection catalogues={catalogues} title="Akcije" />
      <GridBlogSection blogs={blogs} title="Blogovi" />
      <GridCatalogueSection catalogues={catalogues} title="Aktuelno" />
      <GridCatalogueSection catalogues={categories} title="Kategorije" />

      <section className='cooperation-section'>


        {cooperators && <CooperatorsAnimation cooperators={cooperators} />
        }      </section>
    </>

  );
}
