import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Pencil, Trash2, MapPin } from "lucide-react";
import { TableRow, TableCell } from "@/components/ui/table";

const CompanyRow = ({
	company,
	handleOpenForm,
	handleCompanyDelete,
	handleCompanyDetailsChange,
}: {
	company: any;
	handleCompanyDetailsChange: any;
	handleCompanyDelete: any;
	handleOpenForm: any;
}) => {
	return (
		<TableRow>
			{/* Company Column */}
			<TableCell>
				<div className="flex items-center gap-4">
					{/* Placeholder for Logo */}
					<div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
						<span className="text-gray-500 text-xs">LOGO</span>
					</div>

					{/* Company Details */}
					<div>
						<h3 className="font-semibold">{company.name}</h3>
						<div className="flex items-center text-sm text-gray-500">
							<MapPin className="w-4 h-4 mr-1" />
							{company.location}
						</div>
					</div>
				</div>
			</TableCell>

			{/* Contact Column */}
			<TableCell>
				<p>{company.email}</p>
				<p className="font-bold">{company.phone}</p>
			</TableCell>

			{/* Account Status Column */}
			<TableCell>
				<div className="flex items-center gap-2">
					<Switch
						checked={company.active}
						onCheckedChange={(checked) =>
							handleCompanyDetailsChange(company.uid, "active", checked)
						}
					/>
					<span
						className={`text-sm font-medium ${
							company.active ? "text-green-600" : "text-gray-500"
						}`}
					>
						{company.active ? "Active" : "Inactive"}
					</span>
				</div>
			</TableCell>

			{/* Email Verification Column */}
			<TableCell>
				<div className="flex items-center gap-2">
					<Switch
						checked={company.verified}
						onCheckedChange={(checked) =>
							handleCompanyDetailsChange(company.uid, "verified", checked)
						}
					/>
					<span
						className={`text-sm font-medium ${
							company.verified ? "text-blue-600" : "text-gray-500"
						}`}
					>
						{company.verified ? "Verified" : "Not Verified"}
					</span>
				</div>
			</TableCell>

			{/* Action Buttons Column */}
			<TableCell>
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						className="cursor-pointer"
						onClick={() => handleOpenForm(company)}
					>
						View
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="cursor-pointer"
						onClick={() => handleOpenForm(company)}
					>
						<Pencil className="w-5 h-5 text-gray-500" />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="cursor-pointer"
						onClick={() => handleCompanyDelete(company.uid)}
					>
						<Trash2 className="w-5 h-5 text-gray-500" />
					</Button>
				</div>
			</TableCell>
		</TableRow>
	);
};

export default CompanyRow;
