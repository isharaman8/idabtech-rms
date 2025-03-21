import {
	FormItem,
	FormField,
	FormLabel,
	FormMessage,
	FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectItem,
	SelectValue,
	SelectTrigger,
	SelectContent,
} from "@/components/ui/select";
import { COUNTRIES } from "@/config/constants";

const AccountDetails = ({ form }: { form: any }) => {
	return (
		<div className="grid grid-cols-2 gap-4">
			<FormField
				control={form.control}
				name="companyName"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Company Name</FormLabel>
						<FormControl>
							<Input {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			{/* Service Provider */}
			<FormField
				control={form.control}
				name="serviceProvider"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Service Provider</FormLabel>
						<FormControl>
							<RadioGroup
								className="flex gap-4"
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="yes" id="yes" />
									<label htmlFor="yes">Yes</label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="no" id="no" />
									<label htmlFor="no">No</label>
								</div>
							</RadioGroup>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Email</FormLabel>
						<FormControl>
							<Input {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="secondaryEmail"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Secondary Email</FormLabel>
						<FormControl>
							<Input {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="mobile"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Mobile</FormLabel>
						<FormControl>
							<Input {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="secondaryMobile"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Secondary Mobile</FormLabel>
						<FormControl>
							<Input {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			{/* Organization Type */}
			<FormField
				control={form.control}
				name="organizationType"
				render={({ field }) => (
					<FormItem className="w-full">
						<FormLabel>Organization Type</FormLabel>
						<Select onValueChange={field.onChange}>
							<FormControl>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select one" />
								</SelectTrigger>
							</FormControl>
							<SelectContent className="w-full">
								<SelectItem value="corporation">Corporation</SelectItem>
								<SelectItem value="startup">Startup</SelectItem>
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>

			{/* Industry Type */}
			<FormField
				control={form.control}
				name="industryType"
				render={({ field }) => (
					<FormItem className="w-full">
						<FormLabel>Industry Type</FormLabel>
						<Select onValueChange={field.onChange}>
							<FormControl>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select one" />
								</SelectTrigger>
							</FormControl>
							<SelectContent className="w-full">
								<SelectItem value="tech">Technology</SelectItem>
								<SelectItem value="finance">Finance</SelectItem>
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="password"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Password</FormLabel>
						<FormControl>
							<Input type="password" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			{/* Country */}
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
									<SelectItem value={country.value}>{country.label}</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="website"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Website</FormLabel>
						<FormControl>
							<Input {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};

export default AccountDetails;
