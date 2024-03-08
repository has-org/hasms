import { useState, useEffect } from "react";
// @mui
import { Stack, Fade, Portal } from "@mui/material";
// hooks

//
import { NavItemProps } from "../types";
import { NavItem } from "./NavItem";
import { StyledSubheader, StyledMenu } from "./styles";

// ----------------------------------------------------------------------

type NavListProps = {
  item: NavItemProps;
  isOffset: boolean;
};

export default function NavList({ item, isOffset }: NavListProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const { path, children } = item;

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenMenu = () => {
    if (children) {
      setOpenMenu(true);
    }
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <NavItem
        item={item}
        isOffset={isOffset}
        open={openMenu}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
      />

      {!!children && openMenu && (
        <Portal>
          <Fade in={openMenu}>
            <StyledMenu
              onMouseEnter={handleOpenMenu}
              onMouseLeave={handleCloseMenu}
            >
              {children.map((list) => (
                <NavSubList
                  key={list.subheader}
                  subheader={list.subheader}
                  items={list.items}
                  isDashboard={list.subheader === "Dashboard"}
                  onClose={handleCloseMenu}
                />
              ))}
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type NavSubListProps = {
  isDashboard: boolean;
  subheader: string;
  items: NavItemProps[];
  onClose: VoidFunction;
};

function NavSubList({
  items,
  isDashboard,
  subheader,
  onClose,
}: NavSubListProps) {

  // const isActive = (path: string) => pathname === path;

  return (
    <Stack
      spacing={2.5}
      gridColumn={isDashboard ? "span 6" : "span 2"}
      alignItems="flex-start"
    >
      <StyledSubheader disableSticky>{subheader}</StyledSubheader>

      {items.map((item) =>
       (
          <NavItem
            subItem
            key={item.title}
            item={item}
            // active={isActive(item.path)}
            onClick={onClose}
          />
        )
      )}
    </Stack>
  );
}
