import { StaticImageData } from "next/image";



async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products`, {
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


async function getNavMenus() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/navigationMenus`, {
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

export default async function Shop() {
  const products = await getData();

  if (!products) return <div>Products not found</div>;
  return (
    <></>
  );
}
