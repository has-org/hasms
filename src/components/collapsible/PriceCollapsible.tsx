"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { RHFCheckbox, RHFSlider } from "../hook-form";
import FormProvider from "../hook-form/FormProvider";


const PriceCollapsible = ({ title, min, max}: { title: string, min: number, max: number  }) => {
  const [open, setOpen] = useState(false);

  const methods = useForm<any>({
    defaultValues: {},
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<any> = async (
    values: any,
    e?: React.BaseSyntheticEvent
  ) => {};

  return (
    <>
      <Stack direction="row">
        <Typography>{title}</Typography>
        <Button onClick={() => setOpen(!open)}>
          {open ? "Hide" : "Show"}
        </Button>
      </Stack>
      <Stack
        sx={{
          display: open ? "block" : "none",
        }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
         <RHFSlider name="price" min={min} max={max}/>
        </FormProvider>
      </Stack>
    </>
  );
};

export default PriceCollapsible;
