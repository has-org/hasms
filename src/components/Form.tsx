
/* IMPORT HOOKS AND PROPS TYPES */
import {
    useForm
} from 'react-hook-form';

import { Product as ProductType } from "@/types/Product";
import { postData } from "utils/postData";
import React, { useState } from "react";


type FileInputProps = {
    name: string;
    onChange: (e: any) => any
    ref?: any,
    isMultiple?: boolean,
    encType?: string
    register?: any
};

export const FileInput: React.FC<FileInputProps> = ({ name, onChange, isMultiple, register, ...rest }) => {
    const [images, setImages] = useState([])

    const handleChange = (e: any) => {
        if (!e.target.files[0]) return onChange("");
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = () => {
            onChange(reader.result);
        }

    }
    

    return (
        <>
        {images ? images.map(image => image) : ''}
        <input type="file" onChange={handleChange} multiple={isMultiple} accept="image/*"  {...register(name)} {...rest} />
        </>
    );
};

type FormInputs = {
    children: React.ReactNode
    defaultValues: ProductType
    onSubmit: any
};

export const Input: React.FC<any> = ({ register, name, ...rest }) => {
    return <input {...register(name)} {...rest} />;
}

// export const Select: React.FC<any> = ({ register, options, name, ...rest }) => {
//     return (
//         <select {...register(name)} {...rest}>
//             {options.map((value: any, index: number) => (
//                 <option key={index} value={value}>
//                     {value.label}
//                 </option>
//             ))}
//         </select>
//     );
// }

export const Form = ({ defaultValues, children, onSubmit }: FormInputs) => {
    const { handleSubmit, register } = useForm({ defaultValues });


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Array.isArray(children)
                ? React.Children.map(children, child => {
                    return child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                register: register,
                                key: child.props.name
                            }
                        })
                        : child;
                })
                : children}
            <button type="submit">Submit</button>
        </form>
    );
}
