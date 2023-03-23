

async function getCategories() {
  try {
    const res = await fetch('http://localhost:8000/categories', {
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

export default async function AdminCategoriesPage() {
  const categories = await getCategories()
  return (
    <main className="min-h-screen	 flex flex-col font-serif">
      {
        categories?.map((category: any) => {
          return (
            <div className="flex gap-x-2" key={category.id}>
              <div>{category.id}</div>
              <div>{category.name}</div>
            </div>
          )
        })
      }
    </main>
  );
}
