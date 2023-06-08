'use client'
import Link from "@/components/MUI/Link"
import Iconify from "@/components/UI/iconify"
import useResponsive from "@/hooks/useResponsive"
import Image from "next/image"

const navigationItems = [
    { icon: 'ph:motorcycle', title: 'Motori', link: '/shop/category/MOTORI' },
    { icon: 'tabler:helmet', title: 'Kacige', link: '/shop/category/KACIGE' },
    { icon: 'mingcute:coat-line', title: 'Odjeća i obuća', link: '/shop/category/ODJEĆA-I-OBUĆA' },
    { icon: 'bi:person-gear', title: 'Dijelovi', link: '/shop/category/DIJELOVI-I-OPREMA' },
    { icon: 'tabler:speedboat', title: 'Čamci', link: '/shop/category/MARINA' },
    { icon: 'heroicons:wrench-screwdriver', title: 'Servis', link: '/shop/category/ERVIS-I-ODRŽAVANJE' },

]


const HomeNavigation = () => {

    const isDesktop = useResponsive('up', 'lg');

    return (
        <div className="home-front">
            <div className="h-[100vh] w-full flex justify-center items-center">
                <Image
                    className="cover-img"
                    alt="Cooperator Logo"
                    src={'/cover_front.jpg'}
                    fill

                    style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
                />
                <div className="grid grid-cols-3 xs:gap-5 p-4 bg-gray-800	bg-opacity-40">

                    <>
                        {isDesktop && navigationItems.map((item, index) => {
                            return (
                                <Link key={index} href={item.link}>
                                    <div className="flex flex-col items-center justify-center cursor-pointer">
                                        <Iconify icon={item.icon} color="white" width={302}  sx={{fontSize: '12px'}} />
                                        <p className="text-white text-5xl">{item.title}</p>
                                    </div>
                                </Link>
                            )
                        })}
                        {!isDesktop && navigationItems.map((item, index) => {
                            return (
                                <Link key={index} href={item.link}>
                                    <div className="flex flex-col items-center justify-center cursor-pointer">
                                        <Iconify icon={item.icon} color="white" width={64} sx={{fontSize: '12px'}} />
                                        <p className="text-white text-2xl">{item.title}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </>


                </div>


            </div>
        </div>
    )
}

export default HomeNavigation