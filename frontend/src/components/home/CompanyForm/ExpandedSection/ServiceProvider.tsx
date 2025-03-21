import {
	FormItem,
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectItem,
	SelectValue,
	SelectContent,
	SelectTrigger,
} from "@/components/ui/select";

const ServiceProvider = ({ form }: { form: any }) => {
	return (
		<FormField
			control={form.control}
			name="serviceProvider"
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>Service Provider</FormLabel>
					<Select onValueChange={field.onChange}>
						<FormControl>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select one" />
							</SelectTrigger>
						</FormControl>
						<SelectContent className="w-full">
							<SelectItem value="yes">Yes</SelectItem>
							<SelectItem value="no">No</SelectItem>
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default ServiceProvider;
