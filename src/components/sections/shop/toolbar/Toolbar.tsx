"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";

const Toolbar = ({ brands }: { brands: string[] }) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleBrandClick = (brand: string) => {
    console.log(selectedBrands);
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const isBrandSelected = (brand: string) => {
    return selectedBrands.includes(brand);
  };

  return (
    <>
      {brands.map((brand, index) => {
        return (
          <Button
            key={index}
            variant={isBrandSelected(brand) ? "outlined" : "contained"}
            onClick={() => handleBrandClick(brand)}
          >
            {brand}
          </Button>
        );
      })}
    </>
  );
};

export default Toolbar;
