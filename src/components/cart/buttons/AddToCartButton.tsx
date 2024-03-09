"use client";

import { RHFSelect, RHFTextField } from "@/components/hook-form";
import FormProvider from "@/components/hook-form/FormProvider";
import { IProduct } from "@/types/IProduct";
import {
  Button,
  Popover,
  Box,
  Stack,
  Typography,
  MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState, useContext } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "@/context/CartContext/CartContext";

const AddToCartButton = ({ product }: { product: IProduct }) => {
  const { addToCart } = useContext(CartContext);

  const productSizes = product?.variants[0]?.sizes;
  const productColors = product?.variants[0]?.colors;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    reset();
  };

  const open = Boolean(anchorEl);
  const id = open ? "cart-button-popover" : undefined;

  const methods = useForm<any>({
    defaultValues: {
      productSize: "",
      productColor: "",
      quantity: 0,
    },
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<any> = async (
    values: any,
    e?: React.BaseSyntheticEvent
  ) => {
    const { productColor, productSize, quantity } = values;
    const selectedColor = productColors?.find(
      (color) => color.id === productColor
    );
    const selectedSize = productSizes?.find((size) => size.id === productSize);

    addToCart({ ...product, selectedColor, selectedSize, quantity });
  };

  return (
    <>
      <Button
        aria-describedby={id}
        variant="outlinedTransparent"
        sx={{ textTransform: "none" }}
        onClick={handleClick}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography>+</Typography>
          <Typography>Dodaj u korpu</Typography>
        </Stack>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2 }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack sx={{ width: "200px" }} spacing={1}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography>Izaberi</Typography>

                <IconButton
                  onClick={handleClose}
                  color="secondary"
                  size="small"
                >
                  <CloseIcon />
                </IconButton>
              </Stack>
              <RHFSelect
                name="productColor"
                label="Boja"
                variant="outlined"
                defaultValue={""}
                fullWidth
              >
                {productColors.map((color) => {
                  return (
                    <MenuItem
                      key={`${color.name}-${color.id}`}
                      value={color.id}
                    >
                      {color.name}
                    </MenuItem>
                  );
                })}
              </RHFSelect>
              <RHFSelect
                name="productSize"
                label="Velicina"
                variant="outlined"
                defaultValue={""}
                fullWidth
              >
                {productSizes.map((size) => {
                  return (
                    <MenuItem key={`${size.name}-${size.id}`} value={size.id}>
                      {size.name}
                    </MenuItem>
                  );
                })}
              </RHFSelect>
              <RHFTextField name="quantity" type="number" label="Količina" />

              <Button variant="outlined" color="secondary" type="submit">
                Dodaj
              </Button>
            </Stack>
          </FormProvider>
        </Box>
      </Popover>
    </>
  );
};

export default AddToCartButton;
