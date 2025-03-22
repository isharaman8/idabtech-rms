import React from "react";
import { Input } from "@/components/ui/input";
import {
	FormItem,
	FormLabel,
	FormField,
	FormMessage,
	FormControl,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";

interface CustomInputProps {
	form?: any;
	name: string;
	label: string;
	type?: string;
	value?: string;
	className?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
	form,
	name,
	label,
	type = "text",
	placeholder = "",
	value = "",
	onChange,
	className,
}) => {
	const safeValue = value ?? "";

	if (form) {
		return (
			<FormField
				control={form.control}
				name={name}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input
								type={type}
								{...field}
								value={field.value ?? ""}
								placeholder={placeholder}
								className={className}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}

	return (
		<div className="space-y-2">
			<Label htmlFor={name}>{label}</Label>
			<Input
				id={`${name}-${window.crypto.randomUUID()}`}
				type={type}
				value={safeValue}
				onChange={(e) => onChange?.(e.target.value)}
				placeholder={placeholder}
				className={className}
			/>
		</div>
	);
};

export default CustomInput;
