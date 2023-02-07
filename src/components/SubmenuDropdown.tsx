import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export type SubmenuDropdownProps = {
    submenus: any
    dropdown: any
    setDropdown: Dispatch<SetStateAction<T>>
}

export const SubmenuDropdown: React.FC<SubmenuDropdownProps> = ({ submenus, dropdown, setDropdown }) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""} display-block p-1 bg-gray-100`} onMouseLeave={() => setDropdown(false)}>
            <span className="">
                {submenus.map((subMenuItem: any, index: number) => {
                    return (
                        <span
                            key={index}
                            className="menu-items flex flex-col hover:text-blue-400"
                        >
                            {subMenuItem.name}
                        </span>
                    )
                })}
            </span>
        </ul>
    );
}
