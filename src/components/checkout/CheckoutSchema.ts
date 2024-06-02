import { number, object, string, boolean, z } from 'zod';

export type FormValuesProps = {
	stepOne: {
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		country: string;
		city: string;
		zip: string;
		address: string;
		note: string;
	};
	stepTwo: {
		deliveryMethod: string;
		deliveryAddress: string;
	};
	stepThree: {
		paymentMethod: string;
	};
	afterSubmit?: string;
};

export const userDetailsSchema = object({
	firstName: string().min(2, 'Ime mora imati najmanje 2 karaktera'),
	lastName: string().min(2, 'Prezime mora imati najmanje 2 karaktera'),
	email: string().email('Unesite validan email'),
	phone: string().min(6, 'Telefon mora imati najmanje 6 karaktera'),
	country: string().min(2, 'Drzava mora imati najmanje 2 karaktera'),
	city: string().min(2, 'Grad mora imati najmanje 2 karaktera'),
	zip: string().min(4, 'Zip mora imati najmanje 4 karaktera'),
	address: string().min(5, 'Adresa mora imati najmanje 5 karaktera'),
	note: string().optional(),
});

export const deliveryMethodSchema = object({
	deliveryMethod: string().min(1, 'Izaberite metodu dostave'),
	deliveryAddress: string().min(5, 'Adresa mora imati najmanje 5 karaktera'),
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
