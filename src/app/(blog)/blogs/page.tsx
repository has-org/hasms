import Image, { StaticImageData } from "next/image";


// async function getData(id: number) {
//   const res = await fetch(`http://localhost:8000/product/${id}`, {
//     method: 'GET',
//   });

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

export default async function Blog({ params: { id } }: any) {


  return (
    <main className="min-h-screen">
    123123
    </main>
  );
}