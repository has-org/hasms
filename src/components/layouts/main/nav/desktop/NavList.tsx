import { useState, useEffect } from "react";
// @mui
import { Fade, Portal, Box, Grid, Typography, Stack } from "@mui/material";
// hooks

//
import { NavItemChild, NavItemChildItems, NavItemProps } from "../types";
import { NavItem } from "./NavItem";
import { StyledSubheader, StyledMenu } from "./styles";
import Image from "next/image";
import Iconify from "@/components/iconify";

// ----------------------------------------------------------------------

type NavListProps = {
  item: NavItemProps;
  isOffset: boolean;
};

const gridRow3 = [8, 4, 4, 8, 8, 4];
const gridRow3FiveItems = [12, 4, 8, 8, 4];
const gridRow2 = [ 6, 6];

export default function NavList({ item, isOffset }: NavListProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const [selected, setSelected] = useState<NavItemChild | null>(null);
  const { path, children } = item;

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    if (item && children) {
      setSelected(children[0]);
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

  const renderContent = () => {
    if (
      selected?.title === "Motorcycles" ||
      selected?.title === "Marine engines"
    ) {
      return selected.items?.map((item, index) => {
        return (
          <Grid
            item
            xs={gridRow3[index]}
            key={index}
            sx={{ minHeight: "200px" }}
          >
            <NavSubListChildren
              key={index}
              item={item}
              onClose={handleCloseMenu}
            />
          </Grid>
        );
      });
    }

    if (selected?.title === "Snow") {
      return selected?.items?.map((item, index) => {
        return (
          <Grid
            item
            xs={gridRow3FiveItems[index]}
            key={index}
            sx={{ minHeight: index === 0 ? "220px" : "200px" }}
          >
            <NavSubListChildren
              key={index}
              item={item}
              onClose={handleCloseMenu}
            />
          </Grid>
        );
      });
    }

    return selected?.items?.map((item, index) => {
      return (
        <Grid
          item
          xs={gridRow2[index]}
          key={index}
          sx={{ minHeight: "250px"}}
        >
          <NavSubListChildren
            key={index}
            item={item}
            onClose={handleCloseMenu}
          />
        </Grid>
      );
    });
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
              <Grid container>
                <Grid item xs={2}>
                  {children.map((list) => (
                    <NavSubList
                      key={list.title}
                      item={list}
                      setSelected={setSelected}
                      onClose={handleCloseMenu}
                    />
                  ))}
                </Grid>
                <Grid item xs={10}>
                  <Grid container>{renderContent()}</Grid>
                </Grid>
              </Grid>
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type NavSubListProps = {
  item: NavItemChild;
  onClose: VoidFunction;
  setSelected: React.Dispatch<React.SetStateAction<NavItemChild | null>>;
};
type NavSubListChildrenProps = {
  item: NavItemChildItems;
  onClose: VoidFunction;
};

function NavSubList({ item, onClose, setSelected }: NavSubListProps) {
  return (
    <Stack direction="row" alignItems={"center"} key={item.title}>
      <Typography sx={{ fontSize: "24px" }} onClick={() => setSelected(item)}>
        {item.title}
      </Typography>
      <Iconify width={24} icon="eva:arrow-ios-forward-fill" sx={{ ml: 1 }} />
    </Stack>
  );
}
function NavSubListChildren({ item, onClose }: NavSubListChildrenProps) {
  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid grey",
        minHeight: "inherit",
      }}
    >
      <Image
        key={item.title}
        src={item.image!}
        alt={item.title}
        fill
        style={{ objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: 5,
          display: "inline",
          zIndex: 10,
          bgcolor: "background.neutralDark",
          px: 1,
          borderRadius: "8px",
        }}
      >
        <Typography
          sx={{
            color: "text.primary",
            fontSize: "1.6rem",
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </Box>
  );
}
