'use client';

import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { RHFCheckbox } from '../hook-form';
import FormProvider from '../hook-form/FormProvider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
    e?: React.BaseSyntheticEvent,
  ) => {};

  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography>{title}</Typography>
        <Button onClick={() => setOpen(!open)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}{' '}
        </Button>
      </Stack>
      <Stack
        sx={{
          display: open ? 'block' : 'none',
        }}
      >
        <Box
          sx={{
            maxHeight: '180px',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            paddingLeft: '12px',
          }}
        >
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
