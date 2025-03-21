export interface SocialLink {
	platform: string;
	link: string;
}

export interface Company {
	name: string;
	email: string;
	secondaryEmail: string;
	mobile: string;
	secondaryMobile: string;
	organizationType: string;
	industryType: string;
	country: string;
	password: string;
	website: string;
	serviceProvider: "yes" | "no";
	socials: SocialLink[];
}

export interface CompanyFormProps {
	open: boolean;
	onClose: () => void;
	company?: Company | null;
}
