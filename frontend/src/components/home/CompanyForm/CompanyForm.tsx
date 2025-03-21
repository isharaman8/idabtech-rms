import { z } from "zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomInput from "./Custom/Input";
import SocialDetails from "./SocialDetails";
import CustomSelect from "./Custom/Select";
import CustomTextarea from "./Custom/CustomTextArea";
import PlanDetails from "./ExpandedSection/PlanDetails";
import CustomDatePicker from "./Custom/CustomDatePicker";
import { ImageUploader } from "./ExpandedSection/ImageUploader";
import ExpandedBasicDetails from "./ExpandedSection/BasicDetails";
import ExpandedServiceProvider from "./ExpandedSection/ServiceProvider";
import ExpandedLocationDetails from "./ExpandedSection/LocationDetails";
import QuickCreateAccountDetails from "./QuickCreateSection/QuickCreateAccountDetails";
import { CustomRadio } from "./Custom/CustomRadioButton";
import { COUNTRIES } from "@/config/constants";

// Form Validation Schema
const formSchema = z.object({
	bio: z.string().optional(),
	vision: z.string().optional(),
	mobile: z.string().optional(),
	website: z.string().optional(),
	teamSize: z.string().optional(),
	establishmentDate: z.date().optional(),
	serviceProvider: z.enum(["yes", "no"]),
	secondaryMobile: z.string().optional(),
	email: z.string().email("Invalid email"),
	city: z.string().min(1, "City is required"),
	state: z.string().min(1, "State is required"),
	country: z.string().min(1, "Country is required"),
	pinCode: z.string().min(1, "Pin code is required"),
	username: z.string().min(1, "Username is required"),
	industryType: z.string().min(1, "Select industry type"),
	companyName: z.string().min(1, "Company Name is required"),
	secondaryEmail: z.string().email("Invalid email").optional(),
	organizationType: z.string().min(1, "Select organization type"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	socialLinks: z
		.array(z.object({ platform: z.string(), link: z.string() }))
		.optional(),
	logo: z
		.instanceof(File, { message: "Logo is required" })
		.or(z.string())
		.optional(),
	banner: z
		.instanceof(File, { message: "Banner is required" })
		.or(z.string())
		.optional(),
});

const Section = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => (
	<div className="mb-6">
		<h3 className="w-full p-3 mb-4 bg-gray-200 rounded-md shadow-md border border-gray-300 font-semibold">
			{title}
		</h3>
		{children}
	</div>
);

export default function CreateCompanyForm() {
	const PLAN_DETAILS = [
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
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			bio: "",
			logo: "",
			city: "",
			email: "",
			state: "",
			mobile: "",
			banner: "",
			vision: "",
			website: "",
			pinCode: "",
			country: "",
			teamSize: "",
			password: "",
			username: "",
			companyName: "",
			industryType: "",
			secondaryEmail: "",
			organizationType: "",
			serviceProvider: "yes",
			establishmentDate: undefined,
			socialLinks: [{ platform: "Instagram", link: "" }],
		},
	});

	const ORGANIZATION_TYPES = [
		{ label: "NGO", value: "ngo" },
		{ label: "Other", value: "other" },
		{ label: "Government", value: "government" },
		{ label: "Partnership", value: "partnership" },
		{ label: "Public Limited", value: "public_limited" },
		{ label: "Private Limited", value: "private_limited" },
		{ label: "Sole Proprietorship", value: "sole_proprietorship" },
		{ label: "LLP (Limited Liability Partnership)", value: "llp" },
	];

	const TEAM_SIZES = [
		{ label: "1-10", value: "1-10" },
		{ label: "11-50", value: "11-50" },
		{ label: "51-200", value: "51-200" },
		{ label: "201-500", value: "201-500" },
		{ label: "501-1000", value: "501-1000" },
		{ label: "1001-5000", value: "1001-5000" },
		{ label: "5001-10000", value: "5001-10000" },
		{ label: "10001+", value: "10001+" },
	];

	const INDUSTRY_TYPES = [
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

	const SERVICE_PROVIDERS = [
		{ label: "Yes", value: "yes" },
		{ label: "No", value: "no" },
	];

	const SOCIAL_PLATFORMS = [
		{ label: "Facebook", value: "facebook" },
		{ label: "Twitter", value: "twitter" },
		{ label: "Instagram", value: "instagram" },
		{ label: "LinkedIn", value: "linkedin" },
		{ label: "YouTube", value: "youtube" },
		{ label: "Pinterest", value: "pinterest" },
		{ label: "Snapchat", value: "snapchat" },
		{ label: "TikTok", value: "tiktok" },
		{ label: "Reddit", value: "reddit" },
		{ label: "Other", value: "other" },
	];

	const { watch } = form;

	// Log form changes
	useEffect(() => {
		const subscription = watch((data) => console.log("Form Updated:", data));
		return () => subscription.unsubscribe(); // Cleanup on unmount
	}, [watch]);

	const onSubmit = (data: any) => {
		console.log("Form Submitted:", data);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className=" space-y-10 w-full mx-auto p-6 border rounded-lg shadow-md bg-white"
			>
				{/* quick create section */}
				<div className="space-y-6">
					<h2 className="text-xl font-semibold border-b-2 pb-2 border-red-300">
						Quick Create Company
					</h2>

					<Section title="Account Details">
						<div className="grid grid-cols-2 gap-4">
							<CustomInput
								form={form}
								name="companyName"
								label="Company Name"
								placeholder="Enter company name"
							/>

							<CustomRadio
								name="serviceProvider"
								label="Service Provider"
								options={SERVICE_PROVIDERS}
								form={form}
							/>

							<CustomInput
								form={form}
								name="email"
								label="Email"
								placeholder="Enter email address"
							/>

							<CustomInput
								form={form}
								name="secondaryEmail"
								label="Secondary Email"
								placeholder="Enter secondary email address"
							/>

							<CustomInput
								form={form}
								name="mobile"
								label="Mobile"
								placeholder="Enter mobile number"
							/>

							<CustomInput
								form={form}
								name="secondaryMobile"
								label="Secondary Mobile"
								placeholder="Enter secondary mobile number"
							/>

							<CustomSelect
								form={form}
								name="organizationType"
								label="Organization Type"
								options={ORGANIZATION_TYPES}
							/>

							<CustomSelect
								form={form}
								name="industryType"
								label="Industry Type"
								options={INDUSTRY_TYPES}
							/>

							<CustomInput
								form={form}
								name="password"
								label="Password"
								type="password"
								placeholder="Enter password"
							/>

							<CustomSelect
								form={form}
								name="country"
								label="Country"
								options={COUNTRIES}
							/>

							<CustomInput
								form={form}
								name="website"
								label="Website"
								placeholder="Enter website URL"
							/>
						</div>
					</Section>

					{/* Social Details */}
					<Section title="Social Details">
						<SocialDetails platforms={SOCIAL_PLATFORMS} form={form} />
					</Section>

					<Button type="submit" className="w-full cursor-pointer">
						Quick Create
					</Button>
				</div>

				{/* detailed create section */}
				<div className="space-y-5">
					<h2 className="text-xl font-semibold border-b-2 pb-2 border-red-300">
						Create Company
					</h2>

					<div className="w-full flex justify-between items-start gap-5">
						{/* left half */}
						<div className="w-1/2">
							<Section title="Account Details">
								<ExpandedBasicDetails form={form} />
							</Section>

							<Section title="Company Location">
								<ExpandedLocationDetails form={form} />
							</Section>

							<Section title="Service Provider">
								<ExpandedServiceProvider form={form} />
							</Section>
						</div>

						{/* right half */}
						<div className="w-1/2">
							{/* image upload section */}
							<Section title="Images">
								<div className="flex justify-stretch items-center gap-4 mb-6">
									<ImageUploader
										control={form.control}
										name="logo"
										label="Logo"
									/>
									<ImageUploader
										control={form.control}
										name="banner"
										label="Banner"
									/>
								</div>
							</Section>

							<Section title="Social Details">
								<SocialDetails platforms={SOCIAL_PLATFORMS} form={form} />
							</Section>

							<Section title="Plan Details">
								<PlanDetails form={form} planDetails={PLAN_DETAILS} />
							</Section>
						</div>
					</div>

					<Section title="Profile Details">
						<div className="w-full flex justify-between gap-5">
							{/* left half */}
							<div className="w-1/2 space-y-6">
								<CustomSelect
									form={form}
									label="Organization Type"
									name="organizationType"
									options={ORGANIZATION_TYPES}
								/>

								<CustomSelect
									form={form}
									label="Team Size"
									name="teamSize"
									options={TEAM_SIZES}
								/>

								<CustomInput
									form={form}
									name="website"
									label="Website"
									placeholder="Enter company website"
								/>

								<CustomTextarea
									form={form}
									label="Bio"
									name="bio"
									placeholder="Write your bio..."
								/>
							</div>

							{/* right side */}
							<div className="w-1/2 space-y-6">
								<CustomSelect
									form={form}
									name="industryType"
									label="Industry Type"
									options={INDUSTRY_TYPES}
								/>

								<CustomDatePicker
									form={form}
									label="Establishment Date"
									name="establishmentDate"
								/>

								<CustomTextarea
									form={form}
									label="Vision"
									name="vision"
									placeholder="Write your vision..."
								/>
							</div>
						</div>
					</Section>

					<Button type="submit" className="w-full cursor-pointer">
						Create
					</Button>
				</div>
			</form>
		</Form>
	);
}
