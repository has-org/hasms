import { ListItemButtonProps } from '@mui/material';

// ----------------------------------------------------------------------

export type NavItemChildItems = {
  title: string;
  description: string;
  path: string;
  image: string;
};

export type NavItemChild = {
    title: string;
    path: string;
    items: NavItemChildItems[];
  };

export type NavItemProps = {
  title: string;
  path: string;
  children?: NavItemChild[];
};

export interface NavItemDesktopProps extends ListItemButtonProps {
  item: NavItemProps;
  isOffset?: boolean;
  active?: boolean;
  open?: boolean;
  subItem?: boolean;
  isExternalLink?: boolean;
}

export interface NavItemMobileProps extends ListItemButtonProps {
  item: NavItemProps;
  active?: boolean;
  open?: boolean;
  isExternalLink?: boolean;
}

export type NavProps = {
  isOffset: boolean;
  data: NavItemProps[];
};
