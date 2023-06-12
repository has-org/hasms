import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export type SubmenuDropdownProps = {
    submenus: any
    dropdown: any
    setDropdown: Dispatch<SetStateAction<boolean>>
}

export const SubmenuDropdown = ({ submenus, dropdown, setDropdown }: SubmenuDropdownProps) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : "hide"}`} >
            {submenus.map((subMenuItem: any, index: number) => {
                return (
                    // <Link href={subMenuItem.url ? subMenuItem.url : ''} key={index}>
                        <span
                            key={index}
                            className="menu-item flex flex-col p-1"
                        >
                            {subMenuItem.name}
                        </span>
                    // </Link>

                )
            })}
        </ul>
    );
}
