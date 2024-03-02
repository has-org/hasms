export async function getPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/posts`, {
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
export async function getPost(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/posts/${id}`, {
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
export async function getCatalogue(catalogueID: number) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/catalogue/${catalogueID}`, {
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
export async function getCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/categories`, {
      method: "GET",
      cache: "no-store",
    });
    if (res.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (e) {
    return null;
  }
}
export async function getCategory(id: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/category/${id}`,
      {
        method: "GET",
        next: {
          revalidate: 1,
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

export async function getCategoryProducts(id: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/category/${id}/products`,
      {
        method: "GET",
        next: {
          revalidate: 1,
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

export async function getProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/products`,
      {
        method: "GET",
        next: {
          revalidate: 1,
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
export async function getProduct(id: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/product/${id}`,
      {
        method: "GET",
        next: {
          revalidate: 1,
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
export async function getProductVariants(id: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/product/${id}/variants`,
      {
        method: "GET",
        next: {
          revalidate: 1,
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

export async function getCatalogueProducts(catalogueId: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/catalogue/${catalogueId}/products`,
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