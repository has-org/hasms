'use client'
import { MenuItems } from "./MenuItems";
import { Button, Grid, Stack } from "@mui/material";

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
