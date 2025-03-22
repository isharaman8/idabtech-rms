import { countries } from "countries-list";

// Convert the countries object into an array of { label, value }
export const COUNTRIES = Object.entries(countries).map(([code, country]) => ({
	label: country.name,
	value: code.toLowerCase(),
}));

export const PLAN_DETAILS = [
	{
		uid: "plan-001",
		name: "Trial",
		type: "Default",
		price: 0,
		description: "First try, then trust!",
		features: {
			job_posts: 3,
			featured_job_posts: 3,
			highlighted_job_posts: 3,
			candidate_cv_preview: 50,
		},
		show_on_frontend: true,
	},
	{
		uid: "plan-002",
		name: "Startup & SME",
		type: "Basic",
		price: 150,
		description:
			"Monthly saver - yearly plan\nBasic recruitment support - Standard HR docs",
		features: {
			job_posts: 15,
			featured_job_posts: 5,
			highlighted_job_posts: 3,
			candidate_cv_preview: 600,
		},
		show_on_frontend: true,
	},
	{
		uid: "plan-003",
		name: "MSME",
		type: "Premium",
		price: 375,
		description:
			"Premium support - Annual price\nExclusive recruitment support - Standard HR docs",
		features: {
			job_posts: 25,
			featured_job_posts: 10,
			highlighted_job_posts: 10,
			candidate_cv_preview: 1500,
		},
		show_on_frontend: true,
	},
	{
		uid: "plan-004",
		name: "Large",
		type: "Customized",
		price: 1000,
		description:
			"Pay as you use.\nIt will be your customized plan only for you.",
		features: {
			job_posts: 60,
			featured_job_posts: 30,
			highlighted_job_posts: 15,
			candidate_cv_preview: "∞",
		},
		show_on_frontend: true,
	},
];

export const ORGANIZATION_TYPES = [
	{ label: "ALL", value: "all" },
	{ label: "NGO", value: "ngo" },
	{ label: "Other", value: "other" },
	{ label: "Government", value: "government" },
	{ label: "Partnership", value: "partnership" },
	{ label: "Public Limited", value: "public_limited" },
	{ label: "Private Limited", value: "private_limited" },
	{ label: "Sole Proprietorship", value: "sole_proprietorship" },
	{ label: "LLP (Limited Liability Partnership)", value: "llp" },
];

export const TEAM_SIZES = [
	{ label: "ALL", value: "all" },
	{ label: "1-10", value: "1-10" },
	{ label: "11-50", value: "11-50" },
	{ label: "51-200", value: "51-200" },
	{ label: "201-500", value: "201-500" },
	{ label: "501-1000", value: "501-1000" },
	{ label: "1001-5000", value: "1001-5000" },
	{ label: "5001-10000", value: "5001-10000" },
	{ label: "10001+", value: "10001+" },
];

export const INDUSTRY_TYPES = [
	{ label: "ALL", value: "all" },
	{ label: "Retail", value: "retail" },
	{ label: "Energy", value: "energy" },
	{ label: "Finance", value: "finance" },
	{ label: "Education", value: "education" },
	{ label: "Technology", value: "technology" },
	{ label: "Healthcare", value: "healthcare" },
	{ label: "Agriculture", value: "agriculture" },
	{ label: "Real Estate", value: "real_estate" },
	{ label: "Hospitality", value: "hospitality" },
	{ label: "Construction", value: "construction" },
	{ label: "Entertainment", value: "entertainment" },
	{ label: "Manufacturing", value: "manufacturing" },
	{ label: "Transportation", value: "transportation" },
	{ label: "Telecommunications", value: "telecommunications" },
	{ label: "Other", value: "other" },
];

