'use client'

/* IMPORT HOOKS AND PROPS TYPES */
import {
    useForm
} from 'react-hook-form';

import { Product as ProductType } from "@/types/Product";
import { postData } from "utils/postData";
import React from "react";



type FormInputs = {
    children: React.ReactNode
    defaultValues: ProductType
    onSubmit: any
};

export const Input: React.FC<any> = ({ register, name, ...rest }) => {
    return <input {...register(name)} {...rest} />;
}

export const Select: React.FC<any> = ({ register, options, name, ...rest }) => {
    return (
        <select {...register(name)} {...rest}>
            {options.map((value: any) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    );
}

export const Form: React.FC<FormInputs> = ({ defaultValues, children, onSubmit }) => {
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
