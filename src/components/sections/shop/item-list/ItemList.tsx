"use client";
import React, { useContext, useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Container,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Product } from "@/types/Product";
import { CartContext } from "@/context/CartContext/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
const sizes = ["S", "M", "L", "XL"];

const ItemList = ({ items }: { items: Product[] }) => {
  return (
    <Grid container spacing={4}>
      {items?.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <RenderItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

const RenderItem = ({ item }: { item: Product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { items, addToCart } = useContext(CartContext);
  const router = useRouter();
  return (
    <Card>
      {item.image ? (
        <CardMedia
          component="div"
          sx={{
            position: "relative",
            height: "330px",
          }}
        >
          <Image src={item.image} fill alt="asd" />
        </CardMedia>
      ) : (
        <div
          style={{
            height: 0,
            paddingTop: "100%",
            backgroundColor: "#ccc",
          }}
        />
      )}
      <Container sx={{ padding: "20px" }}>
        <Typography variant="h5" component="div" sx={{ margin: "10px 0" }}>
          {item.name}
        </Typography>
        <Typography variant="body2" component="div" sx={{ margin: "10px 0" }}>
          {item.description}
        </Typography>
        <ToggleButtonGroup
          value={selectedSize}
          exclusive
          sx={{ width: "100%", margin: "10px 0" }}
          onChange={(event, newSize) => {
            setSelectedSize(newSize);
          }}
        >
          {sizes.map((size) => (
            <ToggleButton
              value={size}
              key={size}
              sx={{ flexGrow: 1, fontSize: "0.8em" }}
            >
              {size}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            variant="body1"
            component="div"
            sx={{
              textDecoration: "line-through",
              color: "rgba(255, 255, 255, 0.64)",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "146.75%",
            }}
          >
            {/* {item.originalPrice} RSD */}
          </Typography>
          <Typography variant="h4" component="div" color="primary">
            {item.price} KM
          </Typography>
        </Box>
      </Container>

      <Button
        variant="contained"
        color="primary"
        sx={{
          width: "100%",
          color: "#000",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
        onClick={() => {
          // addToCart({...item, size: selectedSize, color: 'black'});
        }}
      >
        Kupi
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: "100%",
          color: "#000",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
        onClick={() => {
          router.push(`/shop/product/${item.id}`);
        }}
      >
        Pogledaj proizvod
      </Button>
    </Card>
  );
};

export default ItemList;
