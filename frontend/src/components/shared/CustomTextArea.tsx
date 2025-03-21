import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

interface CustomTextareaProps {
	name: string;
	label: string;
	placeholder?: string;
	form?: UseFormReturn<any>; // Optional for form usage
	value?: string;
	onChange?: (value: string) => void;
}

const CustomTextarea = ({
	name,
	label,
	placeholder,
	form,
	value,
	onChange,
}: CustomTextareaProps) => {
	if (form) {
		// Using as a form field with react-hook-form
		return (
			<FormField
				control={form.control}
				name={name}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Textarea placeholder={placeholder} {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}

	// Using as a standalone input
	return (
		<div className="space-y-2">
			<label className="text-sm font-medium">{label}</label>
			<Textarea
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
			/>
		</div>
	);
};

export default CustomTextarea;
