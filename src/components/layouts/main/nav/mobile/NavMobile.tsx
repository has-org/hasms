'use client'
import { useState, useEffect } from 'react';
// @mui
import { List, Drawer, IconButton } from '@mui/material';
// config
import { NAV } from '@/config-global';
// components
// import Logo from '../../../../components/logo';
import Iconify from '@/components/iconify';
import Scrollbar from '@/components/scrollbar';
//
import { NavProps } from '../types';
import NavList from './NavList';
import { useRouter } from 'next/navigation'

// ----------------------------------------------------------------------

export default function NavMobile({ isOffset, data }: NavProps) {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          ml: 1,
          ...(isOffset && {
            color: 'text.primary',
          }),
        }}
      >
        <Iconify icon="eva:menu-2-fill" />
      </IconButton>

      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_BASE,
          },
        }}
      >
        <Scrollbar>
          {/* <Logo sx={{ mx: 2.5, my: 3 }} /> */}

          {/* <List component="nav" disablePadding>
            {data.map((link) => (
              <NavList key={link.title} item={link} />
            ))}
          </List> */}
        </Scrollbar>
      </Drawer>
    </>
  );
}
