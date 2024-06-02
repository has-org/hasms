"use client";
import { CartContext } from "@/context/CartContext/CartContext";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useContext } from "react";
import Image from "next/image";
import ChangeCartQuantityInput from "@/components/cart/ChangeCartQuantityInput";
import Link from "next/link";

export default function CartPage() {
  const { products, totalAmount, totalWithoutTax, totalTax, removeFromCart } =
    useContext(CartContext); // to be removed, and fetch card from backend in order to not 'use client' in whole page

  return (
    <>
      <Container maxWidth="lg">
        <Typography textAlign="center" variant="h1">
          Korpa
        </Typography>
        <Grid container columnSpacing={4}>
          <Grid xs={12} md={8}>
            <List sx={{ maxHeight: "400px", overflowY: "auto" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={3}
                px={3}
              >
                <Typography>Proizvod</Typography>
                <Stack direction="row" spacing={8}>
                  <Typography>Cijena</Typography>
                  <Typography>Kolicina</Typography>
                  <Typography>Ukupno</Typography>
                </Stack>
              </Stack>
              {products?.map((product) => {
                return (
                  <ListItem key={product.id} sx={{ px: 0, py: 2 }}>
                    <Card sx={{ width: "100%", p: "14px", boxShadow: 0 }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="space-between"
                      >
                        <Stack direction="row" spacing={1}>
                          {product.image ? (
                            <Image
                              src={product.image}
                              width={90}
                              height={68}
                              alt="product image"
                              style={{ borderRadius: "8px" }}
                            />
                          ) : (
                            <Image
                              src={"/no-image.jpg"}
                              width={90}
                              height={68}
                              alt="asd"
                              style={{ borderRadius: "8px" }}
                            />
                          )}
                          <Stack spacing={0.7}>
                            <Typography
                              sx={{ fontWeight: "200", fontSize: "14px" }}
                            >
                              {product.manufacturer}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              <Typography sx={{ fontSize: "14px" }}>
                                {product.code}
                              </Typography>
                              <Typography sx={{ fontSize: "14px" }}>
                                {product.name}
                              </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                              <Typography
                                sx={{ fontSize: "12px", fontWeight: "200" }}
                              >
                                {product.color}
                              </Typography>
                              <Typography
                                sx={{ fontSize: "12px", fontWeight: "200" }}
                              >
                                {product.size}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>

                        <Stack direction="row" spacing={2} alignItems="center">
                          <Typography sx={{ minWidth: "70px" }}>
                            {product.price}
                          </Typography>
                          <Box sx={{ display: "flex", width: "130px" }}>
                            <ChangeCartQuantityInput product={product} />
                          </Box>
                          <Box sx={{ width: "70px" }}>
                            <Typography>
                              {Number(product.price) * product.quantity} KM
                            </Typography>
                          </Box>
                        </Stack>
                      </Stack>
                    </Card>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ height: "302px", boxShadow: 0, px: 3, py: "8px" }}>
              <Stack spacing={2}>
                <Typography variant="h6">Korpa</Typography>
                <Divider color="black" sx={{ borderColor: "black" }} />
                <Stack direction="row" justifyContent={"space-between"}>
                  <Stack>
                    <Typography>Cijena:</Typography>
                    <Typography>Cijena bez poreza:</Typography>
                    <Typography>Porez:</Typography>
                    <Typography>Dostava:</Typography>
                    <Typography>Ukupno:</Typography>
                  </Stack>
                  <Stack>
                    <Typography>{totalAmount} KM</Typography>
                    <Typography>{totalWithoutTax} KM</Typography>
                    <Typography>{totalTax} KM</Typography>
                    <Typography>-- KM</Typography>
                    <Typography color="primary">{totalAmount} KM</Typography>
                  </Stack>
                </Stack>
                <Divider color="black" sx={{ borderColor: "black" }} />
                <Link href="/checkout">
                  <Button variant="outlined" color="secondary" fullWidth>
                    <Typography sx={{textTransform: 'none'}}>Idi na placanje</Typography>
                  </Button>
                </Link>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
