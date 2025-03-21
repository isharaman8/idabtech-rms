import {
	Home,
	Users,
	Package,
	Shield,
	Briefcase,
	Settings,
} from "lucide-react";

const Sidebar = () => {
	return (
		<div className="w-64 bg-white shadow-lg h-screen p-4 flex flex-col">
			<h2 className="text-lg font-bold mb-4">Dashboard</h2>
			<nav className="space-y-2">
				<SidebarItem icon={Home} label="Company" active />
				<SidebarItem icon={Users} label="Candidate" />
				<SidebarItem icon={Package} label="Orders" />
				<SidebarItem icon={Shield} label="Request" />
				<SidebarItem icon={Briefcase} label="Jobs" />
				<SidebarItem icon={Settings} label="Settings" />
			</nav>
		</div>
	);
};

const SidebarItem = ({
	icon: Icon,
	label,
	active,
}: {
	icon: any;
	label: string;
	active?: boolean;
}) => {
	return (
		<div
			className={`flex items-center gap-3 p-3 rounded-md cursor-pointer 
      ${
				active ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-gray-200"
			}`}
		>
			<Icon className="w-5 h-5" />
			<span>{label}</span>
		</div>
	);
};

export default Sidebar;
