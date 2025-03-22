import { Button } from "@/components/ui/button";
import { Bell, Cog, LogOut, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	Select,
	SelectItem,
	SelectValue,
	SelectTrigger,
	SelectContent,
} from "@/components/ui/select";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between bg-white dark:bg-gray-900 px-6 py-3 shadow">
			{/* Logo & Section */}
			<div className="flex items-center gap-4">
				<div className="border rounded-lg p-2">
					<span className="text-gray-600 text-xl font-light">idab.</span>
				</div>
				<Button variant="secondary" className="bg-blue-700 text-white">
					<Briefcase className="w-4 h-4 mr-2" /> RMS - Profiles
				</Button>
			</div>

			{/* Actions */}
			<div className="flex items-center gap-4">
				{/* Language Selector */}
				<Select defaultValue="eng">
					<SelectTrigger className="w-24">
						<SelectValue placeholder="Language" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="eng">English</SelectItem>
						<SelectItem value="esp">Español</SelectItem>
					</SelectContent>
				</Select>

				{/* Icons */}
				<Button variant="ghost">
					<Bell className="w-5 h-5" />
				</Button>
				<Button variant="ghost">
					<Cog className="w-5 h-5" />
				</Button>
				<Button variant="ghost">
					<LogOut className="w-5 h-5" />
				</Button>

				{/* User Avatar */}
				<Avatar className="shadow-md cursor-pointer size-10">
					<AvatarFallback className="bg-gray-200">ID</AvatarFallback>
				</Avatar>
			</div>
		</nav>
	);
}
