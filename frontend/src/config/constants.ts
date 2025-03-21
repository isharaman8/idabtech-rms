import { countries } from "countries-list";

// Convert the countries object into an array of { label, value }
export const COUNTRIES = Object.entries(countries).map(([code, country]) => ({
	label: country.name,
	value: code.toLowerCase(),
}));
