import { m } from 'framer-motion';
import { forwardRef } from 'react';
// @mui
import { Link, LinkProps, CardActionArea } from '@mui/material';
// components
import Iconify from '../../../../../components/iconify';
// 
import { NavItemDesktopProps, NavItemProps } from '../types';
import { ListItem } from './styles';

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

        {title}

        {!!children && (
          <Iconify
            width={16}
            icon="eva:arrow-ios-downward-fill"
            sx={{ ml: 1 }}
          />
        )}
      </ListItem>
    );

    // Default
    return (
      renderContent
    );
  }
);

// ----------------------------------------------------------------------
