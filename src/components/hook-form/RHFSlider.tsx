// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Slider, SliderProps, FormHelperText } from '@mui/material';

// ----------------------------------------------------------------------

type Props = SliderProps & {
  name: string;
  helperText?: React.ReactNode;
};

export default function RHFSlider({ name, helperText, ...other }: Props) {
  const { control } = useFormContext();
    const MAX = 70000;
    const MIN = 0;
    const marks = [
      {
        value: MIN,
        label: '0 KM',
      },
      {
        value: MAX,
        label: '70000 KM',
      },
    ];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Slider
            {...field}
            valueLabelDisplay='auto'
            {...other}
            marks={marks}
            step={10}
            min={MIN}
            max={MAX}
          />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}
