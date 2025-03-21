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
import { COMPANY_LIST } from "@/config/constants";

const CompanyList = () => {
	const [companies, setCompanies] = useState(COMPANY_LIST);
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
