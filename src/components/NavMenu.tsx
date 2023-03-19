
import { NavigationMenu } from "@/mockData/navigationMenu";
import { MenuItems } from "./MenuItems";

type NavMenuProps = {
  navigationMenu: Array<NavigationMenu>
}

export const NavMenu: React.FC<NavMenuProps> = ({ navigationMenu }) => {

  return (
    <>

      <ul className="navigation-menu flex relative">
        {navigationMenu.map((navItem: any, index: number) => {
          return (
            <MenuItems navItem={navItem} key={index} />
          );
        })}
      </ul>
    </>
  );
}
