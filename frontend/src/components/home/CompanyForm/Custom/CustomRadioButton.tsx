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
	form: any;
}

export function CustomRadio({ name, label, options, form }: CustomRadioProps) {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className="space-y-3">
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<RadioGroup
							onValueChange={field.onChange}
							defaultValue={field.value}
							className="flex gap-4"
						>
							{options.map((option) => (
								<div key={option.value} className="flex items-center space-x-2">
									<RadioGroupItem value={option.value} id={option.value} />
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
