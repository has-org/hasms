
'use client'
import Link from "next/link";
import { useState } from "react";
import { SubmenuDropdown } from "./SubmenuDropdown";

export type MenuItemProps = {
    navItem: any
}

export const MenuItems = ({ navItem }: MenuItemProps) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li className="navigation-menu-item mt-2"  onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            {navItem.categories?.length >= 1 ? (
                <>
                    <button type="button" aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                       
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
