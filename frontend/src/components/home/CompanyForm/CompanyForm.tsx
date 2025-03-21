import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import SocialDetails from "./SocialDetails";
import ExpandedBasicDetails from "./ExpandedSection/BasicDetails";
import ExpandedLocationDetails from "./ExpandedSection/LocationDetails";
import QuickCreateAccountDetails from "./QuickCreateSection/QuickCreateAccountDetails";

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
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			bio: "",
			city: "",
			email: "",
			state: "",
			mobile: "",
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

					<h3 className="w-full p-3 bg-gray-200 rounded-md shadow-md border border-gray-300 font-semibold">
						Account Details
					</h3>
					<QuickCreateAccountDetails form={form} />

					{/* Social Details */}
					<h3 className="w-full p-3 bg-gray-200 rounded-md shadow-md border border-gray-300 font-semibold">
						Social Details
					</h3>
					<SocialDetails />

					<Button type="submit" className="w-full">
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
						</div>

						{/* right half */}
					</div>
				</div>
			</form>
		</Form>
	);
}
