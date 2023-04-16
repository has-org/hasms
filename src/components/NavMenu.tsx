'use client'
import { useRef } from 'react';
import { MenuItem } from "./MenuItem";
import { Box, Button, Grid, List, ListItem, ListItemText, ListSubheader, Stack } from "@mui/material";

type NavMenuProps = {
  navigationMenu: any
}

export const NavMenu = ({ navigationMenu }: NavMenuProps) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const windowWidth = windowSize.current[0]
  const windowHeight = windowSize.current[1]

  return (
    <>
      {/* <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {[0, 1, 2, 3, 4].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List> */}
      <Box sx={{
        position: 'relative',
        width: '100%',
        '& ul': { padding: 0}
      }}>

        <ul className={`navigation-menu flex relative justify-center ${windowWidth < 900 ? 'hidden' : ''}`}>
          {navigationMenu?.map((navItem: any, index: number) => {
            return (
              <MenuItem navItem={navItem} key={index} />
            );
          })}
        </ul>
      </Box>
    </>
  );
}
