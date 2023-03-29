'use client'
import React from 'react';

type FileInputProps = {
    name: string;
    onChange: (...event: any[]) => void
    ref: any,
    isMultiple: boolean,
    encType: string
};

const FileInput: React.FC<FileInputProps> = ({ name, onChange, isMultiple }) => {
    const handleChange = (e: any) => {
        if(!e.target.files[0]) return onChange("");
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = () => {
            onChange(reader.result);
        }

    }

    return (
        <input type="file" onChange={handleChange} multiple={isMultiple} accept="image/*" />
    );
};

export default FileInput;