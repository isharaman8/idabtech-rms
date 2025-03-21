import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectItem,
	SelectValue,
	SelectTrigger,
	SelectContent,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

const SocialDetails = () => {
	return (
		<div className="flex gap-2">
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Instagram" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="instagram">Instagram</SelectItem>
					<SelectItem value="linkedin">LinkedIn</SelectItem>
				</SelectContent>
			</Select>
			<Input placeholder="Paste link here" />
			<Button variant="outline">
				<Plus size={18} />
			</Button>
		</div>
	);
};

export default SocialDetails;
