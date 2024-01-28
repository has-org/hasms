import { useEffect, useRef } from 'react';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps } from '@mui/material';

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
};

export default function RHFTextField({ name, helperText, ...other }: Props) {
  const { control } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        input.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === 'number' && field.value === 0
              ? ''
              : field.value
          }
          error={!!error}
          helperText={error ? error?.message : helperText}
          inputRef={inputRef}
          
          {...other}
        />
      )}
    />
  );
}
