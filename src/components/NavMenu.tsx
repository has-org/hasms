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

  return (
    <>

        <ul className="sm:hidden lg:flex">
          <div className="navigation-menu flex mx-auto gap-x-5 h-20">
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
