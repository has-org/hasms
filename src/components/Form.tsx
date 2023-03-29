'use client'
import Select from "react-select";
import { useForm, FieldValues, Controller } from "react-hook-form";
import FileInput from "./FileInput";
import { postData } from "utils/postData";



type Inputs = {

};

export const Form: React.FC<Inputs> = ({ }) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            url: '',
            type: '',
            image: '',
        }
    });
    const onSubmit = (data: FieldValues) => {
        postData(`${process.env.API_HOST}/admin/catalogue`, data)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                render={({ field }) => <input {...field} />}
                defaultValue=""
            />
            <Controller
                name="url"
                control={control}
                render={({ field }) => <input {...field} />}
                defaultValue=""
            />
            <Controller
                name="type"
                control={control}
                render={({ field }) => <Select
                    {...field}
                    options={[
                        { value: "catalogue", label: "Katalog" },
                        { value: "category", label: "Kategorija" },
                        { value: "blog", label: "Blog" }
                    ]}
                    isClearable
                    defaultValue="" />}
            />
            <Controller
                name="image"
                control={control}


                render={({ field }) => <FileInput {...field} ref={null} encType='multipart/form-data' isMultiple={false} />}
            />

            <input type="submit" />
        </form>
    );
}

