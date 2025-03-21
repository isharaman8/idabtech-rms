import {
	Home,
	Briefcase,
	Settings,
	Building,
	ChevronDown,
	ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Ensure you have a class merging utility

const SidebarItem = ({
	icon: Icon,
	label,
	active,
	onClick,
	expandable,
	subItem,
}: {
	icon?: any;
	label: string;
	active?: boolean;
	onClick?: () => void;
	expandable?: boolean;
	subItem?: boolean;
}) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				"flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all",
				subItem ? "pl-6 text-gray-700 hover:bg-gray-100" : "",
				active ? "text-blue-700 font-semibold" : "hover:bg-gray-100"
			)}
		>
			{Icon && <Icon className="w-5 h-5" />}
			<span>{label}</span>
			{expandable &&
				(active ? (
					<ChevronDown className="w-4 h-4 ml-auto" />
				) : (
					<ChevronRight className="w-4 h-4 ml-auto" />
				))}
		</div>
	);
};

const Sidebar = () => {
	const [activeItem, setActiveItem] = useState("Company");
	const [openDropdowns, setOpenDropdowns]: any = useState({
		"idab-profiles": true,
		jobs: false,
		attributes: false,
		settings: false,
	});

	const toggleDropdown = (key: string) => {
		setOpenDropdowns((prev: any) => ({ ...prev, [key]: !prev[key] }));
	};

	const dropdowns = [
		{
			label: "Idab Profiles",
			key: "idab-profiles",
			icon: Building,
			subItems: ["Company", "Candidate", "Orders", "Requests", "User Role"],
		},
		{
			label: "Jobs",
			key: "jobs",
			icon: Briefcase,
			subItems: ["Job List", "Categories"],
		},
		{
			label: "Attributes",
			key: "attributes",
			icon: Briefcase,
			subItems: ["Skills", "Departments"],
		},
		{
			label: "Settings",
			key: "settings",
			icon: Settings,
			subItems: ["General", "Permissions"],
		},
	];

	return (
		<div className="w-64 bg-white shadow-lg h-screen p-4 flex flex-col">
			{/* Dashboard Header */}
			<h2 className="text-lg font-bold mb-4 flex items-center gap-2">
				<Home className="w-5 h-5" /> Dashboard
			</h2>

			{/* Dropdown Sections */}
			<div className="mt-4">
				{dropdowns.map((section) => (
					<div key={section.key}>
						<SidebarItem
							icon={section.icon}
							label={section.label}
							active={openDropdowns[section.key]}
							onClick={() => toggleDropdown(section.key)}
							expandable
						/>
						{openDropdowns[section.key] && (
							<div className="ml-6 space-y-1">
								{section.subItems.map((sub) => (
									<SidebarItem
										key={sub}
										label={sub}
										onClick={() => setActiveItem(sub)}
										active={activeItem === sub}
										subItem
									/>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
