import {
    TextField,
    InputProps,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import ReactSelect from 'react-select';

type IFormInputProps = {
    name: string;
    label: string;
    inputProps?: any;
    options?: any
} & InputProps;

const FormSelect = ({ name, label, type, options, inputProps, ...otherProps }: IFormInputProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const errorText = errors[name]?.message;

    return (
        <Controller
            control={control}
            defaultValue=''
            name={name}
            render={({ field }) => (
                <ReactSelect
                    name="size"
                    options={options}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            width: '200px',
                            height: '24px',
                        }),
                    }}
                    placeholder="Izaberite Veličinu"
                />

            )}
        />
    );
};

export default FormSelect;

