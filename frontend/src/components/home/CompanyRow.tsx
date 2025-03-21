import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Pencil, Trash2, MapPin } from "lucide-react";

const CompanyRow = ({
	company,
	handleCompanyDetailsChange,
}: {
	company: any;
	handleCompanyDetailsChange: any;
}) => {
	return (
		<div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border">
			{/* Left Section: Logo + Company Info */}
			<div className="flex items-center gap-4">
				{/* Placeholder for Logo */}
				<div className="w-12 h-12 bg-gray-300 rounded-md flex items-center justify-center">
					<span className="text-gray-500">LOGO</span>
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

			{/* Contact Info */}
			<div className="text-sm">
				<p>{company.email}</p>
				<p className="font-bold">{company.phone}</p>
			</div>

			{/* Status Toggles */}
			<div className="flex items-center gap-3">
				{/* Account Status */}
				<Switch />
				<span className="text-sm text-gray-600">Activate</span>
			</div>

			<div className="flex items-center gap-3">
				{/* Email Verification */}
				<Switch
					checked={company.verified}
					onCheckedChange={(checked) =>
						handleCompanyDetailsChange(company.id, "verified", checked)
					}
				/>
				<span
					className={`text-sm font-medium ${
						company.verified ? "text-blue-600" : "text-gray-500"
					}`}
				>
					{company.verified ? "Verified" : "Verify"}
				</span>
			</div>

			{/* Action Buttons */}
			<div className="flex items-center gap-2">
				<Button variant="outline">View Details</Button>
				<Button variant="ghost" size="icon">
					<Pencil className="w-5 h-5 text-gray-500" />
				</Button>
				<Button variant="ghost" size="icon">
					<Trash2 className="w-5 h-5 text-gray-500" />
				</Button>
			</div>
		</div>
	);
};

export default CompanyRow;
