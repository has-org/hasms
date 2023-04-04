
import { MenuItems } from "./MenuItems";

type NavMenuProps = {
  navigationMenu: any
}

export const NavMenu = ({ navigationMenu }: NavMenuProps) => {

  return (
    <>

      <ul className="navigation-menu flex relative">
        {navigationMenu?.map((navItem: any, index: number) => {
          return (
            <MenuItems navItem={navItem} key={index} />
          );
        })}
      </ul>
    </>
  );
}
