import { useState } from "react";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectItem,
	SelectValue,
	SelectTrigger,
	SelectContent,
} from "@/components/ui/select";
import { Plus, Trash } from "lucide-react";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";

interface SocialDetailsProps {
	form: UseFormReturn<any>;
	platforms: { value: string; label: string }[];
}

const SocialDetails = ({ form, platforms }: SocialDetailsProps) => {
	const { control } = form;
	const { fields, append, remove }: any = useFieldArray({
		control,
		name: "socialLinks",
	});

	const [selectedPlatform, setSelectedPlatform] = useState("");
	const [link, setLink] = useState("");

	const addSocialLink = () => {
		if (selectedPlatform && link) {
			append({ platform: selectedPlatform, link });
			setSelectedPlatform("");
			setLink("");
		}
	};

	return (
		<FormField
			control={control}
			name="socialLinks"
			render={() => (
				<FormItem>
					<FormLabel>Social Links</FormLabel>
					<div className="flex gap-2">
						<Select
							value={selectedPlatform}
							onValueChange={setSelectedPlatform}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Select platform" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								{platforms.map((platform) => (
									<SelectItem key={platform.value} value={platform.value}>
										{platform.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<Input
							placeholder="Paste link here"
							value={link}
							onChange={(e) => setLink(e.target.value)}
						/>
						<Button variant="outline" type="button" onClick={addSocialLink}>
							<Plus size={18} />
						</Button>
					</div>
					<FormMessage />

					{/* Display added links */}
					<div className="mt-2 space-y-2">
						{fields.map((item: any, index: any) => (
							<div
								key={item.id}
								className="flex items-center justify-between p-2 border rounded-md"
							>
								<span className="font-medium">{item.platform}</span>
								<a
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 underline"
								>
									{item.link}
								</a>
								<Button
									variant="destructive"
									size="sm"
									type="button"
									onClick={() => remove(index)}
								>
									<Trash size={14} />
								</Button>
							</div>
						))}
					</div>
				</FormItem>
			)}
		/>
	);
};

export default SocialDetails;
