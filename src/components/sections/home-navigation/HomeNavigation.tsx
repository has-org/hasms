'use client'
import Iconify from "@/components/iconify"
import useResponsive from "@/hooks/useResponsive"
import { Box, Grid, Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import Image from "next/image"
import Link from "next/link"

const navigationItems = [
    { icon: 'fluent-emoji-high-contrast:motorcycle', title: 'Motori', link: '/shop/category/MOTORI' },
    { icon: 'tabler:helmet', title: 'Kacige', link: '/shop/category/KACIGE' },
    { icon: 'mingcute:coat-line', title: 'Odjeća i obuća', link: '/shop/category/ODJEĆA-I-OBUĆA' },
    { icon: 'bi:person-gear', title: 'Dijelovi', link: '/shop/category/DIJELOVI-I-OPREMA' },
    { icon: 'tabler:speedboat', title: 'Gliseri', link: '/shop/category/MARINA' },
    { icon: 'heroicons:wrench-screwdriver', title: 'Servis', link: '/shop/category/SERVIS-I-ODRŽAVANJE' },

]


const HomeNavigation = () => {

    const isDesktop = useResponsive('up', 'lg');

    return (
      <div className="home-front">

      </div>
    );
}

export default HomeNavigation