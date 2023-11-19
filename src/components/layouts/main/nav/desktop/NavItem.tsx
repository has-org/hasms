import { forwardRef } from "react";
// @mui
import { Typography } from "@mui/material";
// components
import Iconify from "../../../../../components/iconify";
//
import { NavItemDesktopProps, NavItemProps } from "../types";
import { ListItem } from "./styles";

// ----------------------------------------------------------------------
// eslint-disable-next-line react/display-name
export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(
  (
    { item, open, isOffset, active, subItem, isExternalLink, ...other },
    ref
  ) => {
    const { title, path, children } = item;
    
    const renderContent = (
      <ListItem
        ref={ref}
        disableRipple
        isOffset={isOffset}
        subItem={subItem}
        active={active}
        open={open}
        {...other}
     
      >
        <Typography
          sx={{
            fontSize: { lg: "24px", fontWeight: "500" },

          }}
        >
          {title}
        </Typography>

        {!!children && (
          <Iconify
            width={16}
            icon="eva:arrow-ios-downward-fill"
            sx={{ ml: 1 }}
            color="text.primary"
          />
        )}
      </ListItem>
    );

    // Default
    return renderContent;
  }
);

// ----------------------------------------------------------------------
