
import { NavigationMenu } from "@/mockData/navigationMenu";
import { MenuItems } from "./MenuItems";

type NavMenuProps = {
  navigationMenu: Array<NavigationMenu>
}

export const NavMenu: React.FC<NavMenuProps> = ({ navigationMenu }) => {

  return (
    <>

        <ul className="">
          <div className="navigation-menu flex gap-x-5 relative">
            {navigationMenu.map((navItem: any, index: number) => {
              return (
                <MenuItems navItem={navItem} key={index} />
              );
            })}
          </div>
        </ul>
    </>
  );
}
