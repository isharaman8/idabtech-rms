// Third-party imports
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Inner imports
import CompanyRow from "./CompanyRow";
import FilterSection from "./FilterSection";
import CompanyForm from "./CompanyForm/CompanyForm";
import {
	Table,
	TableRow,
	TableBody,
	TableHead,
	TableHeader,
} from "../ui/table";

const CompanyList = () => {
	const [companies, setCompanies] = useState([
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
				{
					platform: "LinkedIn",
					link: "https://linkedin.com/company/solarpower",
				},
			],
			companyName: "Solar Power Inc.",
			industryType: "energy",
			secondaryEmail: "support@solarpower.com",
			organizationType: "Public",
			serviceProvider: "yes",
			establishmentDate: new Date("2010-09-15"),
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
			country: "USA",
			teamSize: "500-1000",
			password: "EcomAI@2024",
			username: "shopeasy_admin",
			socialLinks: [
				{ platform: "Instagram", link: "https://instagram.com/shopeasy" },
				{ platform: "Twitter", link: "https://twitter.com/shopeasy" },
			],
			companyName: "ShopEasy AI",
			industryType: "E-commerce",
			secondaryEmail: "support@shopeasy.com",
			organizationType: "Private",
			serviceProvider: "no",
			establishmentDate: new Date("2018-03-12"),
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
			country: "UK",
			teamSize: "100-200",
			password: "SecureNet@2024",
			username: "cyber_admin",
			socialLinks: [
				{
					platform: "LinkedIn",
					link: "https://linkedin.com/company/cybersecuk",
				},
				{ platform: "Twitter", link: "https://twitter.com/cybersecuk" },
			],
			companyName: "CyberSec UK",
			industryType: "Cybersecurity",
			secondaryEmail: "info@cybersecuk.com",
			organizationType: "Limited",
			serviceProvider: "yes",
			establishmentDate: new Date("2012-07-05"),
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
			country: "Germany",
			teamSize: "1000+",
			password: "SpaceTech@2024",
			username: "stellar_admin",
			socialLinks: [
				{ platform: "Facebook", link: "https://facebook.com/stellarx" },
				{ platform: "Instagram", link: "https://instagram.com/stellarx" },
			],
			companyName: "StellarX Aerospace",
			industryType: "Aerospace",
			secondaryEmail: "support@stellarx.de",
			organizationType: "Corporation",
			serviceProvider: "no",
			establishmentDate: new Date("2005-11-21"),
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
			country: "India",
			teamSize: "300-500",
			password: "MediAI@2024",
			username: "medai_admin",
			socialLinks: [
				{ platform: "LinkedIn", link: "https://linkedin.com/company/medai" },
				{ platform: "Twitter", link: "https://twitter.com/medai" },
			],
			companyName: "MedAI Technologies",
			industryType: "Healthcare",
			secondaryEmail: "help@medai.in",
			organizationType: "Startup",
			serviceProvider: "yes",
			establishmentDate: new Date("2017-08-30"),
		},
	]);
	const [openCompanyForm, setOpenCompanyForm] = useState(false);
	const [editingCompany, setEditingCompany] = useState(null);

	const handleBoolValueChanges = (
		uid: string,
		keyChange: string,
		newValue: boolean
	) => {
		setCompanies((prevCompanies) =>
			prevCompanies.map((company) =>
				company.uid === uid ? { ...company, [keyChange]: newValue } : company
			)
		);
	};

	const handleCompanyDetailsChange = (
		uid: string,
		keyChange: string,
		newValue: any
	) => {
		switch (keyChange) {
			case "verified":
			case "active":
				handleBoolValueChanges(uid, keyChange, newValue);
				break;
			default:
				console.log("No handler created for:", keyChange);
		}
	};

	const handleCompanyFormOpen = (bool: boolean) => {
		setOpenCompanyForm(bool);
	};

	const handleCompanyDelete = (companyId: any) => {
		setCompanies((prevCompanies) =>
			prevCompanies.filter((company) => company.uid !== companyId)
		);
	};

	const handleCancelForm = () => {
		setEditingCompany(null);

		handleCompanyFormOpen(false);
	};

	const handleCloseForm = () => {
		setEditingCompany(null);

		handleCompanyFormOpen(false);
	};

	const handleEditCompany = (company: any = null) => {
		setEditingCompany(company);

		handleCompanyFormOpen(true);
	};

	const handleFormSubmit = (company: any) => {
		console.log(company);

		handleCloseForm();
	};

	return (
		<>
			{!openCompanyForm ? (
				<div className="bg-white p-6 rounded-xl shadow-md">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-bold">Company List</h2>
						<Button
							className="bg-blue-600 text-white cursor-pointer"
							onClick={() => handleEditCompany()}
						>
							+ Create Company
						</Button>
					</div>

					<FilterSection />

					{/* Company List */}
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Company</TableHead>
								<TableHead>Actions</TableHead>
								<TableHead>Contact</TableHead>
								<TableHead>Account Status</TableHead>
								<TableHead>Email Verification</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{companies.map((company) => (
								<CompanyRow
									key={company.uid}
									company={company}
									handleOpenForm={handleEditCompany}
									handleCompanyDelete={handleCompanyDelete}
									handleCompanyDetailsChange={handleCompanyDetailsChange}
								/>
							))}
						</TableBody>
					</Table>
				</div>
			) : (
				<CompanyForm
					cancelForm={handleCancelForm}
					companyDetails={editingCompany}
					handleFormSubmit={handleFormSubmit}
				/>
			)}
		</>
	);
};

export default CompanyList;
