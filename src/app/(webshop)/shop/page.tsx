import {PRODUCTS} from "@/mockData/products"
import {ProductCard} from "@/components/ProductCard";

export default function Shop() {


  return (
    <main className="min-h-screen	 flex flex-col font-serif">

      <div className="flex pt-4">Katalog KACIGE INTEGRALNE</div>
      <div className="grid grid-cols-4 gap-4">
        {PRODUCTS.map((product, index) => (
         <ProductCard product={product} key={index}/>
        ))}
      </div>
    </main>
  );
}
