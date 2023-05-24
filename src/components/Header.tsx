
'use client'

import { NavigationMenu as NavigationMenuType } from "@/types/NavigationMenu";
import SearchAppBar from "./MUI/SearchAppBar";
import { CartProvider } from '@/hooks/CartContext/CartProvider';


type HeaderProps = {
  children?: React.ReactNode
  sticky?: boolean
  navigationMenu?: NavigationMenuType[]
}



const Header = ({ navigationMenu, children, sticky }: HeaderProps) => {

  return (
    <div className="header ">
        <SearchAppBar navigationMenu={navigationMenu} sticky={sticky} />
    </div>
  );
}
export default Header;