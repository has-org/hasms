"use client";
import { CartContext } from "@/context/CartContext/CartContext";
import {
  Box,
  Card,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useContext } from "react";
import Image from "next/image";
import ChangeCartQuantityInput from "@/components/cart/ChangeCartQuantityInput";

export default function CartPage() {
  const { items, totalAmount, removeFromCart } = useContext(CartContext); // to be removed, and fetch card from backend in order to not 'use client' in whole page

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid xs={12} md={8}>
            <List>
              <Stack direction="row" justifyContent="space-between" spacing={3} px={3}>
                <Typography>Proizod</Typography>
                <Stack direction="row" spacing={7}>
                  <Typography>Cijena</Typography>
                  <Typography>Kolicina</Typography>
                  <Typography>Ukupno</Typography>
                </Stack>
              </Stack>
              {items.map((item: any) => {
                return (
                  <ListItem key={item.id} sx={{ p: 0 }}>
                    <Card sx={{ width: "100%", p: "14px" }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="space-between"
                      >
                        <Stack direction="row" spacing={1}>
                          <Image
                            src={item.product_image}
                            width={90}
                            height={68}
                            alt="product image"
                            style={{ borderRadius: "8px" }}
                          />
                          <Stack spacing={0.7}>
                            <Typography
                              sx={{ fontWeight: "200", fontSize: "14px" }}
                            >
                              {item.product_manufacturer}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              <Typography sx={{ fontSize: "14px" }}>
                                {item.product_code}
                              </Typography>
                              <Typography sx={{ fontSize: "14px" }}>
                                {item.product_name}
                              </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                              <Typography
                                sx={{ fontSize: "12px", fontWeight: "200" }}
                              >
                                {item.color.name}
                              </Typography>
                              <Typography
                                sx={{ fontSize: "12px", fontWeight: "200" }}
                              >
                                {item.size.name}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>

                        <Stack direction="row" spacing={2} alignItems="center">
                          <Typography sx={{ minWidth: "70px" }}>
                            {item.product_price}
                          </Typography>
                          <Box sx={{display:'flex',maxWidth: '130px'}}>
                          <ChangeCartQuantityInput product={item} />
                          </Box>
                          <Typography>
                            {item.product_price * item.quantity} KM
                          </Typography>
                        </Stack>
                      </Stack>
                    </Card>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid xs={12} md={4}></Grid>
        </Grid>
      </Container>
    </>
  );
}
