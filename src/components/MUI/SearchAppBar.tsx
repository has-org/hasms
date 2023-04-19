'use client'

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import theme from './theme';
import { motion, useCycle } from 'framer-motion';
import { useRef, useState, useContext, useEffect } from 'react';
import { Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavigationMenu as NavigationMenuType } from '@/types/NavigationMenu';
import { NavigationMenuItem } from '@/types/NavigationMenuItem';
import Link from 'next/link';
import { NavMenu } from '../NavMenu';

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
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const list = (handleClick: any, subListOpen: any, navigationMenu: any) => (
  <Box
    role="presentation"

  >
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {navigationMenu?.map((navItem: any, index: number) => {
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


const tempVar =
{
  id: 1,
  name: "R001 GAP III",
  product_id: 1,
  is_available: false,
  quantity: 0,
  sizes: [
    {
      id: 1,
      name: "XS",
    },
  ],
  colors: [
    {
      id: 1,
      name: "CRNA",
      value: "#000000"
    }
  ],
  images: [
    {
      id: 1,
      code: "R001",
      name: "R001 GAP III (CRNA)",
      url: "/images/ac0daf37c574a4da116c4b80e055c95f",
      variant_id: 1,
      color_id: 1
    }
  ],
  tags: []
}



const desktopNavMenu: NavigationMenuItem[] = [{ id: 1, name: 'Home', url: '/' }]

const SearchAppBar = ({ sticky, navigationMenu }: { navigationMenu: any, sticky?: boolean }) => {
  const [drawerOpen, toggleDrawerOpen] = useCycle(false, true);
  const [subListOpen, setSubListOpen] = useState({})

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const windowWidth = windowSize.current[0]
  const isMobile = windowWidth < 600

  let navMenu = isMobile ? navigationMenu[0].navigation_menu_items : desktopNavMenu

  // TODO Remove this is just a test

  // const handleAddTocart = (product: any) => {
  //   console.log('INSIDE ADD TO CART HANDLER')
  //   addToCart(product)
  // }


  const handleClick = (index: any) => {
    setSubListOpen((prevState: any) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        toggleDrawerOpen()
      };



  return (
      <div className='flex flex-col'>
        <button onClick={() => handleAddTocart('nesto u state')}>123</button>
      </div>
    

  );
}

export default SearchAppBar;




  {/* <AppBar sx={{ position: sticky ? 'fixed' : 'static' }} color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => { toggleDrawerOpen() }}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Drawer
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {list(handleClick, subListOpen, navMenu)}
          </Drawer>
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
          <ShoppingCartIcon />
        </Toolbar>
      </AppBar> */}