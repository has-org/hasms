async function getData() {
    // const res = await fetch('https://api.example.com/...');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    // if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      // throw new Error('Failed to fetch data');
    // }
  
    // return res.json();
  }

export default async function Product() {
    const data = await getData();

  return (
    <main className="min-h-screen	 flex flex-col">
      <div className="flex pt-4">Katalog KACIGE STA GOD</div>
      <h1 className="pt-4">Ime kategorije</h1>
    </main>
  );
}
