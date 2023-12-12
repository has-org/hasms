"use client";
import React, { useState } from "react";
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

interface Item {
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  image?: string;
}

const sizes = ["S", "M", "L", "XL"];

const items = [
  {
    title: "Item 1",
    subtitle: "Subtitle 1",
    price: "10",
    originalPrice: "20",
  },
  {
    title: "Item 2",
    subtitle: "Subtitle 2",
    price: "20",
    originalPrice: "30",
  },
  {
    title: "Item 2",
    subtitle: "Subtitle 2",
    price: "20",
    originalPrice: "30",
  },
  {
    title: "Item 2",
    subtitle: "Subtitle 2",
    price: "20",
    originalPrice: "30",
  },
];

const ItemList = () => {
  return (
    <Grid container spacing={4}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <RenderItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

const RenderItem = ({ item }: { item: Item }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <Card>
      {item.image ? (
        <CardMedia
          component="img"
          image={item.image}
          alt="item"
          sx={{
            height: 0,
            paddingTop: "100%",
          }}
        />
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
        {/* <Typography variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            fontSize: "13px",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.51)",
          }}
        >
          {item.subtitle}
        </Typography> */}
        {/* {sizes.map((size) => (
          <Button variant="outlined" size="small" key={size}>
            {size}
          </Button>
        ))} */}
        <Typography variant="h5" component="div" sx={{ margin: "10px 0" }}>
          {item.title}
        </Typography>
        <Typography variant="body2" component="div" sx={{ margin: "10px 0" }}>
          {item.subtitle}
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
            {item.originalPrice} RSD
          </Typography>
          <Typography variant="h4" component="div" color="primary">
            {item.price} RSD
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
      >
        Buy
      </Button>
    </Card>
  );
};

export default ItemList;
