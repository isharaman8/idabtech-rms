import React from "react";
import { Input } from "@/components/ui/input";
import {
	FormItem,
	FormLabel,
	FormField,
	FormMessage,
	FormControl,
} from "@/components/ui/form";

interface CustomInputProps {
	form: any;
	name: string;
	label: string;
	type?: string;
	placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
	form,
	name,
	label,
	type = "text",
	placeholder = "",
}) => {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input type={type} {...field} placeholder={placeholder} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomInput;
