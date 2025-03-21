export interface SocialLink {
	link: string;
	platform: string;
}

export interface Company {
	id?: string;
	uid: string;
	name: string;
	email: string;
	mobile: string;
	country: string;
	active: boolean;
	website: string;
	password: string;
	verified: boolean;
	industryType: string;
	socials: SocialLink[];
	secondaryEmail: string;
	secondaryMobile: string;
	organizationType: string;
	serviceProvider: "yes" | "no";
}

export interface CompanyFormProps {
	open: boolean;
	onClose: () => void;
	company?: Company | null;
}
