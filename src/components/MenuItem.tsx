
'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { SubmenuDropdown } from "./SubmenuDropdown";

export type MenuItemProps = {
  navItem: any
}

export const MenuItem = ({ navItem }: MenuItemProps) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="navigation-menu-item flex items-center"  onClick={() => setDropdown((prev) => !prev)} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
      {navItem.categories?.length >= 1 ? (
        <>
          <button type="button" aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {navItem.name}
          </button>
          <SubmenuDropdown submenus={navItem.categories} dropdown={dropdown} setDropdown={setDropdown} />
        </>
      ) : (
        <Link href={navItem.url}>
          {navItem.name}
        </Link>
      )}
    </li>
  );
}

