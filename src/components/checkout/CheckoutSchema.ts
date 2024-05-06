import { number, object, string, boolean, z } from 'zod';

export type FormValuesProps = {
	stepOne: {
		first_name: string;
		last_name: string;
		email: string;
		phone: string;
		country: string;
		city: string;
		zip: string;
		address: string;
		notes: string;
	};
	stepTwo: {
		deliveryMethod: string;
	};
	stepThree: {
		paymentMethod: string;
	};
	afterSubmit?: string;
};

export const userDetailsSchema = object({
	first_name: string().min(2, 'Ime mora imati najmanje 2 karaktera'),
	last_name: string().min(2, 'Prezime mora imati najmanje 2 karaktera'),
	email: string().email('Unesite validan email'),
	phone: string().min(6, 'Telefon mora imati najmanje 6 karaktera'),
	country: string().min(2, 'Drzava mora imati najmanje 2 karaktera'),
	city: string().min(2, 'Grad mora imati najmanje 2 karaktera'),
	zip: string().min(4, 'Zip mora imati najmanje 4 karaktera'),
	address: string().min(5, 'Adresa mora imati najmanje 5 karaktera'),
	notes: string().optional(),
});

export const deliveryMethodSchema = object({
	deliveryMethod: string().min(1, 'Izaberite metodu dostave'),
});

export const paymentMethodSchema = object({
	paymentMethod: string().min(1, 'Izaberite metodu placanja'),
});

export const checkoutSchema = object({
	stepOne: userDetailsSchema,
	stepTwo: deliveryMethodSchema,
	stepThree: paymentMethodSchema,
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
