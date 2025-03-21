import {
	FormItem,
	FormField,
	FormLabel,
	FormMessage,
	FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { COUNTRIES } from "@/config/constants";

const Locationdetails = ({ form }: { form: any }) => {
	return (
		<div className="grid grid-cols-2 gap-4">
			<FormField
				control={form.control}
				name="city"
				render={({ field }) => (
					<FormItem>
						<FormLabel>City</FormLabel>
						<FormControl>
							<Input {...field} placeholder="City" />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="state"
				render={({ field }) => (
					<FormItem>
						<FormLabel>State</FormLabel>
						<FormControl>
							<Input {...field} placeholder="State" />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="country"
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
								{COUNTRIES.map((country) => (
									<SelectItem key={country.value} value={country.value}>
										{country.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="pinCode"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Pincode</FormLabel>
						<FormControl>
							<Input {...field} placeholder="Pincode" />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};

export default Locationdetails;
