
import { Inter } from "next/font/google";
import "./base.css";
import { Catalogue as CatalogueType } from "@/types/Catalogue";
import { Cooperator as CooperatorType } from "@/types/Cooperator";
import Link from "next/link";
import Iconify from "@/components/iconify";
import HomeNavigation from "@/components/sections/home-navigation";
import { CooperatorsAnimation } from "../components/sliderAnimation/CooperatorsAnimation";


async function getCatalogues() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/catalogues`, {
      method: 'GET',
      next: {
        revalidate: 1,
      }
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    return null
  }
}
async function getCooperators() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cooperators`, {
      method: 'GET',
      next: {
      }
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    return null
  }
}



export default async function HomePage() {
  const catalogues: CatalogueType[] = await getCatalogues()
  const cooperators: CooperatorType[] = await getCooperators()
  return (
    <>
      <section className='navigation-section'>
        <HomeNavigation />
      </section>

      <section className='cooperation-section'>


        {
          cooperators && <CooperatorsAnimation cooperators={cooperators} />
        }
      </section>
    </>

  );
}
