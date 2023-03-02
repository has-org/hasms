import Image, { StaticImageData } from "next/image";

type Variant = {
  id: number;
  name: string;
  image: string | StaticImageData;
  colors: Color[];
};

type Color = {
  id: number;
  name: string;
  value?: string;
  image?: string | StaticImageData;
};

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
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <main className="min-h-screen">
      <div className="flex pt-4">Katalog KACIGE STA GOD</div>
      {/* tags */}
      <div className="grid grid-cols-4">
        <div className="div">
          <Image src={product.image} width={500} height={500} alt={'blabla'} style={{ objectFit: 'fill' }}></Image>

        </div>
        <div className="div">
          <Image src={product.image} width={500} height={500} alt={'blabla'} style={{ objectFit: 'fill' }}></Image>

        </div>
        <div className="div grid-span-2">
          <h1 className="pt-4">Ime: {product.name}</h1>
          {/* <div>{product.tags}</div> TODO */}
          <div>Brand: {product.manufacturer}</div>
          <div>Model: {product.model}</div>
          <div>Cijena: {product.price}</div>
          {
            product.variants ? product.variants.map((variant: Variant, index: number) => {
              return (
                <div key={index}>
                  <span className="flex">
                    Color: {variant.colors?.map((color, index) => {
                      return (
                        <div key={index}>
                          <p>{color.name}</p>
                        </div>
                      )
                    })}
                  </span>
                </div>
              )
            })
              : null
          }
          <div>Choose Size: {product.size}</div>
          <button type="submit">Naruci </button>
          <div>Opis: {product.description}</div>
          <div>Napomena: {product.note}</div>


          <div>Izdvajamo iz ponude: 
            {product.relatedProducts?.map((relatedProduct: Product, index: number) => {
              return (
                <div key={index}>
                  <p>{relatedProduct.name}</p>
                </div>
              )
            })
            }
          </div>
        </div>

      </div>

    </main>
  );
}