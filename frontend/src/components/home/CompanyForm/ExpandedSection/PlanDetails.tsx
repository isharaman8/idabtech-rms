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

const PlanDetails = ({
	form,
	planDetails,
}: {
	form: any;
	planDetails: Array<any>;
}) => {
	return (
		<FormField
			control={form.control}
			name="plan"
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>Country</FormLabel>
					<Select onValueChange={field.onChange}>
						<FormControl>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select one" />
							</SelectTrigger>
						</FormControl>
						<SelectContent className="w-full">
							{planDetails.map((plan) => (
								<SelectItem key={plan.uid} value={plan.uid}>
									{plan.name}
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

export default PlanDetails;
