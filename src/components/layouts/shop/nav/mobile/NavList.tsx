import { useState } from 'react';
// @mui
import { Collapse } from '@mui/material';
// hooks
// import useActiveLink from '../../../../hooks/useActiveLink';
// components
// import { NavSectionVertical } from '@/components/nav-section';
//
import NavItem from './NavItem';
import { NavItemProps } from '../types';

// ----------------------------------------------------------------------

type NavListProps = {
  item: NavItemProps;
};

export default function NavList({ item }: NavListProps) {

  const { path, children } = item;


  const [open, setOpen] = useState(false);

  return (
    <>
      <NavItem
        item={item}
        open={open}
      />

      {!!children && (
        <Collapse in={open} unmountOnExit>
        
        </Collapse>
      )}
    </>
  );
}
