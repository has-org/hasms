import Image from "next/image";
import logo from "../../public/logo2.jpg";
import { useState } from "react";
import Link from "next/link";
import { NavigationMenu } from "@/mockData/navigationMenu";
import { MenuItems } from "./MenuItems";

type NavMenuProps = {
  navigationMenu: Array<NavigationMenu>
}

export const NavMenu: React.FC<NavMenuProps> = ({ navigationMenu }) => {
  const toggleMenu = (item: any) => {
    setNavitemExpanded(!navItemExpanded);
    setSelectedNavItem(item)

  };
  const [navItemExpanded, setNavitemExpanded] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState({} as NavigationMenu)

  return (
    <>
      <ul className="sm:hidden lg:flex bg-gray-200 px-8 font-serif cursor-pointer h-[32px]">
        <div className="flex mx-auto gap-x-5">
          {navigationMenu.map((navItem: any, index: number) => {
            return (
              <MenuItems navItem={navItem} key={index} />
            );
          })}
        </div>
      </ul>
    </>
  );
}
