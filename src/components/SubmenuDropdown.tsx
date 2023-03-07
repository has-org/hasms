import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export type SubmenuDropdownProps = {
    submenus: any
    dropdown: any
    setDropdown: Dispatch<SetStateAction<boolean>>
}

export const SubmenuDropdown: React.FC<SubmenuDropdownProps> = ({ submenus, dropdown, setDropdown }) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""} p-1`} >
                {submenus.map((subMenuItem: any, index: number) => {
                    return (
                        <span
                            key={index}
                            className="menu-items flex flex-col "
                        >
                            {subMenuItem.name}
                        </span>
                    )
                })}
        </ul>
    );
}
