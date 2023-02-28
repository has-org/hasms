import Image from "next/image";

async function getData(id: number) {
  const res = await fetch(`http://localhost:8000/product/${id}`, {
    method: 'GET',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Product({ params: { id } }: any) {
  const product = await getData(id);
  return (
    <main className="min-h-screen	 flex flex-col">
      <div className="flex pt-4">Katalog KACIGE STA GOD</div>
      <h1 className="pt-4">{product.name}</h1>
      {/* <div>{product.tags}</div> TODO */}
      <div>{product.description}</div>
      <div>{product.price}</div>
      <div>{product.quantity}</div>
      <div>{product.category}</div>
      <div>{product.subcategory}</div>
      <div>{product.size}</div>
      <div>{product.manufacturer}</div>
      <div>{product.image}</div>
      <Image src={product.image} width={500} height={500} alt={'blabla'} style={{objectFit:'fill'}}></Image>
    </main>
  );
}