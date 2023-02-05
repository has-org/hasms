import Image from "next/image";
import logo from "../../public/logo2.jpg";
import { useState } from "react";
import Link from "next/link";
import { NavigationMenu } from "@/mockData/navigationMenu";

type NavMenuProps = {
    navigationMenu: Array<NavigationMenu>
}

export const NavMenu: React.FC<NavMenuProps> = ({navigationMenu}) => {
  const toggleMenu = () => {
    setNavitemExpanded(!navItemExpanded);
  };
  const [navItemExpanded, setNavitemExpanded] = useState(false);

  return (
    <ul className="sm:hidden lg:flex bg-gray-200 px-8 font-serif cursor-pointer">
      <div className="flex mx-auto gap-x-5">

      {navigationMenu.map((navItem: any, index: number) => {
        return (
          <li key={index} className="flex text-black ">
            <div className="flex flex-col">
              {navItem.subMenu.length < 1 ? (
                <Link href={navItem.href ? navItem.href : ""}>
                  <span className="nav-item-name hover:text-blue-400">{navItem.name}</span>
                </Link>
              ) : (
                <div className="flex flex-col">
                  <span className="nav-item-name hover:text-blue-400" onClick={toggleMenu}>
                    {navItem.name}
                  </span>
                </div>
              )}
              {navItemExpanded && navItem.subMenu.length > 1
                ? navItem.subMenu.map((subMenuItem: any, index: number) => {
                    return (
                      <div className="flex flex-col hover:text-blue-400" key={index}>
                        <Link href={subMenuItem.href ? subMenuItem.href : '/'}>
                        {subMenuItem.name}
                        </Link>
                      </div>
                    );
                  })
                : null}
            </div>
          </li>
        );
      })}
      </div>

    </ul>
  );
}
