import { forwardRef } from "react";
// @mui
import { Typography } from "@mui/material";
// components
import Iconify from "../../../../../components/iconify";
//
import { NavItemDesktopProps, NavItemProps } from "../types";
import { ListItem } from "./styles";
import Link from "next/link";

// ----------------------------------------------------------------------
// eslint-disable-next-line react/display-name
export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(
  (
    { item, open, isOffset, active, subItem, isExternalLink, ...other },
    ref
  ) => {
    const { title, path, children } = item;

    const renderContent = (
      <Link href={item.path}  style={{textDecoration: 'none'}}>
        <ListItem
          ref={ref}
          disableRipple
          isOffset={isOffset}
          subItem={subItem}
          active={active}
          open={open}
          {...other}
        >
          {title === "Promocije" && (
            <Iconify width={24} icon="mdi:fire" color="primary.main" />
          )}

          <Typography variant="body1">{title}</Typography>

          {!!children && (
            <Iconify
              width={16}
              icon="eva:arrow-ios-downward-fill"
              sx={{ ml: 1 }}
              color="text.primary"
            />
          )}
        </ListItem>
      </Link>
    );

    // Default
    return renderContent;
  }
);

// ----------------------------------------------------------------------
