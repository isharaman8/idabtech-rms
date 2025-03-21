import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

interface CustomTextareaProps {
	name: string;
	label: string;
	placeholder?: string;
	form: UseFormReturn<any>;
}

const CustomTextarea = ({
	name,
	label,
	placeholder,
	form,
}: CustomTextareaProps) => {
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
};

export default CustomTextarea;
