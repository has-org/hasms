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

      <Typography sx={{ whiteSpace: "nowrap" }} color="primary.dark">
        Total items: {items.length}
      </Typography>
      <Stack>
        <Scrollbar>
          {items?.map((item: any) => {
            return (
              <>
                <Stack direction="row">
                  <Image
                    src={item.product_image}
                    width={88}
                    height={78}
                    alt="asd"
                  />
                  <Stack>
                    <Stack direction="row" spacing={1}>
                      <Typography variant="h6" color="primary.dark">
                        Sifra artikla:
                      </Typography>
                      <Typography variant="body2" color="primary.darker">
                        {item.product_code}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="primary.darker">
                      Naziv: {item.product_name}
                    </Typography>
                    <Typography variant="body2" color="primary.darker">
                      {item.color?.name}
                    </Typography>
                    <Typography variant="body2" color="primary.darker">
                      {item.size?.name}
                    </Typography>
                    <Typography variant="body2" color="primary.darker">
                      {item.quantity}
                    </Typography>
                    <Typography variant="body2" color="primary.darker">
                      {item.product_price}
                    </Typography>
                  </Stack>
                </Stack>
              </>
            );
          })}
        </Scrollbar>
      </Stack>

      <Button>
        <Link href="/cart">Go to cart</Link>
      </Button>
    </Box>
  );
};
