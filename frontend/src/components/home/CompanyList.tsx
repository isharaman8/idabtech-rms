// third party imports
import { useState } from "react";
import { Button } from "@/components/ui/button";

// inner imports
import CompanyRow from "./CompanyRow";

const CompanyList = () => {
	const [companies, setCompanies] = useState([
		{
			id: 1,
			name: "Expert Recruitment - UAE",
			location: "Location, Country",
			email: "info@expertrecruitment.com",
			verified: true,
		},
		{
			id: 2,
			name: "Tech Solutions - USA",
			location: "New York, USA",
			email: "contact@techsolutions.com",
			verified: false,
		},
		{
			id: 3,
			name: "Global Enterprises - UK",
			location: "London, UK",
			email: "info@globalenterprises.com",
			verified: true,
		},
		{
			id: 4,
			name: "Innovative Minds - India",
			location: "Bangalore, India",
			email: "support@innovativeminds.in",
			verified: false,
		},
		{
			id: 5,
			name: "Future Vision - Canada",
			location: "Toronto, Canada",
			email: "hello@futurevision.ca",
			verified: true,
		},
		{
			id: 6,
			name: "Bright Horizons - Australia",
			location: "Sydney, Australia",
			email: "contact@brighthorizons.au",
			verified: false,
		},
	]);

	const handleVerificationChange = (id: number, verified: boolean) => {
		setCompanies((prevCompanies) =>
			prevCompanies.map((company) =>
				company.id === id ? { ...company, verified } : company
			)
		);
	};

	const handleCompanyDetailsChange = (
		id: number,
		keyChange: string,
		newValue: any
	) => {
		switch (keyChange) {
			case "verified":
				handleVerificationChange(id, newValue);
				break;
			default:
				console.log("no handler created");
		}
	};

	return (
		<div className="bg-white p-6 rounded-xl shadow-md">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-bold">Company List</h2>
				<Button className="bg-blue-600 text-white">+ Create Company</Button>
			</div>

			{/* Filters Section */}
			<div className="grid grid-cols-5 gap-4 mb-4 bg-gray-200 p-5 rounded-md">
				<input
					type="text"
					placeholder="Search"
					className="p-2 border rounded-md bg-white"
				/>
				<select className="p-2 border rounded-md bg-white">
					<option>All</option>
				</select>
				<select className="p-2 border rounded-md bg-white">
					<option>All</option>
				</select>
				<select className="p-2 border rounded-md bg-white">
					<option>All</option>
				</select>
				<select className="p-2 border rounded-md bg-white">
					<option>Latest</option>
				</select>
			</div>

			{/* Company List */}
			<div className="space-y-4">
				{companies.map((company) => (
					<CompanyRow
						company={company}
						handleCompanyDetailsChange={handleCompanyDetailsChange}
					/>
				))}
			</div>
		</div>
	);
};

export default CompanyList;
