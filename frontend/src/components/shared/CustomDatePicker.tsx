import {
	FormItem,
	FormField,
	FormLabel,
	FormMessage,
	FormControl,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

interface CustomDatePickerProps {
	name?: string;
	label: string;
	form?: UseFormReturn<any>;
	value?: Date;
	onChange?: (date: Date | undefined) => void;
	required?: boolean;
}

const CustomDatePicker = ({
	name,
	label,
	form,
	value,
	onChange,
	required = false,
}: CustomDatePickerProps) => {
	if (form && name) {
		return (
			<FormField
				control={form.control}
				name={name}
				render={({ field }) => (
					<FormItem className="flex flex-col">
						<FormLabel>
							{label} {required && <span className="text-red-500">*</span>}
						</FormLabel>
						<Popover>
							<PopoverTrigger asChild>
								<FormControl>
									<Button variant="outline" className="w-full justify-start">
										{field.value ? format(field.value, "PPP") : "Pick a date"}
										<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
									</Button>
								</FormControl>
							</PopoverTrigger>
							<PopoverContent align="start" className="w-auto p-0">
								<Calendar
									mode="single"
									selected={field.value}
									onSelect={field.onChange}
								/>
							</PopoverContent>
						</Popover>
						<FormMessage />
					</FormItem>
				)}
			/>
		);
	}

	// Standalone usage
	return (
		<div className="flex flex-col space-y-2">
			<label className="text-sm font-medium">
				{label} {required && <span className="text-red-500">*</span>}
			</label>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline" className="w-full justify-start">
						{value ? format(value, "PPP") : "Pick a date"}
						<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent align="start" className="w-auto p-0">
					<Calendar mode="single" selected={value} onSelect={onChange} />
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default CustomDatePicker;
