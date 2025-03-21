// Third-party imports
import { useState, useEffect } from "react";
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
import {
	createCompany,
	deleteCompany,
	fetchCompanies,
	updateCompany,
} from "@/services/companyService";
import { Company } from "@/types";

const CompanyList: React.FC = () => {
	// States
	const [companies, setCompanies] = useState<Company[]>([]);
	const [openCompanyForm, setOpenCompanyForm] = useState<boolean>(false);
	const [editingCompany, setEditingCompany] = useState<Company | null>(null);

	// Fetch companies on mount
	useEffect(() => {
		localFetchCompanies();
	}, []);

	// Fetch Companies
	const localFetchCompanies = async () => {
		try {
			const data = await fetchCompanies();
			setCompanies(data);
		} catch (error) {
			console.error("Error fetching companies:", error);
		}
	};

	const handleBoolValueChanges = (
		uid: string,
		keyChange: keyof Company,
		newValue: boolean
	) => {
		setCompanies((prevCompanies) =>
			prevCompanies.map((company) =>
				company.uid === uid ? { ...company, [keyChange]: newValue } : company
			)
		);
	};

	const handleCompanyDetailsChange = async (
		uid: string,
		keyChange: keyof Company,
		newValue: any
	) => {
		const updatedCompany = companies.find((company) => company.uid === uid);
		if (!updatedCompany) return;

		switch (keyChange) {
			case "verified":
			case "active":
				handleBoolValueChanges(uid, keyChange, newValue);
				break;
			default:
				console.log("No handler created for:", keyChange);
				return;
		}

		try {
			await handleFormSubmit(
				{ ...updatedCompany, [keyChange]: newValue },
				false
			);
		} catch (error) {
			console.error(`Error updating ${keyChange}:`, error);
		}
	};

	const handleCompanyDelete = async (companyId: string) => {
		try {
			await deleteCompany(companyId);
			setCompanies((prevCompanies) =>
				prevCompanies.filter((company) => company.uid !== companyId)
			);
		} catch (error) {
			console.error("Error deleting company:", error);
		}
	};

	const handleCancelForm = () => {
		setEditingCompany(null);
		setOpenCompanyForm(false);
	};

	const handleEditCompany = (company: Company | null = null) => {
		setEditingCompany(company);
		setOpenCompanyForm(true);
	};

	const handleFormSubmit = async (company: Company, fetchAgain = false) => {
		try {
			if (company.uid) {
				await updateCompany(company.uid, company);
			} else {
				await createCompany(company);
			}

			if (fetchAgain) {
				console.log("Company saved successfully:", company);
				await localFetchCompanies();
			}

			handleCancelForm();
		} catch (error) {
			console.error("Error saving company:", error);
		}
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
