
'use client'
import Link from "next/link";
import { useState } from "react";
import { SubmenuDropdown } from "./SubmenuDropdown";

export type MenuItemProps = {
    navItem: any
}

export const MenuItems: React.FC<MenuItemProps> = ({ navItem }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li className="navigation-menu-item mt-2" onMouseLeave={() => setDropdown(false)}>
            {navItem.submenus?.length >= 1 ? (
                <>
                    <button type="button" aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                        onMouseEnter={() => setDropdown(true)}
                    >
                        {navItem.name}
                    </button>
                    <SubmenuDropdown submenus={navItem.submenus} dropdown={dropdown} setDropdown={setDropdown} />
                </>
            ) : (
                <Link href={navItem.url}>
                    {navItem.name}
                </Link>
            )}
        </li>
    );
}
