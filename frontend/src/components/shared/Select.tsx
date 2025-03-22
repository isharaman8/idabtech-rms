import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
	FormItem,
	FormLabel,
	FormMessage,
	FormControl,
	FormField,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface CustomSelectProps {
	name: string;
	label: string;
	options: { value: string; label: string }[];
	value?: string;
	onChange?: (value: string) => void;
	form?: any;
	className?: string;
	required?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
	name,
	label,
	options,
	value,
	onChange,
	form,
	className,
	required = false,
}) => {
	if (form) {
		return (
			<FormField
				control={form.control}
				name={name}
				render={({ field }) => (
					<FormItem className="w-full">
						<FormLabel>
							{label} {required && <span className="text-red-500">*</span>}
						</FormLabel>
						<Select onValueChange={field.onChange} value={field.value || ""}>
							<FormControl>
								<SelectTrigger className={cn("w-full", className)}>
									<SelectValue placeholder="Select one">
										{field.value
											? options.find((option) => option.value === field.value)
													?.label
											: "Select one"}
									</SelectValue>
								</SelectTrigger>
							</FormControl>
							<SelectContent className="w-full">
								{options.map((option) => (
									<SelectItem key={option.value} value={option.value}>
										{option.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}

	return (
		<div className="w-full space-y-2">
			<Label htmlFor={name}>
				{label} {required && <span className="text-red-500">*</span>}
			</Label>
			<Select onValueChange={onChange} value={value}>
				<SelectTrigger id={name} className={cn("w-full", className)}>
					<SelectValue placeholder="Select one">
						{value
							? options.find((option) => option.value === value)?.label
							: "Select one"}
					</SelectValue>
				</SelectTrigger>
				<SelectContent className="w-full">
					{options.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default CustomSelect;
