import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomInput from "../../shared/Input";
import SocialDetails from "./SocialDetails";
import CustomSelect from "../../shared/Select";
import {
	COUNTRIES,
	TEAM_SIZES,
	INDUSTRY_TYPES,
	ORGANIZATION_TYPES,
} from "@/config/constants";
import CustomTextarea from "../../shared/CustomTextArea";
import { CustomRadio } from "../../shared/CustomRadioButton";
import CustomDatePicker from "../../shared/CustomDatePicker";
import { ImageUploader } from "../../shared/ImageUploader";

// Form Validation Schema
const formSchema = z.object({
	active: z.boolean().optional().nullable(),
	verified: z.boolean().optional().nullable(),
	uid: z.string().optional().nullable().or(z.literal("")),
	id: z.string().optional().nullable().or(z.literal("")),
	bio: z.string().optional().nullable().or(z.literal("")),
	vision: z.string().optional().nullable().or(z.literal("")),
	mobile: z.string().optional().nullable().or(z.literal("")),
	website: z.string().optional().nullable().or(z.literal("")),
	teamSize: z.string().optional().nullable().or(z.literal("")),
	serviceProvider: z.enum(["yes", "no"]),
	secondaryMobile: z.string().optional().nullable().or(z.literal("")),
	email: z.string().email("Invalid email"),
	city: z.string().optional().nullable().or(z.literal("")),
	state: z.string().optional().nullable().or(z.literal("")),
	country: z.string().optional().nullable().or(z.literal("")),
	pinCode: z.string().optional().nullable().or(z.literal("")),
	username: z.string().optional().nullable().or(z.literal("")),
	industryType: z.string().min(1, "Select industry type"),
	companyName: z.string().min(1, "Company Name is required"),
	secondaryEmail: z
		.string()
		.email("Invalid email")
		.optional()
		.nullable()
		.or(z.literal("")),
	organizationType: z.string().min(1, "Select organization type"),
	password: z.string().optional().nullable().or(z.literal("")),
	socialLinks: z
		.array(z.object({ platform: z.string(), link: z.string() }))
		.optional()
		.nullable(),
	logo: z
		.instanceof(File, { message: "Logo is required" })
		.or(z.string())
		.optional()
		.nullable()
		.or(z.literal("")),
	banner: z
		.instanceof(File, { message: "Banner is required" })
		.or(z.string())
		.optional()
		.nullable()
		.or(z.literal("")),
	establishmentDate: z
		.union([z.string().transform((val) => new Date(val)), z.date()])
		.optional()
		.nullable(),
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

interface CreateCompanyFormProps {
	cancelForm: () => void;
	companyDetails?: any;
	planDetails: Array<any>;
	handleFormSubmit: (company: any, fetchAgain: boolean) => Promise<void>;
}

export default function CreateCompanyForm({
	cancelForm,
	planDetails,
	companyDetails,
	handleFormSubmit,
}: CreateCompanyFormProps) {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: companyDetails || {
			uid: "",
			id: "",
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
			active: false,
			verified: false,
			socialLinks: [],
			companyName: "",
			industryType: "",
			secondaryEmail: "",
			secondaryMobile: "",
			organizationType: "",
			createdAt: undefined,
			updatedAt: undefined,
			serviceProvider: "yes",
			establishmentDate: undefined,
		},
	});

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

	const customFormSubmit = async (company: any) => {
		await handleFormSubmit(company, true);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(customFormSubmit)}
				className=" space-y-10 w-full mx-auto p-6 border rounded-lg shadow-md bg-white"
			>
				{/* quick create section */}
				<div className="space-y-6">
					<div className="flex items-center gap-4">
						<Button
							type="button"
							onClick={cancelForm}
							className="flex items-center gap-2 cursor-pointer"
						>
							<span>&larr;</span> Back
						</Button>
						<h2 className="text-xl font-semibold border-b-2 pb-2 border-red-300 w-full">
							Quick {companyDetails?.uid ? "Update" : "Create"} Company
						</h2>
					</div>

					<Section title="Account Details">
						<div className="grid grid-cols-2 gap-4">
							<CustomInput
								form={form}
								name="companyName"
								label="Company Name"
								placeholder="Enter company name"
								required={true}
							/>

							<CustomRadio
								name="serviceProvider"
								label="Service Provider"
								options={SERVICE_PROVIDERS}
								form={form}
								required={true}
							/>

							<CustomInput
								form={form}
								name="email"
								label="Email"
								required={true}
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
								required={true}
								options={ORGANIZATION_TYPES.slice(1)}
							/>

							<CustomSelect
								form={form}
								name="industryType"
								label="Industry Type"
								required={true}
								options={INDUSTRY_TYPES.slice(1)}
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
						Quick {companyDetails?.uid ? "Update" : "Create"}
					</Button>
				</div>

				{/* detailed create section */}
				<div className="space-y-5">
					<h2 className="text-xl font-semibold border-b-2 pb-2 border-red-300">
						{companyDetails?.uid ? "Update" : "Create"} Company
					</h2>

					<div className="w-full flex justify-between items-start gap-5">
						{/* left half */}
						<div className="w-1/2">
							<Section title="Account Details">
								<div className="grid grid-cols-2 gap-4">
									<CustomInput
										form={form}
										name="companyName"
										label="Company Name"
										placeholder="Enter company name"
										required={true}
									/>

									<CustomInput
										form={form}
										name="username"
										label="Username"
										placeholder="Enter username"
									/>

									<CustomInput
										form={form}
										name="email"
										label="Email"
										type="email"
										required={true}
										placeholder="Enter email address"
									/>

									<CustomInput
										form={form}
										name="password"
										label="Password"
										type="password"
										placeholder="Enter password"
									/>
								</div>
							</Section>

							<Section title="Company Location">
								{/* <ExpandedLocationDetails form={form} /> */}

								<div className="grid grid-cols-2 gap-4">
									<CustomInput
										form={form}
										name="city"
										label="City"
										placeholder="Enter city"
									/>
									<CustomInput
										form={form}
										name="state"
										label="State"
										placeholder="Enter state"
									/>
									<CustomSelect
										form={form}
										name="country"
										label="Country"
										options={COUNTRIES}
									/>
									<CustomInput
										form={form}
										name="pinCode"
										label="Pincode"
										placeholder="Enter pincode"
									/>
								</div>
							</Section>

							<Section title="Service Provider">
								<CustomRadio
									name="serviceProvider"
									label="Service Provider"
									options={SERVICE_PROVIDERS}
									form={form}
									required={true}
								/>
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
								<CustomSelect
									form={form}
									name="plan"
									label="Plan"
									options={planDetails.map((plan) => ({
										label: plan.title,
										value: plan.uid,
									}))}
								/>
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
									required={true}
									name="organizationType"
									options={ORGANIZATION_TYPES.slice(1)}
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
									required={true}
									options={INDUSTRY_TYPES.slice(1)}
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
						{companyDetails?.uid ? "Update" : "Create"}
					</Button>
				</div>
			</form>
		</Form>
	);
}
