"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { number, object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormProvider from "@/components/hook-form/FormProvider";
import { RHFTextField } from "../hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, Stack } from "@mui/material";
import { useEffect } from "react";

type FormValuesProps = {
  quantity: string | number;
};

const ChangeCartQuantityInputSchema = object({
  quantity: string().min(1, ""),
});

const ChangeCartQuantityInput = ({ product }: { product: any }) => {
  const methods = useForm<FormValuesProps>({
    resolver: zodResolver(ChangeCartQuantityInputSchema),
    defaultValues: {
      quantity: "1",
    },
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<any> = async (
    values: any,
    e?: React.BaseSyntheticEvent
  ) => {};

  useEffect(() => {
    if (product) {
      reset({quantity: product.quantity});
    }
  }, [product, reset]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" alignItems="center">
        <IconButton
          size="small"
          sx={{
            fontSize: "16px",
          }}
        >
          <RemoveIcon sx={{}} />
        </IconButton>
        <RHFTextField name="quantity" size="small" />
        <IconButton
          size="small"
          sx={{
            fontSize: "16px",
          }}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </FormProvider>
  );
};

export default ChangeCartQuantityInput;
