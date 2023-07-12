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
            <Box sx={{ position: 'relative', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Image
                    className="cover-img"
                    alt="Cooperator Logo"
                    src={'/cover_front.jpg'}
                    fill
                    style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
                />
                <Grid container >
                    {isDesktop && navigationItems.map((item, index) => {
                        return (
                            <Grid item xs={4} key={index} sx={{backgroundColor: '#14141499'}}>
                                <Link  href={item.link} style={{textDecoration: 'none'}}>
                                    <Box sx={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>

                                    <Iconify icon={item.icon} color="white" width={200} sx={{ fontSize: '16px' }}/>
                                    <Typography sx={{fontSize: '44px', color: 'white', '&:hover': {
                                        color: '#f50057'
                                    }}}>{item.title}</Typography>
                                    </Box>
                                </Link>
                            </Grid >
                        )
                    })}
                    {!isDesktop && navigationItems.map((item, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Link  href={item.link}>
                                    <Iconify icon={item.icon} color="white" width={64} sx={{ fontSize: '12px' }} />
                                    <p className="text-white text-5xl">{item.title}</p>
                                </Link>
                            </Grid >
                        )
                    })}
                </Grid>

            </Box>
        </div>
    )
}

export default HomeNavigation