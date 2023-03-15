import { ColoredDot } from "@/components/ColoredDot";
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
  try {

    const res = await fetch(`http://localhost:8000/product/${id}`, {
      method: 'GET',
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    console.log(e)
    return null
  }
}

export default async function Product({ params: { id } }: any) {
  const product = await getData(id);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <main className="min-h-screen">
      <div className="flex pt-4 w-full">
        <span className="text-3xl">
          Katalog KACIGE STA GOD
        </span>
      </div>
      {/* tags */}
      <div className="flex">
        <div className="thumbnail-list-container mr-2">
          <div className="thumbnail-list-img-wrap flex relative">
            <Image className="thumbnail-list-img p-0.5" src={product.image} fill alt={'blabla'}></Image>
          </div>

        </div>
        <div className="gallery-preview-container mr-2">
          <div className="gallery-preview-img-wrap flex relative">
            <Image className="gallery-preview-img" src={product.image} fill alt={'blabla'}></Image>
          </div>

        </div>
        <div className="flex flex-col product-details">
          <h1 className="product-name">{product.name}</h1>
          {/* <div>{product.tags}</div> TODO */}
          <div className="product-brand flex gap-x-2">
            <span className="product-brand-key">
              Brand
            </span>
            <span className="product-brand-value">
              {product.manufacturer}
            </span>
          </div>
          <div className="product-model">
            <span className="product-model-key">
              {product.model && 'Model'}
            </span>
            <span className="product-model-value">
              {product.model}
            </span>
          </div>
          <div className="product-price flex gap-x-2">

            <span className="product-price-key">
              {product.price && 'Cijena'}
            </span>
            <span className="product-price-value flex gap-x-1">
              {product.price}
              <span className="product-currency">
                {product.currency}
              </span>
            </span>
          </div>
          {
            product.variants ? product.variants.map((variant: Variant, index: number) => {
              return (
                <div key={index} className="product-colors flex flex-col">

                  <span className="product-colors-key">Colors </span>

                  <span className="product-colors-value">

                    {variant.colors?.map((color, index) => {
                      return (
                        <div key={index} className="product-color-wrap">
                          <ColoredDot color={color} />
                        </div>
                      )
                    })}
                  </span>

                </div>
              )
            })
              : null
          }
          <div className="product-size">
            {/* <label>

              What do we eat?

              <select >

                <option value="fruit">Fruit</option>

                <option value="vegetable">Vegetable</option>

                <option value="meat">Meat</option>

              </select>

            </label> */}
            {product.size}</div>
          <div>Opis: {product.description}</div>
          <div>Napomena: {product.note}</div>
          <button className="bg-red-200" type="submit">Naruci </button>


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