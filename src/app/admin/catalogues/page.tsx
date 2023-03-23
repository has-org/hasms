'use client'
import { Popup } from "@/components/Popup";
import { useEffect, useState } from "react";



export default function AdminCataloguesPage() {
  const [catalogues, setCatalogues] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/admin/catalogues')
      .then((res) => res.json())
      .then((data) => {
        setCatalogues(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p className="min-h-screen">Loading...</p>
  if (!catalogues) return <p>No data</p>
  return (
    <main className="min-h-screen	flex flex-col font-serif">
      <button onClick={() => setShow(true)}>Add new catalogue</button>
      {
        show ? (<Popup show={show} togglePopup={() => setShow(false)} >
          <div className="div"></div>
        </Popup>) : null
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