export const COMPANY_LIST = [
	{
		uid: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
		bio: "Pioneering renewable energy solutions for a sustainable future.",
		logo: "https://example.com/solarpower_logo.png",
		city: "Austin",
		email: "info@solarpower.com",
		state: "Texas",
		mobile: "+1-4567891230",
		banner: "https://example.com/solarpower_banner.jpg",
		vision: "Empowering the world with clean energy solutions.",
		website: "https://solarpower.com",
		pinCode: "73301",
		country: "usa",
		teamSize: "200-500",
		password: "GreenFuture2024",
		username: "solar_admin",
		socialLinks: [
			{ platform: "Facebook", link: "https://facebook.com/solarpower" },
			{ platform: "LinkedIn", link: "https://linkedin.com/company/solarpower" },
		],
		companyName: "Solar Power Inc.",
		industryType: "energy",
		secondaryEmail: "support@solarpower.com",
		organizationType: "public",
		serviceProvider: "yes",
		establishmentDate: "2010-09-15T00:00:00.000Z",
		plan: "",
	},
	{
		uid: "9b74c989-9adc-4f89-a4eb-1eebcc0039a7",
		bio: "Innovating e-commerce experiences with AI-driven recommendations.",
		logo: "https://example.com/shopeasy_logo.png",
		city: "New York",
		email: "contact@shopeasy.com",
		state: "New York",
		mobile: "+1-7896543210",
		banner: "https://example.com/shopeasy_banner.jpg",
		vision: "Making online shopping seamless and intelligent.",
		website: "https://shopeasy.com",
		pinCode: "10001",
		country: "usa",
		teamSize: "500-1000",
		password: "EcomAI@2024",
		username: "shopeasy_admin",
		socialLinks: [
			{ platform: "Instagram", link: "https://instagram.com/shopeasy" },
			{ platform: "Twitter", link: "https://twitter.com/shopeasy" },
		],
		companyName: "ShopEasy AI",
		industryType: "e-commerce",
		secondaryEmail: "support@shopeasy.com",
		organizationType: "private",
		serviceProvider: "no",
		establishmentDate: "2018-03-12T00:00:00.000Z",
		plan: "",
	},
	{
		uid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
		bio: "Cutting-edge cybersecurity firm ensuring digital safety.",
		logo: "https://example.com/cybersec_logo.png",
		city: "London",
		email: "support@cybersecuk.com",
		state: "England",
		mobile: "+44-7896541230",
		banner: "https://example.com/cybersec_banner.jpg",
		vision: "Creating a secure digital world for businesses and individuals.",
		website: "https://cybersecuk.com",
		pinCode: "EC1A 1BB",
		country: "uk",
		teamSize: "100-200",
		password: "SecureNet@2024",
		username: "cyber_admin",
		socialLinks: [
			{ platform: "LinkedIn", link: "https://linkedin.com/company/cybersecuk" },
			{ platform: "Twitter", link: "https://twitter.com/cybersecuk" },
		],
		companyName: "CyberSec UK",
		industryType: "cybersecurity",
		secondaryEmail: "info@cybersecuk.com",
		organizationType: "limited",
		serviceProvider: "yes",
		establishmentDate: "2012-07-05T00:00:00.000Z",
		plan: "",
	},
	{
		uid: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
		bio: "Pushing the boundaries of space exploration and satellite tech.",
		logo: "https://example.com/stellarx_logo.png",
		city: "Berlin",
		email: "hello@stellarx.de",
		state: "Berlin",
		mobile: "+49-1598765432",
		banner: "https://example.com/stellarx_banner.jpg",
		vision: "Making interplanetary travel accessible for humanity.",
		website: "https://stellarx.de",
		pinCode: "10115",
		country: "germany",
		teamSize: "1000+",
		password: "SpaceTech@2024",
		username: "stellar_admin",
		socialLinks: [
			{ platform: "Facebook", link: "https://facebook.com/stellarx" },
			{ platform: "Instagram", link: "https://instagram.com/stellarx" },
		],
		companyName: "StellarX Aerospace",
		industryType: "aerospace",
		secondaryEmail: "support@stellarx.de",
		organizationType: "corporation",
		serviceProvider: "no",
		establishmentDate: "2005-11-21T00:00:00.000Z",
		plan: "",
	},
	{
		uid: "e7c63b66-1b74-4993-bc2b-dbc2e4c50f1f",
		bio: "Revolutionizing healthcare with AI-driven diagnostics.",
		logo: "https://example.com/medai_logo.png",
		city: "Mumbai",
		email: "contact@medai.in",
		state: "Maharashtra",
		mobile: "+91-9876543210",
		banner: "https://example.com/medai_banner.jpg",
		vision: "Bringing AI-powered healthcare to the masses.",
		website: "https://medai.in",
		pinCode: "400001",
		country: "india",
		teamSize: "300-500",
		password: "MediAI@2024",
		username: "medai_admin",
		socialLinks: [
			{ platform: "LinkedIn", link: "https://linkedin.com/company/medai" },
			{ platform: "Twitter", link: "https://twitter.com/medai" },
		],
		companyName: "MedAI Technologies",
		industryType: "healthcare",
		secondaryEmail: "help@medai.in",
		organizationType: "startup",
		serviceProvider: "yes",
		establishmentDate: "2017-08-30T00:00:00.000Z",
		plan: "",
	},
].map((company) => ({
	...company,
	country: COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)].value,
	plan: PLAN_DETAILS[Math.floor(Math.random() * PLAN_DETAILS.length)].uid,
	industryType:
		INDUSTRY_TYPES[Math.floor(Math.random() * INDUSTRY_TYPES.length)].value,
	organizationType:
		ORGANIZATION_TYPES[Math.floor(Math.random() * ORGANIZATION_TYPES.length)]
			.value,
	uid: crypto.randomUUID(),
}));

export const RECOMMENDED_PACKAGES = PLAN_DETAILS.filter(
	(plan) => plan.show_on_frontend
).map((plan) => ({
	value: plan.uid,
	label: plan.name,
}));

export const DEFAULT_PACKAGES = PLAN_DETAILS.filter(
	(plan) => plan.show_on_frontend
).map((plan) => ({
	value: plan.uid,
	label: plan.name,
}));

export const EMAIL_VERIFICATION_ARRAY = [
	{ label: "ALL", value: "all" },
	{ label: "Verified", value: "yes" },
	{ label: "Not Verified", value: "no" },
];

export const SORT_BY_ARRAY = [
	{ label: "Newest First", value: "newest" },
	{ label: "Oldest First", value: "oldest" },
];
