
async function getProducts() {
  try {
    const res = await fetch('http://localhost:8000/products', {
      method: 'GET',
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (e) {
    return null
  }
}

export default async function AdminProductsPage() {
  const products = await getProducts()
  return (
    <main className="min-h-screen	 flex flex-col font-serif">
      {products.map((product: any) => {
        return (
          <div className="flex gap-x-2" key={product.id}>
            <div>{product.id}</div>
            <div>{product.code}</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.currency}</div>
            <div>{product.manufacturer}</div>
            <div>{product.category.name}</div>
            <div className="flex gap-x-2">{product.tags?.map((tag, index) => {
              return (
                <div key={index}>
                  {tag.name}
                </div>
              )
            })}</div>
            <div className="div">{product.variants.length}</div>
          </div>
        )
      })}
    </main>
  );
}
