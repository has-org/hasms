'use client'
import { FileInput, Form, Input } from "@/components/Form";
import { FormStyled } from "@/components/FormStyled";
import { Popup } from "@/components/Popup";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";



export default function AdminCataloguesPage() {
  const [catalogues, setCatalogues] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState({
    code: '',
    name: '',
    url: '',
    image: '',
    price: 0,
    type: ''
  })

  const options = [
    { value: 'catalogue', label: 'Catalogue' },
    { value: 'category', label: 'Category' },
    { value: 'blog', label: 'Blog' }
  ]

  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/catalogues`)
      .then((res) => res.json())
      .then((data) => {
        setCatalogues(data)
        setLoading(false)
      })
  }, [])

  const onSubmit = (data: any) => {
    console.log(data)
  }

  if (isLoading) return <p className="min-h-screen">Loading...</p>
  if (!catalogues) return <p>No data</p>
  return (
    <main className="min-h-screen	flex flex-col">
      <button onClick={() => setShow(true)}>Add new catalogue</button>
      {
        show ? (
          <Popup show={show} togglePopup={() => setShow(false)} >
            <FormStyled>
              <Form defaultValues={edit} onSubmit={onSubmit}>
                <Input name="code" type="text" placeholder="Code" />
                <Input name="name" type="text" placeholder="Code" />
                <ReactSelect name="category" options={options} defaultValue={{ value: edit.type, label: edit.type }} />
                <FileInput name={"file-picker"} onChange={() => console.log('aasd')} />

              </Form>
            </FormStyled>
          </Popup>
        ) : null
      }
      {
        catalogues.map((catalogue: any) => {
          return (
            <div className="flex gap-x-2" key={catalogue.id}>
              <div>{catalogue.id}</div>
              <div>{catalogue.name}</div>
              <div>{catalogue.type}</div>
              <button onClick={() => { setShow(true); setEdit(catalogue) }}>Edit</button>
            </div>
          )
        })
      }
    </main>
  );
}
