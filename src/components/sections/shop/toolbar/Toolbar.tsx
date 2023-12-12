"use client";
import { useState } from "react";
import {
  Button,
  Container,
  Slider,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import Info from "@mui/icons-material/Info";

import { styled } from "@mui/system";
import { InfoOutlined } from "@mui/icons-material";

const StyledSlider = styled(Slider)({
  "& .MuiSlider-thumb": {
    height: 20,
    width: 2,
    borderRadius: 1,
    marginTop: -1,
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
  },
});

const sizes = [
  { size: "XS", number: 10 },
  { size: "S", number: 20 },
  { size: "M", number: 30 },
  { size: "L", number: 40 },
  { size: "XL", number: 50 },
];

const Toolbar = ({ brands }: { brands: string[] }) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const [value, setValue] = useState<number[]>([7500, 35000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleBrandClick = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const isBrandSelected = (brand: string) => {
    return !selectedBrands.includes(brand);
  };

  return (
    <Container>
      <Box>
        <Typography
          variant="h5"
          sx={{ paddingBottom: "10px", paddingTop: "10px" }}
        >
          Brendovi
        </Typography>
        {brands.map((brand, index) => {
          return (
            <Button
              key={index}
              color="info"
              variant={isBrandSelected(brand) ? "outlined" : "contained"}
              onClick={() => handleBrandClick(brand)}
            >
              {brand}
            </Button>
          );
        })}
      </Box>
      <Box sx={{ width: 300 }}>
        <Typography
          variant="h5"
          sx={{ paddingBottom: "10px", paddingTop: "10px" }}
        >
          Sortiranje po ceni
        </Typography>
        <StyledSlider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={7500}
          max={35000}
        />
        <Grid container justifyContent="space-between">
          <Typography variant="caption">{value[0]} RSD</Typography>
          <Typography variant="caption">{value[1]} RSD</Typography>
        </Grid>
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{ paddingBottom: "10px", paddingTop: "10px" }}
        >
          Dostupnost Veličina
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {sizes.map((item) => (
            <Box
              key={item.size}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                color="info"
                variant="h6"
                sx={{ alignSelf: "center" }}
              >
                {item.size}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  width: "50px",
                  border: "0.5px solid rgba(255, 255, 255, 0.57)",
                  borderRadius: 1,
                  padding: 1,
                  paddingLeft: 2,
                  paddingRight: 2,
                  background: "rgba(217, 217, 217, 0.06)",
                  textAlign: "center",
                }}
              >
                {item.number}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            borderRadius: "15px",
            background: "#D4D6FF",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <InfoOutlined
              color="inherit"
              sx={{ marginRight: 1, color: "#000" }}
            />{" "}
            <Typography
              variant="h6"
              color={"#000"}
              sx={{ textAlign: "center" }}
            >
              Uslovi Dostave
            </Typography>
          </Box>
          <Typography variant="body2" color={"#000"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Toolbar;
