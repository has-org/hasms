"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import FormProvider from "../hook-form/FormProvider";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ColorCollapsible = ({
  title,
  colors,
}: {
  title: string;
  colors: string[];
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
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        spacing={1}
      >
        <Typography>{title}</Typography>
        <Button onClick={() => setOpen(!open)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Stack>
      <Stack
        sx={{
          display: open ? 'block' : 'none',
        }}
      >
        <Box sx={{ maxHeight: '180px', overflow: 'auto' }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='row'>
              {colors?.map((color) => {
                // return <RHFCheckbox name={color.name} label={color.name} key={color.value}/>;
                return (
                  <Box
                    key={color}
                    sx={{
                      height: '24px',
                      width: '24px',
                      backgroundColor: color,
                      borderRadius: '4px',
                    }}
                  ></Box>
                );
              })}
            </Stack>
          </FormProvider>
        </Box>
      </Stack>
    </>
  );
};

export default ColorCollapsible;
