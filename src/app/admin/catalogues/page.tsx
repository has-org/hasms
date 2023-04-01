'use client'
import { Form } from "@/components/Form";
import { FormStyled } from "@/components/FormStyled";
import { Popup } from "@/components/Popup";
import { useEffect, useState } from "react";



export default function AdminCataloguesPage() {
  const [catalogues, setCatalogues] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/admin/catalogues`)
      .then((res) => res.json())
      .then((data) => {
        setCatalogues(data)
        setLoading(false)
      })
  }, [catalogues])

  if (isLoading) return <p className="min-h-screen">Loading...</p>
  if (!catalogues) return <p>No data</p>
  return (
    <main className="min-h-screen	flex flex-col">
      <button onClick={() => setShow(true)}>Add new catalogue</button>
      {
        show ? (
          <Popup show={show} togglePopup={() => setShow(false)} >
            <FormStyled>
              <Form></Form>
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
            </div>
          )
        })
      }
    </main>
  );
}
