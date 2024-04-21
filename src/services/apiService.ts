export async function getPosts() {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/posts`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (res.status !== 200) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		return null;
	}
}
export async function getPost({ id }: { id: string }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/posts/${id}`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (res.status !== 200) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		return null;
	}
}

export async function getCatalogues() {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/catalogues`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (res.status !== 200) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		return null;
	}
}
export async function getCatalogue({ catalogueID }: { catalogueID: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/catalogue/${catalogueID}`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (res.status !== 200) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		return null;
	}
}
export async function getCategories({ page, count }: { page: number; count: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/categories?page=${page}&count=${count}`, {
			method: 'GET',
			cache: 'no-store',
		});
		if (res.status !== 200) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		return null;
	}
}
export async function getCategory({ id }: { id: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/category/${id}`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function getCategoryProducts({ id, page, count }: { id: number; page: number; count: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/category/${id}/products?page=${page}&count=${count}`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function getCategoryProductsSizes({ id }: { id: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/category/${id}/products/sizes`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function getCategoryProductsColors({ id }: { id: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/category/${id}/products/colors`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function getProducts() {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}
export async function getProduct({ id }: { id: number }) {
	console.log(id);
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/${id}`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function getProductVariants({ id }: { id: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/${id}/variants`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function getProductVariantImages({ id }: { id: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/variant/${id}/images`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function getProductVariantColors({ id }: { id: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/variant/${id}/colors`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function getProductVariantSizes({ id }: { id: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/variant/${id}/sizes`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function getProductVariantPrices({ id }: { id: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/product/variant/${id}/prices`, {
			method: 'GET',
			next: {
				revalidate: 1,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
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
			method: 'GET',
			next: {},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		return null;
	}
}

export async function getCatalogueProducts({ id }: { id: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/catalogue/${id}/products`, {
			method: 'GET',
			next: {
				revalidate: 10,
			},
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (e) {
		console.log(e);
		return null;
	}
}
