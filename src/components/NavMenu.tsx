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
    <ul className="flex justify-between bg-red-400 px-8">
      {navigationMenu.map((navItem: any, index: number) => {
        return (
          <li key={index} className="flex">
            <div className="flex flex-col">
              {navItem.subMenu.length < 1 ? (
                <Link href={navItem.href ? navItem.href : ""}>
                  <span className="nav-item-name">{navItem.name}</span>
                </Link>
              ) : (
                <div className="flex flex-col">
                  <span className="nav-item-name" onClick={toggleMenu}>
                    {navItem.name}
                  </span>
                </div>
              )}
              {navItemExpanded && navItem.subMenu.length > 1
                ? navItem.subMenu.map((subMenuItem: any, index: number) => {
                    return (
                      <div className="flex flex-col" key={index}>
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
    </ul>
  );
}
