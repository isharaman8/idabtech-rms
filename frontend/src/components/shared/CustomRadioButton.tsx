import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CustomRadioProps {
	name: string;
	label: string;
	options: { label: string; value: string }[];
	form?: any;
	value?: string;
	onChange?: (value: string) => void;
	required?: boolean;
}

export function CustomRadio({
	name,
	label,
	options,
	form,
	value,
	onChange,
	required = false,
}: CustomRadioProps) {
	if (form) {
		// When used inside react-hook-form
		return (
			<FormField
				control={form.control}
				name={name}
				render={({ field }) => (
					<FormItem className="space-y-3">
						<FormLabel>
							{label} {required && <span className="text-red-500">*</span>}
						</FormLabel>
						<FormControl>
							<RadioGroup
								onValueChange={field.onChange}
								defaultValue={field.value}
								className="flex gap-4"
							>
								{options.map((option) => (
									<div
										key={option.value}
										className="flex items-center space-x-2"
									>
										<RadioGroupItem
											value={option.value}
											id={`${option.value}-${window.crypto.randomUUID()}`}
										/>
										<Label htmlFor={option.value}>{option.label}</Label>
									</div>
								))}
							</RadioGroup>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}

	// Standalone usage (without form)
	return (
		<div className="space-y-3">
			<Label>
				{label} {required && <span className="text-red-500">*</span>}
			</Label>
			<RadioGroup onValueChange={onChange} value={value} className="flex gap-4">
				{options.map((option) => (
					<div key={option.value} className="flex items-center space-x-2">
						<RadioGroupItem
							value={option.value}
							id={`${option.value}-${window.crypto.randomUUID()}`}
						/>
						<Label htmlFor={option.value}>{option.label}</Label>
					</div>
				))}
			</RadioGroup>
		</div>
	);
}
