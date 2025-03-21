export interface Pricing {
	id: string;
	uid?: string;
	title: string;
	plan?: string;
	price: number;
	features: string[];
	onEdit?: () => void;
	description?: string;
	showOnFrontend?: boolean;
	onToggleFrontend?: (checked: boolean) => void;
}
