import {
	Home,
	Settings,
	Building,
	Briefcase,
	ChevronDown,
	ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const SidebarItem = ({
	label,
	active,
	onClick,
	subItem,
	expandable,
	icon: Icon,
	isOpen,
}: {
	icon?: any;
	label: string;
	active?: boolean;
	subItem?: boolean;
	onClick?: () => void;
	expandable?: boolean;
	isOpen?: boolean;
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
				(isOpen ? (
					<ChevronDown className="w-4 h-4 ml-auto" />
				) : (
					<ChevronRight className="w-4 h-4 ml-auto" />
				))}
		</div>
	);
};

const SidebarList = ({
	items,
	activeItem,
	openDropdowns,
	toggleDropdown,
	handleItemClick,
	isSubList = false,
}: {
	items: any[];
	activeItem: string;
	isSubList?: boolean;
	openDropdowns: any;
	toggleDropdown: (key: string) => void;
	handleItemClick: (item: string) => void;
}) => {
	return (
		<div className={cn(isSubList ? "ml-6 space-y-1" : "mt-4")}>
			{items.map((item) => {
				const hasSubItems = Array.isArray(item.subItems);
				const isOpen = openDropdowns[item.key];

				return (
					<div key={item.key}>
						<SidebarItem
							icon={item.icon}
							label={item.label}
							isOpen={isOpen}
							active={!hasSubItems && activeItem === item.label}
							onClick={() =>
								hasSubItems
									? toggleDropdown(item.key)
									: handleItemClick(item.label)
							}
							expandable={hasSubItems}
							subItem={isSubList}
						/>
						{hasSubItems && isOpen && (
							<SidebarList
								items={item.subItems.map((sub: any) =>
									typeof sub === "string" ? { label: sub, key: sub } : sub
								)}
								openDropdowns={openDropdowns}
								toggleDropdown={toggleDropdown}
								handleItemClick={handleItemClick}
								activeItem={activeItem}
								isSubList
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

const Sidebar = ({
	handleRightSide,
}: {
	handleRightSide?: (item: string) => void;
}) => {
	const [activeItem, setActiveItem] = useState("Company");
	const [openDropdowns, setOpenDropdowns]: any = useState({
		jobs: false,
		settings: false,
		attributes: false,
		"price-plan": false,
		"idab-profiles": true,
	});

	const toggleDropdown = (key: string) => {
		setOpenDropdowns((prev: any) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const handleItemClick = (item: string) => {
		setActiveItem(item);

		if (handleRightSide) {
			handleRightSide(item);
		}
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
			subItems: [
				"Job List",
				"Job Category",
				"Job Role",
				{
					label: "Price Plan",
					key: "price-plan",
					subItems: ["Company Plan", "Student Plan"],
				},
			],
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
			<h2 className="text-lg font-bold mb-4 flex items-center gap-2">
				<Home className="w-5 h-5" /> Dashboard
			</h2>

			<SidebarList
				items={dropdowns}
				activeItem={activeItem}
				openDropdowns={openDropdowns}
				toggleDropdown={toggleDropdown}
				handleItemClick={handleItemClick}
			/>
		</div>
	);
};

export default Sidebar;
