// Third-party imports
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Inner imports
import CompanyRow from "./CompanyRow";
import {
	Select,
	SelectItem,
	SelectValue,
	SelectTrigger,
	SelectContent,
} from "../ui/select";
import { Input } from "../ui/input";
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
			id: 1,
			name: "Expert Recruitment - UAE",
			location: "Location, Country",
			email: "info@expertrecruitment.com",
			phone: "+1-6789034567",
			verified: true,
			active: true,
		},
		{
			id: 2,
			name: "Tech Solutions - USA",
			location: "New York, USA",
			email: "contact@techsolutions.com",
			phone: "+1-7894561230",
			verified: false,
			active: false,
		},
		{
			id: 3,
			name: "Global Enterprises - UK",
			location: "London, UK",
			email: "info@globalenterprises.com",
			phone: "+44-9876543210",
			verified: true,
			active: true,
		},
		{
			id: 4,
			name: "Innovative Minds - India",
			location: "Bangalore, India",
			email: "support@innovativeminds.in",
			phone: "+91-9876543210",
			verified: false,
			active: false,
		},
		{
			id: 5,
			name: "Future Vision - Canada",
			location: "Toronto, Canada",
			email: "hello@futurevision.ca",
			phone: "+1-6549873210",
			verified: true,
			active: true,
		},
		{
			id: 6,
			name: "Bright Horizons - Australia",
			location: "Sydney, Australia",
			email: "contact@brighthorizons.au",
			phone: "+61-789456123",
			verified: false,
			active: false,
		},
	]);

	const handleBoolValueChanges = (
		id: number,
		keyChange: string,
		newValue: boolean
	) => {
		setCompanies((prevCompanies) =>
			prevCompanies.map((company) =>
				company.id === id ? { ...company, [keyChange]: newValue } : company
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
			case "active":
				handleBoolValueChanges(id, keyChange, newValue);
				break;
			default:
				console.log("No handler created for:", keyChange);
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
				<div>
					<label className="block text-sm font-medium mb-1">Search</label>
					<Input className="bg-white" placeholder="Search" />
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">
						Organization Type
					</label>
					<Select>
						<SelectTrigger className="w-full bg-white">
							<SelectValue placeholder="All" />
						</SelectTrigger>
						<SelectContent className="bg-white">
							<SelectItem value="all">All</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">
						Industry Type
					</label>
					<Select>
						<SelectTrigger className="w-full bg-white">
							<SelectValue placeholder="All" />
						</SelectTrigger>
						<SelectContent className="bg-white">
							<SelectItem value="all">All</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">
						Email Verification
					</label>
					<Select>
						<SelectTrigger className="w-full bg-white">
							<SelectValue placeholder="All" />
						</SelectTrigger>
						<SelectContent className="bg-white">
							<SelectItem value="all">All</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">Sort By</label>
					<Select>
						<SelectTrigger className="w-full bg-white">
							<SelectValue placeholder="Latest" />
						</SelectTrigger>
						<SelectContent className="bg-white">
							<SelectItem value="latest">Latest</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

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
							key={company.id}
							company={company}
							handleCompanyDetailsChange={handleCompanyDetailsChange}
						/>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default CompanyList;
