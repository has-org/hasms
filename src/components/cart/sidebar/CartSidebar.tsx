"use client";
import { Box, Button, Typography, Stack } from "@mui/material";
import { CartContext } from "@/context/CartContext/CartContext";
import { useContext, useEffect, useMemo } from "react";
import { ReactTable } from "../../react-table/ReactTable";
import Iconify from "../../iconify";
import Link from "next/link";
import Scrollbar from "@/components/scrollbar/Scrollbar";
import Image from "next/image";
export const CartSidebar = () => {
  const { items, updateCartItemQuantity } = useContext(CartContext);

  return (
    <Box
      sx={{
        padding: "1em",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant={"h6"} color="primary.darker">
          Korpa
        </Typography>
        <Button variant="outlined">
          <Stack direction="row" spacing={1}>
            <Iconify icon="gg:profile" width={24} height={24} />
            <Typography variant={"body1"}>Nalog</Typography>
          </Stack>
        </Button>
      </Stack>


      <Box
        sx={{
          display: "flex",
          flexGrow: "1",
          flexDirection: "row",
        }}
      >
        <Typography sx={{whiteSpace: 'nowrap'}} color="primary.dark">Total items: {items.length}</Typography>
        <Scrollbar>
          <Stack>
            {items?.map((item: any) => {
              return (
                <>
                  <Stack direction="row">
                    <Image src={item.image} width={50} height={50} alt="asd" />

                    <Stack>{item.name}</Stack>
                  </Stack>
                </>
              );
            })}
          </Stack>
        </Scrollbar>
      </Box>

      <Button>
        <Link href="/cart">Go to cart</Link>
      </Button>
    </Box>
  );
};
