import {
	FormItem,
	FormField,
	FormLabel,
	FormMessage,
	FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
							<Input {...field} placeholder="Company Name" />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="username"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Username</FormLabel>
						<FormControl>
							<Input {...field} placeholder="Username" />
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
							<Input {...field} placeholder="Email" type="email" />
						</FormControl>
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
							<Input type="password" {...field} placeholder="Password" />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};

export default AccountDetails;
