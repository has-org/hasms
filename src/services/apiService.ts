import { IOrder } from '@/types/IOrder';

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



export async function getProducts({ page, count }: { page: number; count: number }) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/products?page=${page}&count=${count}`, {
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


