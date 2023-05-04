'use client'

import { FileInput, Form, Input, Select } from "@/components/Form";
import { useEffect, useState } from "react";
import { Product as ProductType } from "@/types/Product";
import ReactSelect from "react-select";
import { Controller, useForm } from "react-hook-form";



export default function AdminProductsPage() {
  const [products, setProducts] = useState<ProductType[] | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  const productDefaultValues = {
    code: '',
    name: '',
    url: '',
    image: '',
    price: 0
  }

  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  const onSubmit = (data: any) => {
    console.log(data)
  }

  if (isLoading) return <p className="min-h-screen">Loading...</p>
  if (!products) return <p>No data</p>
  return (
    <main className="min-h-screen	 flex flex-col font-serif">
      <button onClick={() => setShow(true)}>Add new product</button>
      {
        show ? (
              <Form defaultValues={productDefaultValues} onSubmit={onSubmit}>
                <Input name="code" type="text" placeholder="Code" />
                <Input name="name" type="text" placeholder="Name" />
                <ReactSelect name="category" options={options} />
                <FileInput name={"file-picker"} onChange={() => console.log('aasd')} />
                <input type="submit" />
              </Form>
        ) : null
      }
      {
        products ? products?.map((product) => {
          return (
            <div className="flex gap-x-2" key={product.id}>
              <div>{product.id}</div>
              <div>{product.code}</div>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.currency}</div>
              <div>{product.manufacturer}</div>
              <div>{product.category?.name}</div>
              <div className="flex gap-x-2">{product.tags?.map((tag, index) => {
                return (
                  <div key={index}>
                    {tag.name}
                  </div>
                )
              })}</div>
              <div className="div">{product.variants?.length}</div>
            </div>
          )
        }) : null
      }
    </main >
  );
}
