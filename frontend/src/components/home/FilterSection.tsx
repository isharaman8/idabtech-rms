import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectItem,
	SelectValue,
	SelectTrigger,
	SelectContent,
} from "@/components/ui/select";

const FilterSection = () => {
	return (
		<div className="grid grid-cols-5 gap-4 mb-4 bg-gray-200 p-5 rounded-md">
			<div>
				<Label htmlFor="search" className="mb-2 block">
					Search
				</Label>
				<Input id="search" className="bg-white" placeholder="Search" />
			</div>
			<div>
				<Label htmlFor="organization-type" className="mb-2 block">
					Organization Type
				</Label>
				<Select>
					<SelectTrigger id="organization-type" className="w-full bg-white">
						<SelectValue placeholder="All" />
					</SelectTrigger>
					<SelectContent className="bg-white">
						<SelectItem value="all">All</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div>
				<Label htmlFor="industry-type" className="mb-2 block">
					Industry Type
				</Label>
				<Select>
					<SelectTrigger id="industry-type" className="w-full bg-white">
						<SelectValue placeholder="All" />
					</SelectTrigger>
					<SelectContent className="bg-white">
						<SelectItem value="all">All</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div>
				<Label htmlFor="email-verification" className="mb-2 block">
					Email Verification
				</Label>
				<Select>
					<SelectTrigger id="email-verification" className="w-full bg-white">
						<SelectValue placeholder="All" />
					</SelectTrigger>
					<SelectContent className="bg-white">
						<SelectItem value="all">All</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div>
				<Label htmlFor="sort-by" className="mb-2 block">
					Sort By
				</Label>
				<Select>
					<SelectTrigger id="sort-by" className="w-full bg-white">
						<SelectValue placeholder="Latest" />
					</SelectTrigger>
					<SelectContent className="bg-white">
						<SelectItem value="latest">Latest</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default FilterSection;
