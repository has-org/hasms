"use client";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { ProductImagePreview } from "./ProductImagePreview";
import { useState } from "react";
import { Variant as VariantType } from "@/types/Variant";

const Thumbnail = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  border: "1px solid #ccc",
  padding: "5px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "8px",
}));

export const ProductThumbnailsList = ({
  variants,
}: {
  variants: VariantType[];
}) => {
  const [selectedVariant, setSelectedVariant] = useState(
    variants && variants[0]
  );
  const [selectedImage, setSelectedImage] = useState(
    selectedVariant?.images[0]
  );

  return (
    <Box>
      <Grid container sx={{}}>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          {selectedVariant &&
            selectedVariant.images?.map((image, index: number) => {
              return (
                <Thumbnail key={index} onClick={() => setSelectedImage(image)}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_IMG_HOST}${image.url}`}
                    alt={image?.alt ? image.alt : "Product image"}
                    width={150}
                    height={150}
                  />
                </Thumbnail>
              );
            })}
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8}>
          {selectedImage && <ProductImagePreview image={selectedImage} />}
        </Grid>
      </Grid>
    </Box>
  );
};
