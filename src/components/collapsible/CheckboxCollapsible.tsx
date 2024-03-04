"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { RHFCheckbox } from "../hook-form";
import FormProvider from "../hook-form/FormProvider";

const CheckboxCollapsible = ({
  title,
  selectFields,
}: {
  title: string;
  selectFields: string[];
}) => {
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
          {open ? "Hide" : "Show"}{" "}
        </Button>
      </Stack>
      <Stack
        sx={{
          display: open ? "block" : "none",
        }}
      >
        <Box sx={{ height: "180px", overflow: "auto" }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            {selectFields?.map((field) => {
              return <RHFCheckbox name={field} label={field} key={field} />;
            })}
          </FormProvider>
        </Box>
      </Stack>
    </>
  );
};

export default CheckboxCollapsible;
