import {PRODUCTS} from "@/mockData/products"
import ProductCard from "@/components/ProductCard";
export default function Shop() {


  return (
    <main className="min-h-screen	 flex flex-col">
      <div className="flex pt-4">Katalog KACIGE STA GOD</div>
      <h1 className="pt-4">Ime kategorije</h1>

      <div className="grid grid-cols-4 gap-4">
        {PRODUCTS.map((product, index) => (
         <ProductCard product={product} key={index}/>
        ))}
      </div>
    </main>
  );
}
