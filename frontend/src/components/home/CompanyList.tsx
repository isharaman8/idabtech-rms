// Third-party imports
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Inner imports
import CompanyRow from "./CompanyRow";
import {
	Table,
	TableRow,
	TableBody,
	TableHead,
	TableHeader,
} from "../ui/table";
import FilterSection from "./FilterSection";
import CompanyForm from "./CompanyForm/CompanyForm";

const CompanyList = () => {
	const [companies, setCompanies] = useState([
		{
			uid: 1,
			name: "Expert Recruitment - UAE",
			location: "Location, Country",
			email: "info@expertrecruitment.com",
			phone: "+1-6789034567",
			verified: true,
			active: true,
		},
		{
			uid: 2,
			name: "Tech Solutions - USA",
			location: "New York, USA",
			email: "contact@techsolutions.com",
			phone: "+1-7894561230",
			verified: false,
			active: false,
		},
		{
			uid: 3,
			name: "Global Enterprises - UK",
			location: "London, UK",
			email: "info@globalenterprises.com",
			phone: "+44-9876543210",
			verified: true,
			active: true,
		},
		{
			uid: 4,
			name: "Innovative Minds - India",
			location: "Bangalore, India",
			email: "support@innovativeminds.in",
			phone: "+91-9876543210",
			verified: false,
			active: false,
		},
		{
			uid: 5,
			name: "Future Vision - Canada",
			location: "Toronto, Canada",
			email: "hello@futurevision.ca",
			phone: "+1-6549873210",
			verified: true,
			active: true,
		},
		{
			uid: 6,
			name: "Bright Horizons - Australia",
			location: "Sydney, Australia",
			email: "contact@brighthorizons.au",
			phone: "+61-789456123",
			verified: false,
			active: false,
		},
	]);
	const [openCompanyForm, setOpenCompanyForm] = useState(false);

	const handleBoolValueChanges = (
		uid: number,
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
		uid: number,
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

	return (
		<>
			{!openCompanyForm ? (
				<div className="bg-white p-6 rounded-xl shadow-md">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-bold">Company List</h2>
						<Button className="bg-blue-600 text-white">+ Create Company</Button>
					</div>

					<FilterSection />

					{/* Company List */}
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Company</TableHead>
								<TableHead>Contact</TableHead>
								<TableHead>Account Status</TableHead>
								<TableHead>Email Verification</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{companies.map((company) => (
								<CompanyRow
									key={company.uid}
									company={company}
									handleCompanyDelete={handleCompanyDelete}
									handleCompanyDetailsChange={handleCompanyDetailsChange}
									handleOpenForm={handleCompanyFormOpen}
								/>
							))}
						</TableBody>
					</Table>
				</div>
			) : (
				<CompanyForm />
			)}
		</>
	);
};

export default CompanyList;
