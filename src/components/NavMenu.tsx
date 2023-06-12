'use client'
import { useRef } from 'react';
import { MenuItem } from "./MenuItem";
import { Box } from "@mui/material";

type NavMenuProps = {
  navigationMenu: any
}

export const NavMenu = ({ navigationMenu }: NavMenuProps) => {


  return (
    <>
      <Box sx={{
        position: 'relative',
        width: '100%',
        '& ul': { padding: 0 }
      }}>

        <ul className={`navigation-menu flex relative justify-center`}>
          {navigationMenu[0]?.navigation_menu_items?.map((navItem: any, index: number) => {
          return (
              <MenuItem navItem={navItem} key={index} />
            );
          })}

        </ul>
      </Box>
    </>
  );
}
