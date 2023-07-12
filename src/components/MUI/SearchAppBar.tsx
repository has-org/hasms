
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import { motion, useCycle } from 'framer-motion';
import { useRef, useState, useContext, useEffect } from 'react';
import { Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavigationMenuItem } from '@/types/NavigationMenuItem';
import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CartSidebar } from '../cart/sidebar/CartSidebar';
import { useTheme } from '@mui/material/styles';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '24ch',
      '&:focus': {
        width: '32ch',
      },
    },
  },
}));




const list = (handleClick: any, subListOpen: any, listItems: any) => (
  <Box
    role="presentation"

  >
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {listItems?.map((navItem: any, index: number) => {
        if (navItem.categories?.length > 0) // if item has submenu
          return (
            <>
              <ListItemButton key={index} onClick={() => handleClick(index)}>
                <ListItemText primary={navItem.name} />
                {subListOpen[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={subListOpen[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {
                    navItem.categories?.map((category: any, index: number) => {
                      return (
                        <Link
                          key={index}
                          href={{
                            pathname: navItem.url,
                          }}
                        >
                          <ListItemButton sx={{ pl: 4 }} key={index} >
                            <ListItemText primary={category.name} />
                          </ListItemButton>
                        </Link>

                      )
                    })
                  }
                </List>
              </Collapse>
            </>
          );
        return ( // if item doesn't have submenu
          <Link
            key={index}
            href={{
              pathname: navItem.url,
            }}
          >
            <ListItemButton key={index}>
              <ListItemText primary={navItem.name} />
            </ListItemButton>
          </Link>
        );
      })}

    </List>
  </Box>
);






const SearchAppBar = ({ sticky, navigationMenu }: { navigationMenu: any, sticky?: boolean }) => {
  const [navigationDrawerOpen, toggleNavigationDrawerOpen] = useCycle(false, true);
  const [cartDrawerOpen, togglecartDrawerOpen] = useCycle(false, true);
  const [subListOpen, setSubListOpen] = useState({})
  const theme = useTheme();

  let navMenu = navigationMenu?.navigation_menu_items

  const handleClick = (index: any) => {
    setSubListOpen((prevState: any) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleNavigationDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        toggleNavigationDrawerOpen()
      };
  const toggleCartDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        togglecartDrawerOpen()
      };




  return (
    <>
      <AppBar sx={{ position: sticky ? 'fixed' : 'static' }} color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => { toggleNavigationDrawerOpen() }}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', flexDirection: 'row', position: 'absolute', right: { xs:'4px',sm: '8px', md: '16px', lg: '24px' }, alignItems: 'center', gap: { sm: '10px', md: '12px', lg: '24px' } }}>
            <Search theme={theme}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <AccountCircleIcon />
            <Box onClick={() => { togglecartDrawerOpen() }}
            >

              <ShoppingCartIcon />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={navigationDrawerOpen}
        onClose={toggleNavigationDrawer(false)}
        anchor="left"
      >
        {list(handleClick, subListOpen, navMenu)}
      </Drawer>
      <Drawer
        open={cartDrawerOpen}
        onClose={toggleCartDrawer(false)}
        anchor="right"
        PaperProps={{
          sx: { width: "50%" },
        }}
      >
        <CartSidebar />
      </Drawer>
    </>
  );
}

export default SearchAppBar;



