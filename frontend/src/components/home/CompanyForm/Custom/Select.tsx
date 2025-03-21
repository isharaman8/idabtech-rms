import React from "react";
import {
	FormItem,
	FormField,
	FormLabel,
	FormMessage,
	FormControl,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface CustomSelectProps {
	form: any;
	name: string;
	options: { value: string; label: string }[];
	label: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
	form,
	name,
	options,
	label,
}) => {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>{label}</FormLabel>
					<Select onValueChange={field.onChange} value={field.value || ""}>
						<FormControl>
							<SelectTrigger className="w-full">
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
};

export default CustomSelect;
