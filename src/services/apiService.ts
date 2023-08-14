export async function getBlogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/blogs`, {
      method: "GET",
      next: {
        revalidate: 1,
      },
    });
    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    return null;
  }
}

export async function getCatalogues() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/catalogues`, {
      method: "GET",
      next: {
        revalidate: 1,
      },
    });
    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    return null;
  }
}
export async function getCooperators() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/cooperators`, {
      method: "GET",
      next: {},
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    return null;
  }
}

export async function getNavMenus() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/navigationMenus`,
      {
        method: "GET",
        next: {
          revalidate: 1,
        },
      }
    );
    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    return null;
  }
}

export async function getCatalogueProducts(catalogueName: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/catalogue/${catalogueName}/products`,
      {
        method: "GET",
        next: {
          revalidate: 10,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    console.log(e);
    return null;
  }
}